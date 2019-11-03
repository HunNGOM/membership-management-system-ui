import React from 'react';

type RadioButtonOption = { label: string; value: string };

type Props = {
  name: string;
  items: readonly RadioButtonOption[];
  onChange?(option: RadioButtonOption, name: string): void;
};

export function RadioButtonGroup(props: Props) {
  return (
    <>
      {props.items.map((item, index) => (
        <label key={index}>
          <input
            type="radio"
            name={props.name}
            value={item.value}
            onChange={() => props.onChange && props.onChange(item, props.name)}
          />
          <span>{item.label}</span>
        </label>
      ))}
    </>
  );
}
