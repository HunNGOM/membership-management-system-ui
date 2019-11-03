import { fireEvent, within } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';
import { Member } from '../members/models/member';
import { act } from 'react-dom/test-utils';
import flatpickr from 'flatpickr';

export function aMemberForm(element: HTMLElement) {
  const { memberForm } = defaultLanguageLabels;
  const { queryByLabelText, getByLabelText } = within(element);

  return {
    isDisplayed() {
      const fields = [
        queryByLabelText(memberForm.NAME),
        queryByLabelText(memberForm.ORGANIZATION),
        queryByLabelText(memberForm.BIRTH_DATE),
        queryByLabelText(memberForm.ADDRESS),
        queryByLabelText(memberForm.PHONE_NUMBER),
        queryByLabelText(memberForm.EMAIL),
        queryByLabelText(memberForm.GENDER),
        queryByLabelText(memberForm.REGISTRATION_DATE),
        queryByLabelText(memberForm.MEMBER_CATEGORY),
        queryByLabelText(memberForm.STATUS),
      ];

      return fields.every((field) => field != null);
    },

    fillForm(member: Partial<{ [memberProperty in keyof Member]: string }>) {
      const changeTextField = (label: string, value: string | null | undefined) =>
        value &&
        fireEvent.change(getByLabelText(label), {
          target: { value: value },
        });

      function changeDateTimeField(label: string, value: string) {
        act(() => {
          const datepicker = getByLabelText(label) as HTMLInputElement & {
            _flatpickr: flatpickr.Instance;
          };
          datepicker._flatpickr.setDate(value, true);
        });
      }

      changeDateTimeField(memberForm.BIRTH_DATE, member.birthDate || '');
      changeDateTimeField(memberForm.REGISTRATION_DATE, member.registrationDate || '');

      changeTextField(memberForm.NAME, member.name);
      changeTextField(memberForm.ORGANIZATION, member.organization);
      changeTextField(memberForm.BIRTH_DATE, member.birthDate);
      changeTextField(memberForm.ADDRESS, member.address);
      changeTextField(memberForm.PHONE_NUMBER, member.phoneNumber);
      changeTextField(memberForm.EMAIL, member.email);
      changeTextField(memberForm.GENDER, member.gender);
      changeTextField(memberForm.MEMBER_CATEGORY, member.memberCategory);
      changeTextField(memberForm.STATUS, member.status);
    },
  };
}
