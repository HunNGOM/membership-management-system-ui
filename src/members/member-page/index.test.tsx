import React from 'react';
import { defaultLanguageLabels } from '../../language-context';
import { MemberPage } from './index';
import { render, fireEvent } from '@testing-library/react';
import { MemberStore } from '../../services/member-store';
import { createMemoryHistory, History } from 'history';
import { aMember, aMemberStoreMock, aNeverReturningStore } from '../../test-utils/model-builders';
import { Route, Router } from 'react-router-dom';
import { ApplicationServiceContext } from '../../application-service-context';
import { toTextContent } from '../../test-utils/dom-helpers';

const { memberPage } = defaultLanguageLabels;

function setup(props: { memberStore?: MemberStore; history?: History } = {}) {
  const history = props.history || createMemoryHistory({ initialEntries: ['/findMemberById/1'] });

  const renderResult = render(
    <Router history={history}>
      <Route path="/findMemberById/:id">
        <ApplicationServiceContext.Provider value={{ memberStore: props.memberStore || aNeverReturningStore() }}>
          <MemberPage />
        </ApplicationServiceContext.Provider>
      </Route>
    </Router>,
  );

  return {
    ...renderResult,
    history,
  };
}

test('should have a header', () => {
  const { queryByRole } = setup();

  expect(queryByRole('heading')).toHaveTextContent(memberPage.HEADER);
});

test('should have control buttons', async () => {
  const { findAllByRole } = setup({
    memberStore: aMemberStoreMock({ members: [aMember({ id: '4' })] }),
    history: createMemoryHistory({ initialEntries: ['/findMemberById/4'] }),
  });

  expect((await findAllByRole('button')).map(toTextContent)).toEqual(
    expect.arrayContaining([memberPage.MODIFY_BUTTON, memberPage.PAY_MEMBERSHIP_FEE_BUTTON, memberPage.EXPORT_BUTTON]),
  );
});

test('should navigate to edit member page if user clicks to modify button', async () => {
  const { findByText, history } = setup({
    memberStore: aMemberStoreMock({ members: [aMember({ id: '3' })] }),
    history: createMemoryHistory({ initialEntries: ['/findMemberById/3'] }),
  });

  fireEvent.click(await findByText(memberPage.MODIFY_BUTTON));

  expect(history.location.pathname).toEqual('/member/3/edit');
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
