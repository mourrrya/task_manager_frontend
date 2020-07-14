import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { UserProvider } from "../store/userStore";
import { TaskProvider } from "../store/taskStore";

import PrivateHeader from "../components/privateHeader/privateHeader";

export default function PrivateRoute({ component: Component }, ...rest) {
  const token = sessionStorage.getItem("userToken");
  return (
    <>
      {token ? (
        <>
          <PrivateHeader />
          <Route
            {...rest}
            component={(props) => {
              return (
                <UserProvider>
                  <TaskProvider>
                    <Component {...props} />{" "}
                  </TaskProvider>
                </UserProvider>
              );
            }}
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
