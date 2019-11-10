import React from 'react';
import { LanguageContext } from '../../language-context';
import { Page } from '../../page';
import { ApplicationServiceContext } from '../../application-service-context';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Member } from '../models/member';
import { MemberView } from '../member-view';
import { Button } from '../../button';
import { LinkToEditMemberPage } from '../../navigation/navigation-links';

export function useMemberFromParams() {
  const { memberStore } = React.useContext(ApplicationServiceContext);
  const { id } = useParams();
  const [member, setMember] = React.useState<Member | null>(null);

  React.useEffect(() => {
    if (id == null) {
      return;
    }

    memberStore
      .getMembers()
      .then((members) => setMember(members.find((member) => member.id === id.toString()) || null));
  }, [id, memberStore]);

  return member;
}

export function MemberPage() {
  const { memberPage } = React.useContext(LanguageContext);
  const member = useMemberFromParams();

  return (
    <Page header={memberPage.HEADER}>
      {member && (
        <>
          <Button type="secondary">{memberPage.PAY_MEMBERSHIP_FEE_BUTTON}</Button>
          <LinkToEditMemberPage member={member}>{memberPage.MODIFY_BUTTON}</LinkToEditMemberPage>
          <Button type="secondary">{memberPage.EXPORT_BUTTON}</Button>
          <MemberView member={member} />
        </>
      )}
    </Page>
  );
}
