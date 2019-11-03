import React from 'react';
import { MemberTable } from './index';
import { aMember } from '../../test-utils/model-builders';
import { action } from '@storybook/addon-actions';
import { DateTime } from 'luxon';

export default {
  title: MemberTable.name,
};

export const tableWithAMember = () => (
  <MemberTable
    members={[
      aMember({
        name: 'member name',
        id: 'member id',
        organization: 'member organization',
        registrationDate: DateTime.local(),
        status: 'member status',
        birthDate: 'member birthDate',
        address: 'member address',
        phoneNumber: 'member phoneNumber',
        email: 'member email',
        gender: 'member gender',
        memberCategory: 'member memberCategory',
      }),
    ]}
    onSelection={action('onSelection')}
  />
);
