import { Member } from '../models/member';

let members: readonly Member[] = [];

export const memberStore = {
  async createMember(member: Member) {
    members = [
      ...members,
      {
        ...member,
        id: Math.random().toString(),
      },
    ];
  },

  async getMembers() {
    return members;
  },
};

export type MemberStore = typeof memberStore;
