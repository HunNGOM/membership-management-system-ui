import React from 'react';
import { css, Interpolation } from 'emotion';
import { Member } from '../members/models/member';
import { greys } from '../global-styles';

export type Props = {
  member: Member;
  onChange(member: Member): void;
};

const stylesheets = {
  container: css({
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridTemplateRows: 'auto 1fr',
    fontSize: '0.875rem',
  } as Interpolation),

  fieldset: css({
    display: 'contents',
  } as Interpolation),

  legend: css({
    fontWeight: 700,
    color: greys.g800,
    lineHeight: '1.5',
    marginBottom: 5,
  } as Interpolation),

  fields: css({
    display: 'flex',
    flexDirection: 'column',
    gridRow: 'span 2',
  } as Interpolation),

  description: css({
    gridRow: 2,
    color: '#8D8D8D',
    lineHeight: '1.5',
  } as Interpolation),
};

export function Fieldset({
  header,
  description,
  children,
}: {
  header: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={stylesheets.container}>
      <fieldset className={stylesheets.fieldset}>
        <legend className={stylesheets.legend}>{header}</legend>
        <div className={stylesheets.description}>{description}</div>
        <div className={stylesheets.fields}>{children}</div>
      </fieldset>
    </div>
  );
}
