import React from 'react';
import { css, Interpolation } from 'emotion';
import { greys } from '../global-styles';
import { withBorder } from '../utils/styling-utils';

const stylesheets = {
  textBox: css({
    backgroundColor: greys.g100WithOpacity33p,
    ...withBorder({
      borderColor: greys.g300WithOpacity33p,
      borderRadius: 3,
      borderWidth: 1,
    }),
    height: 25,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    width: '100%',
  } as Interpolation),
};

type Props = {
  name?: string;
  value: string;
  isRequired?: boolean;
  onChange?(value: string, name: Props['name']): void;
};

export const TextBox = React.forwardRef<HTMLInputElement, Props>(
  ({ name, value, onChange, isRequired = false }: Props, ref) => (
    <input
      type="text"
      className={stylesheets.textBox}
      name={name}
      value={value}
      required={isRequired}
      ref={ref}
      onChange={(ev) => onChange && onChange(ev.target.value, name)}
    />
  ),
);
TextBox.displayName = 'TextBox';
