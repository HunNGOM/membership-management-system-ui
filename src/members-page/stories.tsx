import React from 'react';
import { MembersPage } from './index';
import { aMember } from '../test-utils/model-builders';
import { action } from '@storybook/addon-actions';

export default {
  title: MembersPage.name,
};

export const displaysPage = () => (
  <MembersPage
    members={[aMember({ name: 'member 1' }), aMember({ name: 'member 2' })]}
    onAdd={action('onAdd')}
    onSelection={action('onSelection')}
  />
);
