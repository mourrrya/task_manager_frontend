import React from "react";
import Task from "./task";
import User from "./user";


export default function Home() {
  return (
    <div className="main-block">
      <User></User>
      <Task></Task>
    </div>
  );
}
