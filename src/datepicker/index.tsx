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
  const elementRef = React.useRef<HTMLInputElement>();
  const [instance, setInstance] = React.useState<flatpickr.Instance | null>(null);
  const onChangeRef = React.useRef(onChange);

  React.useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  React.useEffect(() => {
    const datePickerInstance = flatpickr(elementRef.current!, {
      onChange([currentDate]) {
        onChangeRef.current(DateTime.fromJSDate(currentDate));
      },
    });

    setInstance(datePickerInstance);

    return () => datePickerInstance.destroy();
  }, []);

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

  return <TextBox name={name} isRequired={isRequired} ref={datePickerRef as React.Ref<HTMLInputElement>} value={''} />;
}
