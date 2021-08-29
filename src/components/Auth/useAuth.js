import { useSelector } from 'react-redux';

export function useAuth() {
  // const userID = localStorage.getItem('token');
  const authedUser = useSelector((state) => state.users.authedUser);

  // console.log(userID, 'USE AUTH ID');

  return authedUser;
  // if (userID) {

  // } else {
  //   return authedUser;
  // }
}
