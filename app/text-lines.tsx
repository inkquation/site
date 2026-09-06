import { Fragment } from 'react';

export default function TextLines({ lines }: { lines: string[] }) {
  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && (
        <>
          {' '}
          <br />
        </>
      )}
      {line}
    </Fragment>
  ));
}
