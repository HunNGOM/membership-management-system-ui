import React from 'react';
import { LanguageContext } from '../language-context';
import { Link } from 'react-router-dom';

export function ApplicationSidebar() {
  const { applicationSidebar } = React.useContext(LanguageContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/members">{applicationSidebar.MEMBERS}</Link>
        </li>
        <li>{applicationSidebar.MEMBERSHIP_FEE}</li>
        <li>{applicationSidebar.ORGANIZATION_DETAILS}</li>
        <li>{applicationSidebar.ORGANIZATIONS}</li>
        <li>{applicationSidebar.REPORTS}</li>
      </ul>
    </nav>
  );
}
