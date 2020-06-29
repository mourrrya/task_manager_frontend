import axios from "axios";
import { URL, userToken } from "../helper/constant";

export function postUser(link, payload, dispatch, history) {
  axios
    .post(`${URL}${link}`, payload)
    .then((res) => {
      dispatch({ type: "FETCH_USER", payload: res.data });
      if (link === "/user/login") {
        sessionStorage.setItem("userToken", res.data.token);
        history.push("/home");
      } else if (link === "/user") {
        dispatch({ type: "FETCH_USER", payload: res.data });
        history.push("/login");
      }
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({ type: "FETCH_ERROR", error: error.response });
    });
}

export function getUser(link, dispatch) {
  axios
    .get(`${URL}${link}`, userToken())
    .then((res) => {
      !res && dispatch({ type: "GET_REQUEST" });
      dispatch({ type: "FETCH_USER", payload: res.data });
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({ type: "FETCH_ERROR", error: error.response });
    });
}
