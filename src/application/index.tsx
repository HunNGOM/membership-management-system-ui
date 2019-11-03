import React from 'react';
import { MembersPage } from '../members/members-page';
import { ApplicationSidebar } from '../application-sidebar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NewMemberPage } from '../members/new-member-page';
import { MemberPage } from '../members/member-page';
import { EditMemberPage } from '../members/edit-member-page';

export function Application() {
  return (
    <>
      <ApplicationSidebar />
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
    </>
  );
}
