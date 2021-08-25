import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss';

const Navbar = () => {
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

        <li>
          <li>Hello, Adewale Olaoye</li>
        </li>

        <li>
          <NavLink to='/login' activeClassName={style.active}>
            Login
          </NavLink>
        </li>

        <li>
          <li>Logout</li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
