import { useSelector } from 'react-redux';

export function useAuth() {
  const authedUser = useSelector((state) => state.users.authedUser);

  return authedUser;
}
