import React from 'react';
import { MemberForm } from './index';
import { aMember } from '../../test-utils/model-builders';
import { action } from '@storybook/addon-actions';
import { DateTime } from 'luxon';

export default {
  title: MemberForm.name,
};

const onChange = action('onChange');

export const editingExistingMember = () => (
  <MemberForm
    member={aMember({
      name: 'member name',
      id: 'member id',
      organization: 'member organization',
      registrationDate: DateTime.fromISO('1980-01-01'),
      status: 'member status',
      birthDate: DateTime.fromISO('1980-01-01'),
      address: 'member address',
      phoneNumber: 'member phoneNumber',
      email: 'member email',
      gender: 'member gender',
      memberCategory: 'member memberCategory',
    })}
    onChange={onChange}
  />
);
