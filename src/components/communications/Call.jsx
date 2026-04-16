"use client";

import { useContext } from "react";
import { communicationContext } from "../contexts/communications.context";
import { MdAddCall } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const Call = ({ details }) => {
  const { add } = useContext(communicationContext);

  const handleCall = () => {
    add("call", details.name);
        toast.success(`Call With ${details.name}`, {
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
    <button onClick={handleCall} className="btn w-full md:w-60 shadow h-20 text-[18px] flex flex-col gap-0">
      <MdAddCall />
      Call
    </button>
  );
};

export default Call;
