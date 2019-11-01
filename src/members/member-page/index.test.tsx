import React from 'react';
import { defaultLanguageLabels } from '../../language-context';
import { MemberPage } from './index';
import { render } from '@testing-library/react';
import { MemberStore } from '../../services/member-store';
import { createMemoryHistory, History } from 'history';
import { aMember, aMemberStoreMock, aNeverReturningStore } from '../../test-utils/model-builders';
import { Route, Router } from 'react-router-dom';
import { ApplicationServiceContext } from '../../application-service-context';

const { memberPage } = defaultLanguageLabels;

function setup(props: { memberStore?: MemberStore; history?: History } = {}) {
  return render(
    <Router history={props.history || createMemoryHistory({ initialEntries: ['/findMemberById/1'] })}>
      <Route path="/findMemberById/:id">
        <ApplicationServiceContext.Provider value={{ memberStore: props.memberStore || aNeverReturningStore() }}>
          <MemberPage />
        </ApplicationServiceContext.Provider>
      </Route>
    </Router>,
  );
}

test('should have a header', () => {
  const { queryByRole } = setup();

  expect(queryByRole('heading')).toHaveTextContent(memberPage.HEADER);
});

test('should display a member based on its id', async () => {
  const { findByText, queryByText } = setup({
    memberStore: aMemberStoreMock({
      members: [aMember({ id: '3', name: 'member 3' }), aMember({ id: '4', name: 'member 4' })],
    }),
    history: createMemoryHistory({ initialEntries: ['/findMemberById/3'] }),
  });

  expect(await findByText(/member 3/i)).toBeInTheDocument();
  expect(queryByText(/member 4/i)).not.toBeInTheDocument();
});
