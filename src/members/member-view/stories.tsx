import React from 'react';
import { MemberView } from './index';
import { aMember } from '../../test-utils/model-builders';
import { DateTime } from 'luxon';

export default {
  title: MemberView.name,
};

export const viewExistingMember = () => (
  <MemberView
    member={aMember({
      name: 'member name',
      id: 'member id',
      organization: 'member organization',
      registrationDate: DateTime.local(),
      status: 'member status',
      birthDate: DateTime.local(),
      address: 'member address',
      phoneNumber: 'member phoneNumber',
      email: 'member email',
      gender: 'member gender',
      memberCategory: 'member memberCategory',
    })}
  />
);
