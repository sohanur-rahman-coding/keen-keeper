"use client";

import { useContext } from "react";
import { communicationContext } from "../contexts/communications.context";
import { FaVideo } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const Call = ({ details }) => {
  const { add } = useContext(communicationContext);

  const handleCall = () => {
    add("video", details.name);
    toast.success(`Video Call With ${details.name}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={handleCall}
      className="btn w-full md:w-60 shadow h-20 text-[18px] flex flex-col gap-0"
    >
      <FaVideo />
      Video Call
    </button>
  );
};

export default Call;
