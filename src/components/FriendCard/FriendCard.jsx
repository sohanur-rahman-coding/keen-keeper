import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <div>
      <Link href={`/yourFriends/${friend.id}`} className="card bg-base-100  shadow-sm">
        <figure className="px-10 pt-10 ">
          <Image
          className="rounded-full"
            width={100}
            height={100}
            src={friend.picture}
            alt="friend"
          ></Image>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{friend.name}</h2>
          <p> {friend.days_since_contact}d ago </p>
          <div className="flex gap-2">
            {friend.tags.map((tag, index) => {
              return (
                <span key={index} className="badge badge-soft badge-success">
                  {tag}
                </span>
              );
            })}
          </div>
         <div className="mt-2">
          <span
            className={`badge ${
              friend.status === "overdue"
                ? "badge-secondary bg-red-500"
                : friend.status === "almost due"
                ? "badge-warning text-white"
                : "badge-success bg-green-700 text-white"
            }`}
          >
            {friend.status}
          </span>
        </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
