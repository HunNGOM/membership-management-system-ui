import React, { MouseEventHandler } from 'react';
import { css, cx, Interpolation } from 'emotion';
import { fontSizes, greys } from '../global-styles';
import { withBorder } from '../utils/styling-utils';

const stylesheets = {
  get basic() {
    const height = '25px';
    const paddingSize = 15;

    return css({
      textDecoration: 'none',
      ...withBorder({ borderRadius: 3 }),
      height,
      lineHeight: height,
      fontSize: fontSizes.small,
      paddingLeft: paddingSize,
      paddingRight: paddingSize,
      display: 'inline-block',
    } as Interpolation);
  },

  primary: css({
    backgroundColor: greys.g800,
    color: greys.g000,
  } as Interpolation),

  secondary: css({
    backgroundColor: greys.g100,
    color: greys.g900,
  } as Interpolation),
};

type ButtonType = 'primary' | 'secondary';

const getClassName = (buttonType: ButtonType) => cx([stylesheets.basic, stylesheets[buttonType]]);

type Props = { type: ButtonType; children: React.ReactNode; onClick?(): void };

export function Button({ type, children, onClick }: Props) {
  const handleClick: MouseEventHandler = (ev) => {
    ev.preventDefault();
    onClick && onClick();
  };

  return (
    <a href="#" onClick={handleClick} className={getClassName(type)}>
      {children}
    </a>
  );
}
