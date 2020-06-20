import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { UserProvider } from "../store/userStore";

export default function PrivateRoute({ component: Component }, ...rest) {
  const token = sessionStorage.getItem("userToken");
  return (
    <>
      {token ? (
        <Route
          {...rest}
          component={(props) => {
            return (
              <UserProvider>
                <Component {...props} />
              </UserProvider>
            );
          }}
        />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
