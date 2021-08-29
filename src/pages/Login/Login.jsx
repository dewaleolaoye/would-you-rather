import Button from '../../components/Button/Button';
import style from './Login.module.scss';
import QuestionSVG from '../../assets/question.svg';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { _getUsers } from '../../app/api';
import { fetchUsers, authUser } from './userSlice';

const Login = () => {
  const [allUsers, setAllUsers] = useState({});
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [authedUser, setAuthedUser] = useState('');
  const [value, setValue] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await _getUsers();
        setAllUsers(response);
        dispatch(fetchUsers(response));
        return response;
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [dispatch]);

  const handleChange = (e) => {
    setAuthedUser(e.target.value);
  };

  const handleSubmit = (userId) => {
    setValue(userId);

    const filterUser = Object.values(allUsers).filter(({ id }) => {
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
            <option value='' disabled={authedUser === '' ? true : false}>
              Choose user
            </option>

            {Object.values(users.allUsers).map(({ id }) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>

          <Button
            name='Sign in'
            className={style.btn}
            disabled={authedUser === '' ? true : false}
            onClick={() => handleSubmit(authedUser)}
          />
        </>
      )}

      {authedUser === value && <Redirect to='/' />}
    </div>
  );
};

export default Login;
