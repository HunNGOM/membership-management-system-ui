import { Member } from '../members/models/member';
import { MemberStore } from '../services/member-store';
import { DateTime } from 'luxon';

export function aMember(parameters: Partial<Member> = {}): Member {
  return {
    name: '',
    id: '',
    organization: '',
    registrationDate: DateTime.fromISO('1980-01-01'),
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

export function aNeverReturningStore() {
  return {
    async getMembers(): Promise<readonly Member[]> {
      return new Promise<readonly Member[]>(() => {});
    },

    async saveMember() {
      return new Promise<void>(() => {});
    },
  } as MemberStore;
}

export const aMemberStoreMock = ({ members = [] }: { members?: readonly Member[] } = {}): MemberStore => {
  return {
    saveMember: jest.fn(() => Promise.resolve()),
    getMembers: jest.fn(async () => members),
  };
};
