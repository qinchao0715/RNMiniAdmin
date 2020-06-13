import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import routes from '../router'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/componentpage">ComponentPage</Link>
        </li>
        <li>
          <Link to="/formspage">FormsPage</Link>
        </li>
        <li>
          <Link to="/tablespage">TablesPage</Link>
        </li>
        <li>
          <Link to="/chartspage">ChartsPage</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function RouteWithSubRoutes(route) {
  console.log(route)
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
