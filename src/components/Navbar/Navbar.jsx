import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Auth/useAuth';
import { logoutUser } from '../../pages/Login/userSlice';
import style from './Navbar.module.scss';

const Navbar = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser({}));
  };

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to='/' activeClassName={style.active} exact>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/new' activeClassName={style.active}>
            New Questions
          </NavLink>
        </li>

        <li>
          <NavLink to='/leaderboard' activeClassName={style.active}>
            Leaderboard
          </NavLink>
        </li>

        {auth.id !== undefined && <p> Hello, {auth.name}</p>}

        <li>
          {auth.id === undefined ? (
            <NavLink to='/login' activeClassName={style.active}>
              Login
            </NavLink>
          ) : (
            <div className={style.logout} onClick={handleLogout}>
              Logout
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
