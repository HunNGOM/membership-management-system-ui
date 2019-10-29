import { Member } from '../models/member';

let members: readonly Member[] = [];

export const memberStore = {
  createMember(member: Member) {
    members = [...members, member];
  },
};
