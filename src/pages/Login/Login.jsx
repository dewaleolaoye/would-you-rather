import Button from '../../components/Button/Button';
import style from './Login.module.scss';
import QuestionSVG from '../../assets/question.svg';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    setValue(e);
  };

  return (
    <div className={style.login}>
      <h1>Welcome to the Would You Rather App!</h1>
      <p>Please, sign in to continue</p>

      <h2>Sign in</h2>
      <div className={style.img}>
        <img src={QuestionSVG} alt='question' />
      </div>

      <select onChange={handleChange}>
        <option value='' disabled={user === '' ? true : false}>
          Choose user
        </option>
        <option value='sarah'>Sarah Edo</option>
        <option value='wale'>Adewale Olaoye</option>
        <option value='tyler'>Tyler McGinnis</option>
      </select>

      <Button
        name='Sign in'
        className={style.btn}
        disabled={user === '' ? true : false}
        onClick={() => handleSubmit(user)}
      />

      {user === value && <Redirect to='/' />}
    </div>
  );
};

export default Login;
