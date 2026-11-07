"""Regenerate checked-in WebP previews and six localized social cards.

Requires Pillow and macOS fonts. Use --social-only for social-card changes.
Headlines and platform labels come from the same JSON as the landing pages.
Original app screenshots remain unchanged.
"""

import argparse
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, PngImagePlugin

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--font-dir', type=Path, default=Path('/System/Library/Fonts/Supplemental'))
parser.add_argument('--system-font-dir', type=Path, default=Path('/System/Library/Fonts'))
parser.add_argument('--social-only', action='store_true')
args = parser.parse_args()

root = Path(__file__).resolve().parent.parent
public = root / 'public'
assets = public / 'assets'
locales = json.loads((root / 'app/locales.json').read_text())
hero_copy = json.loads((root / 'app/hero-copy.json').read_text())
assert set(locales) == set(hero_copy), 'Every site language needs social-card copy'

serif = args.font_dir / 'Georgia.ttf'
sans = args.font_dir / 'Arial.ttf'
japanese = next(args.system_font_dir.glob('*明朝 ProN.ttc'), None)
songti = args.font_dir / 'Songti.ttc'
korean = args.font_dir / 'AppleMyungjo.ttf'
for font in [serif, sans, japanese, songti, korean]:
    if font is None or not font.is_file():
        parser.error(f'Missing font: {font}; check --font-dir and --system-font-dir')

# Songti's regular SC and TC faces preserve each writing system's glyph forms.
faces = {
    'ja': (japanese, 0),
    'en': (serif, 0),
    'zh-Hans': (songti, 6),
    'zh-Hant': (songti, 7),
    'zh-HK': (songti, 7),
    'ko': (korean, 0),
}

if not args.social_only:
    for name in ['inkquation-editor', 'inkquation-editor-en']:
        with Image.open(assets / f'{name}.png') as source:
            for width in [480, 960, 1440, 1920]:
                height = round(source.height * width / source.width)
                preview = source.resize((width, height), Image.Resampling.LANCZOS)
                preview.save(assets / f'{name}-{width}.webp', quality=86, method=6)


def fit_font(draw, lines, face, maximum, minimum=18):
    path, index = face
    for size in range(maximum, minimum - 1, -1):
        font = ImageFont.truetype(str(path), size, index=index)
        if all(draw.textlength(line, font=font) <= 420 for line in lines):
            return font
    raise ValueError(f'Text does not fit the social card: {lines}')


for locale, info in locales.items():
    copy = hero_copy[locale]
    lines = [copy['lead'], copy['prefix'] + copy['accent']]
    title = 'Inkquation — ' + ' '.join(lines)
    card = Image.new('RGBA', (1200, 630), '#f2f6fc')
    draw = ImageDraw.Draw(card)
    for x in range(0, 1200, 32):
        draw.line((x, 0, x, 630), fill='#e5ecf7')
    for y in range(0, 630, 32):
        draw.line((0, y, 1200, y), fill='#e5ecf7')
    draw.rectangle((0, 0, 1200, 148), fill='#fcfdff')
    with Image.open(assets / 'inkquation-icon.png') as icon:
        card.alpha_composite(icon.resize((72, 72), Image.Resampling.LANCZOS), (62, 40))
    draw.text((152, 44), 'inkquation.', font=ImageFont.truetype(str(serif), 54), fill='#202b3e')
    draw.text((936, 72), 'inkquation.app', font=ImageFont.truetype(str(sans), 23), fill='#617496')
    headline_font = fit_font(draw, lines, faces[locale], maximum=51)
    for y, text in zip([265, 344], lines):
        draw.text((68, y), text, font=headline_font, fill='#2d4eaa')
    subtitle_face = (sans, 0) if locale == 'en' else faces[locale]
    subtitle_font = fit_font(draw, [copy['platform']], subtitle_face, maximum=22)
    draw.text((70, 524), copy['platform'], font=subtitle_font, fill='#617496')
    image_name = 'inkquation-editor-en' if locale == 'en' else 'inkquation-editor'
    with Image.open(assets / f'{image_name}.png') as screenshot:
        screenshot.thumbnail((650, 410), Image.Resampling.LANCZOS)
        card.alpha_composite(screenshot, (518, 210))
    metadata = PngImagePlugin.PngInfo()
    metadata.add_itxt('Title', title, lang=locale)
    metadata.add_itxt('Description', copy['platform'], lang=locale)
    target = public / info['path'].strip('/') / 'og.png'
    target.parent.mkdir(parents=True, exist_ok=True)
    card.convert('RGB').save(target, optimize=True, pnginfo=metadata)
    print(f'{locale}: {target.relative_to(public)} — {title}')
