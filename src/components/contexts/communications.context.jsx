"use client";
import { createContext, useState } from "react";

export const communicationContext = createContext();

const CommunicationContextProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  // ✅ EASY add function
  const add = (type, name) => {
    const newItem = {
      id: Date.now(),
      type,
      name,
      time: new Date(),
    };

    setTimeline([newItem, ...timeline]); // new first
  };

  return (
    <communicationContext.Provider value={{ timeline, add }}>
      {children}
    </communicationContext.Provider>
  );
};

export default CommunicationContextProvider;