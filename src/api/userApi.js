import axios from "axios";
import { URL } from "../helper/constant";

export default function postUserApi(link, payload, dispatch, history) {
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
      dispatch({ type: "FETCH_USER", error: error.response });
    });
}
