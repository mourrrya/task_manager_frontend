import React, { useEffect } from "react";
import { UserContext } from "../../store/userStore";
import { getUser } from "../../api/userApi";

export default function Home() {
  const [userData, dispatchUserData] = UserContext();
  const { userInfo, loading, error } = userData;
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    getUser("/user/me", dispatchUserData);
  }, []);

  return (
    <div className="home-main">
      {!loading ? (
        <h1 className="home-main__username">Welcome {userInfo.userName}!</h1>
      ) : (
        <p>loading...</p>
      )}
      <h2 className="home-main__userAge">{userInfo.userAge}</h2>
    </div>
  );
}
