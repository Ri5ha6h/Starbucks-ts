import React, { useState } from 'react';
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
import ConfirmationDialog from './ConfirmationDialog';

interface Props {}
const App: React.FC<Props> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log("is dialog open", isDialogOpen)

  return (
    <div className="font-sans ">
      {/* <Router>
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
      <Footer /> */}

      <div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="w-full mx-auto mt-20 text-lg underline border-none text-primary-200 active:text-primary-300"
        >
          Click to open confirm Modal
        </button>
        <ConfirmationDialog open={isDialogOpen} onClose={setIsDialogOpen} />
      </div>
    </div>
  );
};

App.defaultProps = {};
export default App;
