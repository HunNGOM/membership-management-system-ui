import { Member } from '../models/member';

export function aMember(parameters: Partial<Member> = {}): Member {
  return {
    name: '',
    id: '',
    organization: '',
    registrationDate: '',
    status: '',
    birthDate: null,
    address: null,
    phoneNumber: null,
    email: null,
    gender: null,
    memberCategory: null,
    ...parameters,
  };
}
