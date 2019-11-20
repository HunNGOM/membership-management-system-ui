import React from 'react';
import { MembersPage } from '../members/members-page';
import { ApplicationSidebar } from '../application-sidebar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NewMemberPage } from '../members/new-member-page';
import { MemberPage } from '../members/member-page';
import { EditMemberPage } from '../members/edit-member-page';
import { css, Interpolation } from 'emotion';
import { LanguageContext } from '../language-context';

export function Application() {
  const {
    applicationSidebar: { APPLICATION_NAME },
  } = React.useContext(LanguageContext);

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <ApplicationSidebar name={APPLICATION_NAME} />
      <main className="sm:flex-1">
        <Switch>
          <Route path="/members">
            <MembersPage />
          </Route>

          <Route path="/member/:id/edit">
            <EditMemberPage />
          </Route>

          <Route path="/member/:id">
            <MemberPage />
          </Route>

          <Route path="/member">
            <NewMemberPage />
          </Route>

          <Route path="/">
            <Redirect to="/members" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
