import { useReducer, useEffect } from "react";
import Axios from "axios";
import { URL } from "../../helper/constant";

const reducer = (state, action) => {
  switch (action.type) {
    case "":
      break;

    default:
      break;
  }
};
export default function usePostApi(link, payload) {
  const initialValue = {
    data: "",
    loading: "",
    error: "",
  };
  const [data, dispatchData] = useReducer(reducer, initialValue);

  useEffect(() => {
    Axios.get(`${URL}${link}`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
}
