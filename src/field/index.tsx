import React from 'react';
import { css, Interpolation } from 'emotion';
import { greys } from '../global-styles';
import { withBorder } from '../utils/styling-utils';
import { TextBox } from '../textbox';

export type Props<Value> = {
  label: string;
  name: string;
  value?: Value | null;
  isRequired?: boolean;
  onChange?(value: Value, name: string): void;
  inputAs?(props: Omit<Props<Value>, 'inputAs'>): React.ReactElement<Props<Value>>;
};

const stylesheets = {
  label: css({
    fontWeight: 600,
    display: 'block',
    lineHeight: 1.5,
    marginBottom: 5,
  } as Interpolation),

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

export function Field<Value>({
  inputAs = (props: Props<any>) => (
    <TextBox
      value={props.value != null ? props.value.toString() : ''}
      name={props.name}
      onChange={props.onChange}
      isRequired={props.isRequired}
    />
  ),
  ...props
}: Props<Value>) {
  const { label } = props;
  return (
    <label>
      <span className={stylesheets.label}>{label}</span>
      {inputAs(props)}
    </label>
  );
}
