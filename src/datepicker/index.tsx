import React from 'react';
import { DateTime } from 'luxon';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.css';

type Props = { value: DateTime; onChange?(value: DateTime): void };

function useDatepicker({ value, onChange }: { value: DateTime; onChange(newValue: DateTime): void }) {
  const elementRef = React.useRef<HTMLInputElement>(null);
  const [instance, setInstance] = React.useState<flatpickr.Instance | null>(null);

  React.useEffect(() => {
    if (elementRef.current == null) {
      return;
    }

    const datePickerInstance = flatpickr(elementRef.current, {
      onChange([currentDate]) {
        onChange(DateTime.fromJSDate(currentDate));
      },
    });
    setInstance(datePickerInstance);
    return () => datePickerInstance.destroy();
  }, [elementRef]);

  React.useEffect(() => {
    if (instance == null) {
      return;
    }

    instance.setDate(value.toJSDate());
  }, [instance, value]);

  return elementRef;
}

export function Datepicker({ value, onChange }: Props) {
  const datePickerRef = useDatepicker({
    value,
    onChange(newValue: DateTime): void {
      onChange && onChange(newValue);
    },
  });

  return <input type="text" ref={datePickerRef} />;
}
