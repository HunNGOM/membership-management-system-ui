import React from 'react';

type Props = {
  label: string;
  value?: string;
  isRequired?: boolean;
  onChange?(value: string): void;
};

export function Field({ label, value = '', onChange, isRequired = false }: Props) {
  return (
    <fieldset>
      <label>
        <span>{label}</span>
        <input
          type="text"
          value={value}
          onChange={(ev) => onChange && onChange(ev.target.value)}
          required={isRequired}
        />
      </label>
    </fieldset>
  );
}
