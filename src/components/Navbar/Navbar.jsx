import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss';

const Navbar = ({ authedUser }) => {
  const checkObject = Object.entries(authedUser).length === 0;

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

        {!checkObject && <p> Hello, {authedUser.name}</p>}

        <li>
          {checkObject ? (
            <NavLink to='/login' activeClassName={style.active}>
              Login
            </NavLink>
          ) : (
            <a href='/'>Logout</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
