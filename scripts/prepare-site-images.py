"""Regenerate checked-in WebP previews and the social card (requires Pillow).

Run from the site root. Original app screenshots remain unchanged.
The social card uses macOS Georgia/Arial; pass --font-dir for another font folder.
"""

import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--font-dir', type=Path, default=Path('/System/Library/Fonts/Supplemental'))
args = parser.parse_args()
serif = args.font_dir / 'Georgia.ttf'
sans = args.font_dir / 'Arial.ttf'
if not serif.is_file() or not sans.is_file():
    parser.error('--font-dir must contain Georgia.ttf and Arial.ttf')

assets = Path(__file__).resolve().parent.parent / 'public' / 'assets'
for name in ['inkquation-editor', 'inkquation-editor-en']:
    with Image.open(assets / f'{name}.png') as source:
        for width in [480, 960, 1440, 1920]:
            height = round(source.height * width / source.width)
            preview = source.resize((width, height), Image.Resampling.LANCZOS)
            preview.save(assets / f'{name}-{width}.webp', quality=86, method=6)

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
for y, text in [(265, 'Write by pen.'), (344, 'Switch by key.')]:
    draw.text((68, y), text, font=ImageFont.truetype(str(serif), 51), fill='#2d4eaa')
draw.text((70, 524), 'Handwriting for macOS', font=ImageFont.truetype(str(sans), 22), fill='#617496')
with Image.open(assets / 'inkquation-editor-en.png') as screenshot:
    screenshot.thumbnail((650, 410), Image.Resampling.LANCZOS)
    card.alpha_composite(screenshot, (518, 210))
card.convert('RGB').save(assets.parent / 'og.png', optimize=True)
print('Generated eight WebP previews and public/og.png.')
