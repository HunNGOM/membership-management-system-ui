import React from 'react';

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
      className="px-2 py-2 bg-gray-200 w-full rounded shadow"
      name={name}
      value={value}
      required={isRequired}
      ref={ref}
      onChange={(ev) => onChange && onChange(ev.target.value, name)}
    />
  ),
);
TextBox.displayName = 'TextBox';
