import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from './App.module.scss';
import { PrivateRoute } from './components/Auth/PrivateRoute';
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
            <PrivateRoute exact path='/'>
              <Home />
            </PrivateRoute>

            <PrivateRoute path='/poll/:pollID'>
              <Poll />
            </PrivateRoute>

            <PrivateRoute path='/pollresult/:qid'>
              <PollResult />
            </PrivateRoute>

            <PrivateRoute path='/new'>
              <NewQuestion />
            </PrivateRoute>

            <PrivateRoute path='/leaderboard'>
              <LeaderBoard />
            </PrivateRoute>

            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
