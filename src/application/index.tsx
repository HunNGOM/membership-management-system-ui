import React from 'react';
import { MembersPage } from '../members-page';
import { ApplicationSidebar } from '../application-sidebar';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { NewMemberPage } from '../new-member-page';

function useApplicationNavigation() {
  const history = useHistory();

  return {
    goToNewMemberPage() {
      history.push('/member');
    },
  };
}

export function Application() {
  const { goToNewMemberPage } = useApplicationNavigation();

  return (
    <>
      <ApplicationSidebar />
      <Switch>
        <Route path="/members">
          <MembersPage members={[]} onAdd={goToNewMemberPage} onSelection={() => {}} />
        </Route>

        <Route path="/member">
          <NewMemberPage />
        </Route>

        <Route path="/">
          <Redirect to="/members" />
        </Route>
      </Switch>
    </>
  );
}
