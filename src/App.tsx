import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Footer from './components/Footer';
import Gift from './components/Gift';

import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Reward from './components/Reward';

interface Props {}
const App: React.FC<Props> = (props) => {
  return (
    <div className="font-sans ">
      <Router>
        <Nav />

        <Switch>
          <Redirect from="/" to="/reward" exact />
          <Route path="/reward">
            <Reward />
          </Route>
          <Route path="/gift">
            <Gift />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

App.defaultProps = {};
export default App;
