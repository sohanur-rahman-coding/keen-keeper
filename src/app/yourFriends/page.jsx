import FriendCard from "@/components/FriendCard/FriendCard";
import React, { Suspense } from "react";
import Loading from "./loading";

const promiseFriends = async () => {
 
  const res = await fetch("https://keen-keeper-steel.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const FriendsList = async () => {
  const friendData = await promiseFriends();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto mb-16">
      {friendData.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

const YourFriends = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-semibold my-4">Your Friends</h2>

      <Suspense fallback={<Loading />}>
        <FriendsList />
      </Suspense>
    </div>
  );
};

export default YourFriends;
