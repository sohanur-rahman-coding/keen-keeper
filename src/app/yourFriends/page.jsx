import React from "react";

const promiseFriends = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const YourFriends = () => {
const friendData = promiseFriends()
console.log(friendData);
  return (
    <div>
      <h2>Your Friends</h2>
      <div></div>
    </div>
  );
};

export default YourFriends;
