import Dashboard from "@components/Dashboard";
import Login from "@components/Login";
import PrivateRoute from "@components/PrivateRoute";
import { ProvideAuth } from "@services";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="flex w-full min-h-screen">
      <ProvideAuth>
        <Router>
          <Switch>

            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
            ></PrivateRoute>

            <Route path="/">
              <Login />
            </Route>

          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
};
export default App;
