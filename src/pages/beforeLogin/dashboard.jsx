import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Dashboard() {
  return (
    <div className="dashboard-main-block">
      <Link to="/login">
        <Button className="dashboard-login-btn">login</Button>
      </Link>
      <Link to="/signUp">
        <Button className="dashboard-signUp-btn">signUp</Button>
      </Link>
    </div>
  );
}
