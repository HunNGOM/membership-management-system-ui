export interface Member {
  name: string;
  id: string;
  organization: string;
  registrationDate: string;
  status: string;

  birthDate: string | null;
  address: string | null;
  phoneNumber: string | null;
  email: string | null;
  gender: string | null;
  memberCategory: string | null;
}
