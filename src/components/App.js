import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Difficulty from './pages/Difficulty';
import HashRate from './pages/HashRate';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/difficulty">
          <Difficulty />
        </Route>
        <Route path="/hash-rate">
          <HashRate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
