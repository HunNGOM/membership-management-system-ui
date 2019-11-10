import React from 'react';
import { MembersPage } from '../members/members-page';
import { ApplicationSidebar } from '../application-sidebar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NewMemberPage } from '../members/new-member-page';
import { MemberPage } from '../members/member-page';
import { EditMemberPage } from '../members/edit-member-page';
import { css, Interpolation } from 'emotion';

const stylesheets = {
  container: css({
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
  } as Interpolation),
};

export function Application() {
  return (
    <div className={stylesheets.container}>
      <ApplicationSidebar />
      <main>
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
