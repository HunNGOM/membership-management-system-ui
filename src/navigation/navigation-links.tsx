import React from 'react';
import { useHistory } from 'react-router-dom';
import { Member } from '../members/models/member';
import { Button } from '../button';

function withPredefinedRoute<RouteProps>(route: (routeProps: RouteProps) => string) {
  return function LinkTo(props: RouteProps & { children?: React.ReactNode; onClick?(): unknown | Promise<unknown> }) {
    const history = useHistory();
    const nextRoute = route(props);

    return (
      <Button
        onClick={async () => {
          if (props.onClick) {
            await Promise.resolve(props.onClick());
          }
          history.push(nextRoute);
        }}>
        {props.children}
      </Button>
    );
  };
}

const staticRoute = (route: string) => () => route;

export const LinkToNewMemberPage = withPredefinedRoute(staticRoute('/member'));
export const LinkToMembersPage = withPredefinedRoute(staticRoute('/members'));
export const LinkToViewMemberPage = withPredefinedRoute<{ member: Member }>(({ member }) => `/member/${member.id}`);
export const LinkToEditMemberPage = withPredefinedRoute<{ member: Member }>(
  ({ member }) => `/member/${member.id}/edit`,
);
