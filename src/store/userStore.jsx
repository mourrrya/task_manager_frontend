import React, { createContext, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

const myUserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_REQUEST":
      return { ...state, loading: true };

    case "FETCH_USER":
      return { userInfo: action.payload, loading: false, error: false };

    case "FETCH_ERROR":
      console.log(action.error);
      return { ...state, loading: false, error: action.error };

    default:
      break;
  }
};

export function UserProvider(props) {
  const initialValue = {
    userInfo: "",
    loading: false,
    error: false,
  };
  const [userData, dispatchUserData] = useReducer(reducer, initialValue);

  return (
    <myUserContext.Provider
      {...props}
      value={[userData, dispatchUserData]}
    ></myUserContext.Provider>
  );
}

export function UserContext() {
  const context = useContext(myUserContext);
  if (!context) {
    throw new Error("userContext must be a inside the scope of UserProvide");
  }
  return context;
}
