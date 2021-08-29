import Button from '../../components/Button/Button';
import style from './Login.module.scss';
import QuestionSVG from '../../assets/question.svg';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authUser, fetchAllUsers } from './userSlice';
import { useAuth } from '../../components/Auth/useAuth';

const Login = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    dispatch(fetchAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleSubmit = (userId) => {
    const filterUser = Object.values(users.allUsers).filter(({ id }) => {
      return id === userId;
    });

    dispatch(authUser(filterUser));
  };

  return (
    <div className={style.login}>
      <h1>Welcome to the Would You Rather App!</h1>
      <p>Please, sign in to continue</p>

      <h2>Sign in</h2>
      <div className={style.img}>
        <img src={QuestionSVG} alt='question' />
      </div>

      {users.loading === 'idle' ? (
        'Loading users...'
      ) : (
        <>
          <select onChange={handleChange}>
            <option value=''>Choose user</option>

            {Object.values(users.allUsers).map(({ id }) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>

          <Button
            name='Sign in'
            className={style.btn}
            disabled={selectedUser === '' ? true : false}
            onClick={() => handleSubmit(selectedUser)}
          />
        </>
      )}

      {auth.id !== undefined && <Redirect to='/' />}
    </div>
  );
};

export default Login;
