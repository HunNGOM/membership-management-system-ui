import React from 'react';

export type Props<Value> = {
  label: string;
  name: string;
  value?: Value | null;
  isRequired?: boolean;
  onChange?(value: Value, name: string): void;
  inputAs?(props: Omit<Props<Value>, 'inputAs'>): React.ReactElement<Props<Value>>;
};

export function Field<Value extends {}>({
  inputAs = (props) => (
    <input
      type="text"
      value={props.value != null ? props.value.toString() : ''}
      name={props.name}
      onChange={(ev) => props.onChange && props.onChange(ev.target.value, props.name)}
      required={props.isRequired}
    />
  ),
  ...props
}: Props<Value>) {
  const { label } = props;
  return (
    <fieldset>
      <label>
        <span>{label}</span>
        {inputAs(props)}
      </label>
    </fieldset>
  );
}
