"use client";
import {  createContext, useState } from "react";

export const communicationContext = createContext();

const CommunicationContextProvider = ({ children }) => {
  const [calling, setCalling] = useState([]);
  const [text, setText] = useState([]);
  const [videoCalling, setVideoCalling] = useState([]);
  
  const data = {
    calling,
    setCalling,
    text,
    setText,
    videoCalling,
    setVideoCalling
  };
  return (
    <communicationContext.Provider value={data}>
      {children}
    </communicationContext.Provider>
  );
};

export default CommunicationContextProvider;
