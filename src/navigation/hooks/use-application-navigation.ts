import { useHistory } from 'react-router';
import { Member } from '../../members/models/member';

export function useApplicationNavigation() {
  const history = useHistory();

  return {
    goToEditMemberPage({ id }: Member) {
      history.push(`/member/${id}`);
    },
  };
}
