import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/form">Create User</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users/update/:id"  render={props => <UserForm  type="update"  {...props } /> }/>
          <Route path="/users/:id"  component={User}/>
          <Route path="/users" component={Users}/>
          <Route path="/form"  render={() => <UserForm  type="create" /> }/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;