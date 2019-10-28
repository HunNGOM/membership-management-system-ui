import React from 'react';
import { MemberTable, Props } from './index';
import { render } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';
import { toTextContent } from '../test-utils/dom-helpers';
import { aMember } from '../test-utils/model-builders';

const { memberTable } = defaultLanguageLabels;

function setup(props: Partial<Props> = {}) {
  return render(<MemberTable members={[]} onSelection={() => {}} {...props} />);
}

test('should display headers', () => {
  const { queryAllByRole } = setup({ members: [] });

  expect(queryAllByRole('columnheader').map(toTextContent)).toEqual(
    expect.arrayContaining([memberTable.NAME, memberTable.ID, memberTable.ORGANIZATION, memberTable.ACTIONS]),
  );
});

test('should display members', () => {
  const { queryAllByRole } = setup({
    members: [
      aMember({
        name: 'member name',
        id: 'member id',
        organization: 'member organization',
      }),
    ],
  });

  expect(queryAllByRole('cell').map(toTextContent)).toEqual(
    expect.arrayContaining(['member name', 'member id', 'member organization']),
  );
});
