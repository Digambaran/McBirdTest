import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "@services";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  console.log("private route", user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};
