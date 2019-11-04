import { Member } from '../members/models/member';

let members: readonly Member[] = [];

export const memberStore = {
  async saveMember(member: Member) {
    return new Promise((resolve) => {
      setTimeout(() => {
        members = [
          ...members,
          {
            ...member,
            id: Math.random().toString(),
          },
        ];
        resolve(members);
      }, 1000);
    });
  },

  async getMembers() {
    return members;
  },
};

export type MemberStore = typeof memberStore;
