import React from 'react';
import { MembersPage } from '../members-page';
import { ApplicationSidebar } from '../application-sidebar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NewMemberPage } from '../new-member-page';
import { useApplicationNavigation } from '../services/application-navigation-hook';

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
