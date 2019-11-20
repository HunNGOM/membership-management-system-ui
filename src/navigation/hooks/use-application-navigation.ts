import { useHistory } from 'react-router';
import { Member } from '../../members/models/member';

export function useApplicationNavigation() {
  const history = useHistory();

  return {
    links: {
      membersPageLink: '/members'
    },

    goToViewMemberPage({ id }: Member) {
      history.push(`/member/${id}`);
    },
  };
}
