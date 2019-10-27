import React, { MutableRefObject, useEffect } from 'react';
import { DateTime } from 'luxon';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.css';

type Props = { value: DateTime; onChange?(value: DateTime): void };

function useFlatpickr(
  elementRef: MutableRefObject<HTMLInputElement | null>,
  events: { onChange(newValue: DateTime): void },
) {
  const [instance, setInstance] = React.useState<flatpickr.Instance | null>(null);
  useEffect(() => {
    if (elementRef.current == null) {
      return;
    }

    const datePickerInstance = flatpickr(elementRef.current, {
      onChange([currentDate]) {
        events.onChange(DateTime.fromJSDate(currentDate));
      },
    });
    setInstance(datePickerInstance);
    return () => datePickerInstance.destroy();
  }, [elementRef]);

  return instance;
}

export function Datepicker({ value, onChange }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const instance = useFlatpickr(inputRef, {
    onChange(newValue: DateTime): void {
      onChange && onChange(newValue);
    },
  });

  React.useEffect(() => {
    if (instance == null) {
      return;
    }

    instance.setDate(value.toJSDate());
  }, [instance, value]);

  return <input type="text" ref={inputRef} />;
}
