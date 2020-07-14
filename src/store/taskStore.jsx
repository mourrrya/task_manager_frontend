import React, { useReducer, useContext, createContext } from "react";

const myTaskContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_REQUEST":
      return { ...state, loading: true };

    case "FETCH_TASK":
      return { data: action.payload, loading: false, error: false };

    case "DELETE_TASK":
      const data = state.data.filter((data) => data._id !== action.id);
      return { data, loading: false, error: false };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export function TaskProvider(props) {
  const initialValue = {
    data: [],
    loading: false,
    error: false,
  };
  const [task, dispatchTask] = useReducer(reducer, initialValue);

  return (
    <myTaskContext.Provider
      {...props}
      value={[task, dispatchTask]}
    ></myTaskContext.Provider>
  );
}

export function TaskContext() {
  const context = useContext(myTaskContext);
  if (!context) {
    throw new Error("TaskContext must be a inside the scope of TaskProvide");
  }
  return context;
}
