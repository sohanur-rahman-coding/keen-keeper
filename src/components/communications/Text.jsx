"use client";

import { useContext } from "react";
import { communicationContext } from "../contexts/communications.context";



const Text = ({ details }) => {
  const {text , setText} = useContext(communicationContext)
  
  // console.log(calling , setCalling);
  const handleText = () => {
    setText([...text, details]);
  };
  console.log(text);
  return (
    <button onClick={handleText} className="btn w-60 shadow h-20 text-2xl">
      Text
    </button>
  );
};

export default Text;
