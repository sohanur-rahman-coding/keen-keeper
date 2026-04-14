"use client";

import { useContext } from "react";
import { communicationContext } from "../contexts/communications.context";



const VideoCalling = ({ details }) => {
  const {videoCalling, setVideoCalling} = useContext(communicationContext)
  
  // console.log(calling , setCalling);
  const handleVideoCall = () => {
    setVideoCalling([...videoCalling, details]);
  };
  console.log(videoCalling);
  return (
    <button onClick={handleVideoCall} className="btn w-60 shadow h-20 text-2xl">
      Video Call
    </button>
  );
};

export default VideoCalling;
