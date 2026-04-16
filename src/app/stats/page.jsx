"use client";

import React, { useContext } from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { communicationContext } from "@/components/contexts/communications.context";

const Stats = () => {
  const { timeline } = useContext(communicationContext);


  const callingLength = timeline.filter((i) => i.type === "call").length;
  const textLength = timeline.filter((i) => i.type === "text").length;
  const videoLength = timeline.filter((i) => i.type === "video").length;

  const data = [
    { name: "Call", value: callingLength, fill: "#244D3F" },
    { name: "Text", value: textLength, fill: "#7F37F5" },
    { name: "Video Call", value: videoLength, fill: "#37A163" },
  ];

  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-4xl font-bold my-8">Friendship Analytics</h2>

      <div className="my-10 shadow p-8 w-11/12 rounded-md container mx-auto">
        {timeline.length === 0 ? (
          <h2 className="text-2xl font-bold text-center py-10">
            No interactions logged yet.
          </h2>
        ) : (
          <div className="mx-auto">
            <h2 className="font-semibold text-3xl mb-8 text-left">
              By Interaction Type
            </h2>

            
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="60%"
                  outerRadius="90%"
                  paddingAngle={5}
                  cornerRadius={10}
                  isAnimationActive={true}
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
