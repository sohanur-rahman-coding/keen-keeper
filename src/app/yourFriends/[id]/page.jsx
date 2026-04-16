// import Call from "@/components/communications/call";
import Call from "@/components/communications/Call";
import Text from "@/components/communications/Text";
import VideoCalling from "@/components/communications/VideoCalling";
import Image from "next/image";
import React from "react";
import { IoArchive } from "react-icons/io5";
import { MdDeleteOutline, MdOutlineSnooze } from "react-icons/md";
const promiseFriends = async () => {
  const res = await fetch("https://keen-keeper-steel.vercel.app/data.json");
  const data = await res.json();
  return data;
};
const FriendDetails = async ({ params }) => {
  const { id } = await params;
  const friends = await promiseFriends();
  const details = friends.find((details) => details.id == id);
  // console.log(details, "details");
  return (
    <div className="w-11/12 mx-auto justify-center flex flex-col md:flex-row gap-2 md:gap-12">
      <div className="left md:my-12">
        <div className="card bg-base-100 max-w-87.5   shadow-sm">
          <figure className="px-10 pt-10 ">
            <Image
              className="rounded-full"
              width={100}
              height={100}
              src={details.picture}
              alt="friend"
            ></Image>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{details.name}</h2>

            <div className="mt-2">
              <span
                className={`badge ${
                  details.status === "overdue"
                    ? "badge-secondary bg-red-500"
                    : details.status === "almost due"
                      ? "badge-warning text-white"
                      : "badge-success bg-green-700 text-white"
                }`}
              >
                {details.status}
              </span>
            </div>
            <div className="flex gap-2">
              {details.tags.map((tag, index) => {
                return (
                  <span key={index} className="badge badge-soft badge-success">
                    {tag}
                  </span>
                );
              })}
            </div>
            <div>
              <p>{`"${details.bio}"`} </p>
              <p>Preferred : {details.email} </p>
            </div>
          </div>
        </div>
        <div className="space-y-2 my-4 flex flex-col">
          <button className="btn bg-white btn-wide max-w-87.5">
            <MdOutlineSnooze />
            Snooze 2 weeks
          </button>
          <button className="btn bg-white btn-wide max-w-87.5">
            <IoArchive />
            Archive
          </button>
          <button className="btn bg-white btn-wide max-w-87.5 text-red-500">
            <MdDeleteOutline />
            Delete
          </button>
        </div>
      </div>
      <div className="right my-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          <div className="bg-white py-6 shadow px-10 rounded-2xl w-full md:w-65 ">
            <h2 className="text-2xl font-bold">{details.days_since_contact}</h2>
            <p className="text-[18px] ">Days Since Contact</p>
          </div>
          <div className="bg-white py-6 shadow px-10 rounded-2xl w-full md:w-65 ">
            <h2 className="text-2xl font-bold">{details.goal}</h2>
            <p className="text-[18px] ">Goal (Days)</p>
          </div>
          <div className="bg-white py-6 shadow px-10 rounded-2xl w-full md:w-65 ">
            <h2 className="text-2xl font-bold">{details.next_due_date}</h2>
            <p className="text-[18px] ">Next Due</p>
          </div>
        </div>
        <div>
          <div className="bg-white py-6 my-4 shadow px-10 rounded-2xl  ">
            <div className="flex justify-between">
              <h3 className="">Relationship Goal</h3>
              <button className="btn  h-6">Edit</button>
            </div>
            <p className=" text-left ">
              Connect every{" "}
              <span className="text-2xl font-semibold">{details.goal}</span>
              days
            </p>
          </div>
        </div>
        <div className="bg-white py-6 my-4 shadow px-6 rounded-2xl space-y-4 mx-auto ">
          <h2 className="text-2xl text-left">Quick Check-In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
            <Call details={details}></Call>
            <Text details={details}></Text>
            <VideoCalling details={details}></VideoCalling>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
