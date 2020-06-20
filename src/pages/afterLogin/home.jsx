import React from "react";
import { UserContext } from "../../store/userStore";
// import moduleName from '../';
export default function Home() {
  const [userData, dispatchUserData] = UserContext();
  const isUser = userData && userData.userInfo && userData.userInfo.user;
  const name = isUser && userData.userInfo.user.userName;
  const age = isUser && userData.userInfo.user.userAge;

  return (
    <div className="">
      <div className="">Private User Home</div>
      <h1 className="">{name}</h1>
      <h1 className="">{age}</h1>
    </div>
  );
}
