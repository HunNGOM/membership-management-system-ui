import { DateTime } from 'luxon';

export interface Member {
  name: string;
  id: string;
  organization: string;
  registrationDate: DateTime;
  status: string;

  birthDate: DateTime | null;
  address: string | null;
  phoneNumber: string | null;
  email: string | null;
  gender: string | null;
  memberCategory: string | null;
}
