import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import { Home, LeaderBoard, NewQuestion, Login, Poll } from './pages';

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

            <Route exact path='/poll/:id'>
              <Poll />
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
    </Router>
  );
}

export default App;
