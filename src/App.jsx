import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import {
  Home,
  LeaderBoard,
  NewQuestion,
  Login,
  Poll,
  PollResult,
} from './pages';

function App() {
  return (
    <Router>
      <div className={style.app}>
        <Navbar />

        <div className={style.page}>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/poll/:id'>
              <Poll />
            </Route>

            <Route path='/pollresult/:id'>
              <PollResult />
            </Route>

            <Route path='/new'>
              <NewQuestion />
            </Route>

            <Route path='/leaderboard'>
              <LeaderBoard />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </div>

      {/* <footer>

      </footer> */}
    </Router>
  );
}

export default App;
