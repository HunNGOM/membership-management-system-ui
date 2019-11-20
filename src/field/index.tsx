import React from 'react';
import { TextBox } from '../textbox';

export type Props<Value> = {
  label: string;
  name: string;
  value?: Value | null;
  isRequired?: boolean;
  onChange?(value: Value, name: string): void;
  inputAs?(props: Omit<Props<Value>, 'inputAs'>): React.ReactElement<Props<Value>>;
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
    <label className="mb-4 block">
      <span className="text-sm sm:px-1 py-2 inline-block font-semibold">{label}</span>
      {inputAs(props)}
    </label>
  );
}
