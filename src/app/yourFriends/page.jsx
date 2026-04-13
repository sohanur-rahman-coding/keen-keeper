import FriendCard from "@/components/FriendCard/FriendCard";
import React from "react";
// import FriendCard from "../FriendCard/FriendCard";

const promiseFriends = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  const data = await res.json();
  return data;
};
const YourFriends = async () => {
  const friendData = await promiseFriends();
  // console.log(friendData);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-semibold my-4">Your Friends</h2>
      <div className="grid grid-cols-3 gap-4 mx-auto mb-16">
        {friendData.map((friend) => (
          <FriendCard key={friend.id} friend={friend}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default YourFriends;
