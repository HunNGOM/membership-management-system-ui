import React from 'react';
import { defaultLanguageLabels } from '../../language-context';
import { EditMemberPage } from './index';
import { render, fireEvent } from '@testing-library/react';
import { MemberStore } from '../../services/member-store';
import { createMemoryHistory, History } from 'history';
import { aMember, aMemberStoreMock, aNeverReturningStore } from '../../test-utils/model-builders';
import { Route, Router } from 'react-router-dom';
import { ApplicationServiceContext } from '../../application-service-context';
import { toTextContent } from '../../test-utils/dom-helpers';
import { act } from 'react-dom/test-utils';

const { editMemberPage } = defaultLanguageLabels;

function setup(props: { memberStore?: MemberStore; history?: History } = {}) {
  const history = props.history || createMemoryHistory({ initialEntries: ['/findMemberById/1'] });
  const memberStore = props.memberStore || aNeverReturningStore();

  const renderResult = render(
    <Router history={history}>
      <Route path="/findMemberById/:id">
        <ApplicationServiceContext.Provider value={{ memberStore }}>
          <EditMemberPage />
        </ApplicationServiceContext.Provider>
      </Route>
    </Router>,
  );

  return {
    ...renderResult,
    history,
    memberStore,
  };
}

test('should have a header', () => {
  const { queryByRole } = setup();

  expect(queryByRole('heading')).toHaveTextContent(editMemberPage.HEADER);
});

test('should have control buttons', async () => {
  const { findAllByRole } = setup({
    memberStore: aMemberStoreMock({ members: [aMember({ id: '2' })] }),
    history: createMemoryHistory({ initialEntries: ['/findMemberById/2'] }),
  });

  expect((await findAllByRole('button')).map(toTextContent)).toEqual(
    expect.arrayContaining([
      editMemberPage.SAVE_BUTTON,
      editMemberPage.PAY_MEMBERSHIP_FEE_BUTTON,
      editMemberPage.REMOVE_MEMBER_BUTTON,
    ]),
  );
});

test('should navigate to view member page if user clicks to save button', async () => {
  const { findByText, history } = setup({
    memberStore: aMemberStoreMock({ members: [aMember({ id: '3' })] }),
    history: createMemoryHistory({ initialEntries: ['/findMemberById/3/edit'] }),
  });

  fireEvent.click(await findByText(editMemberPage.SAVE_BUTTON));

  expect(history.location.pathname).toEqual('/member/3');
});

test('should save member if user clicks to save button', async () => {
  const { findByText, memberStore } = setup({
    memberStore: aMemberStoreMock({ members: [aMember({ id: '3' })] }),
    history: createMemoryHistory({ initialEntries: ['/findMemberById/3/edit'] }),
  });

  fireEvent.click(await findByText(editMemberPage.SAVE_BUTTON));

  expect(memberStore.saveMember).toHaveBeenCalledWith(aMember({ id: '3' }));
});

test('should display a member based on its id', async () => {
  const { findByDisplayValue, queryByDisplayValue } = setup({
    memberStore: aMemberStoreMock({
      members: [aMember({ id: '3', name: 'member 3' }), aMember({ id: '4', name: 'member 4' })],
    }),
    history: createMemoryHistory({ initialEntries: ['/findMemberById/3/edit'] }),
  });

  expect(await findByDisplayValue(/member 3/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member 4/i)).not.toBeInTheDocument();
});
