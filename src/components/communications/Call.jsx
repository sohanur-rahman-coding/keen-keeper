"use client";

import { useContext } from "react";
import { communicationContext } from "../contexts/communications.context";

const Call = ({ details }) => {
  const { calling, setCalling } = useContext(communicationContext);

  // console.log(calling , setCalling);
  const handleCall = () => {
    setCalling([...calling, details]);
  };
  console.log(calling);
  return (
    <button onClick={handleCall} className="btn w-60 shadow h-20 text-2xl">
      Call
    </button>
  );
};

export default Call;
