import React from 'react';
import { LanguageContext } from '../language-context';
import { Page } from '../page';
import { ApplicationServicesContext } from '../application-services-context';
import { useParams } from 'react-router-dom';
import { Member } from '../models/member';
import { MemberView } from '../member-view';

export function MemberPage() {
  const { memberPage } = React.useContext(LanguageContext);
  const { memberStore } = React.useContext(ApplicationServicesContext);
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

  return <Page header={memberPage.HEADER}>{member && <MemberView member={member} />}</Page>;
}
