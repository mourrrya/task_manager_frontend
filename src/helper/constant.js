export const URL = "http://localhost:3005";

export function userToken() {
  return {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("userToken"),
    },
  };
}
