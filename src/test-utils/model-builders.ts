import { Member } from '../members/models/member';
import { MemberStore } from '../services/member-store';

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

export function aNeverReturningStore() {
  return {
    async getMembers(): Promise<readonly Member[]> {
      return new Promise<readonly Member[]>(() => {});
    },

    async createMember() {
      return new Promise<void>(() => {});
    },
  } as MemberStore;
}

export const aMemberStoreMock = ({ members = [] }: { members?: readonly Member[] } = {}): MemberStore => {
  return {
    createMember: jest.fn(() => Promise.resolve()),
    getMembers: jest.fn(async () => members),
  };
};
