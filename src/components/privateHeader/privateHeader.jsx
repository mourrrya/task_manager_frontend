import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { URL, userToken } from "../../helper/constant";
import "./_privateHeader.scss";

export default function PrivateHeader() {
  const history = useHistory();

  const handleLogout = () => {
    Axios.post(`${URL}/user/logout`, null, userToken())
      .then((res) => {
        console.log(res.data);
        sessionStorage.clear();
        history.push("/");
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div className="private-header-main">
      <Link to="/home" className="private-header-main__link">
        Home
      </Link>
      <Link to="/user" className="private-header-main__link">
        User
      </Link>
      <Link to="/create_task" className="private-header-main__link">
        Create Task
      </Link>
      <Link to="/tasks" className="private-header-main__link">
        My Tasks
      </Link>
      <Button onClick={handleLogout} className="private-header-main__link">
        logout
      </Button>
    </div>
  );
}
