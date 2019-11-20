import React from 'react';
import { LanguageContext } from '../language-context';
import { useApplicationNavigation } from '../navigation/hooks/use-application-navigation';
import { ApplicationMenuItem } from '../application-menu-item';

export function ApplicationSidebar({ name }: { name: string }) {
  const { applicationSidebar } = React.useContext(LanguageContext);
  const {
    links: { membersPageLink },
  } = useApplicationNavigation();

  return (
    <nav className="sm:w-56 bg-blue-800 text-white px-4">
      <h1>{name}</h1>
      <ul>
        <ApplicationMenuItem href={membersPageLink}>{applicationSidebar.MEMBERS}</ApplicationMenuItem>
        <ApplicationMenuItem href="">{applicationSidebar.MEMBERSHIP_FEE}</ApplicationMenuItem>
        <ApplicationMenuItem href="">{applicationSidebar.ORGANIZATION_DETAILS}</ApplicationMenuItem>
        <ApplicationMenuItem href="">{applicationSidebar.ORGANIZATIONS}</ApplicationMenuItem>
        <ApplicationMenuItem href="">{applicationSidebar.REPORTS}</ApplicationMenuItem>
      </ul>
    </nav>
  );
}
