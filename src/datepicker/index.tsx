import React from 'react';
import { DateTime } from 'luxon';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.css';
import { TextBox } from '../textbox';

type Props = {
  value?: DateTime | null;
  onChange?(value: DateTime, name: string): void;
  name: string;
  isRequired?: boolean;
};

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
  }, [elementRef, onChange]);

  React.useEffect(() => {
    if (instance == null) {
      return;
    }

    instance.setDate(value.toJSDate());
  }, [instance, value]);

  return elementRef;
}

export function Datepicker({ value, name, isRequired, onChange }: Props) {
  const datePickerRef = useDatepicker({
    value: value || DateTime.local(),
    onChange(newValue: DateTime): void {
      onChange && onChange(newValue, name);
    },
  });

  return <TextBox name={name} isRequired={isRequired} ref={datePickerRef} value={''} />;
}
