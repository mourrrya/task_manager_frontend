import { URL, userToken } from "../helper/constant";
import Axios from "axios";
import { message } from "antd";

export function postTask(data, dispatch, form) {
  Axios.post(`${URL}/task`, data, userToken())
    .then((res) => {
      !res && dispatch({ type: "GET_REQUEST" });
      dispatch({ type: "POST_TASK", payload: res.data });
      message.success("New Task Added successfully!");
      form.resetFields();
    })
    .catch((e) => {
      dispatch({ type: "FETCH_ERROR", error: e.response });
    });
}

export function getTask(dispatch) {
  Axios.get(`${URL}/task`, userToken())
    .then((res) => {
      !res && dispatch({ type: "GET_REQUEST" });
      dispatch({ type: "FETCH_TASK", payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: "FETCH_ERROR", error: e.response });
    });
}

export function deleteTask(id, dispatch) {
  Axios.delete(`${URL}/task/${id}`, userToken())
    .then((res) => {
      !res && dispatch({ type: "GET_REQUEST" });
      dispatch({ type: "DELETE_TASK", id });
      message.success("task deleted successfully");
    })
    .catch((e) => {
      dispatch({ type: "FETCH_ERROR", error: e.response });
    });
}
