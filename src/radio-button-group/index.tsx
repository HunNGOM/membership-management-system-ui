import React from 'react';
import { cx } from 'emotion';

type RadioButtonOption = { label: string; value: string };

type Props = {
  name: string;
  items: readonly RadioButtonOption[];
  onChange?(option: RadioButtonOption, name: string): void;
};

export function RadioButtonGroup(props: Props) {
  return (
    <div className="inline-block border rounded shadow bg-white">
      {props.items.map((item, index) => {
        const isFirstElement = index === 0;

        return (
          <label
            key={index}
            className={cx('inline-block cursor-pointer px-4 py-2 text-sm', !isFirstElement && 'border-l')}>
            <input
              type="radio"
              name={props.name}
              value={item.value}
              className="hidden"
              onChange={() => props.onChange && props.onChange(item, props.name)}
            />
            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
}
