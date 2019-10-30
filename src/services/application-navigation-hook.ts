import { useHistory } from 'react-router';

export function useApplicationNavigation() {
  const history = useHistory();

  return {
    goToNewMemberPage() {
      history.push('/member');
    },
    goToMembersPage() {
      history.push('/members');
    }
  };
}
