import "./App.css";
import Tasks from "./tasks";
import Insert from "./insert";
import Update from "./update";
import {useState} from 'react';
import { useSelector } from "react-redux";
import Login from "./login";
import CreateUser from "./createUser";
import ProtectedRoute from "./protectedRoute";
import Profile from "./Profile";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const token2 = useSelector((state) => state.state);
  console.log(token2);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/insert">
            <Insert />
          </Route>
          <Route path="/update/:id">
            <Update />
          </Route>
          <Route path="/task">
            <Tasks />
          </Route>
          <Route path="/Create">
<CreateUser />
          </Route>
        </Switch>
      </div>

      <ProtectedRoute
        path={`/pro`}
        component={Profile}
        isAuth={isAuth}
      />
      <Route path="/enter">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
