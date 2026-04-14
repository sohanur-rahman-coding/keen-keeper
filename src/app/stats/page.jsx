"use client";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { communicationContext } from "@/components/contexts/communications.context";

const Stats = () => {
  const { calling, text, videoCalling } = useContext(communicationContext);
  const callingLength = calling.length;
  const textLength = text.length;
  const videoLength = videoCalling.length;
  console.log(callingLength, textLength, videoLength);

  const data = [
    { name: "call", value: callingLength, fill: "#0088FE" },
    { name: "text", value: textLength, fill: "#00C49F" },
    { name: "video call", value: videoLength, fill: "#FFBB28" },
  ];
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-4xl font-bold my-8">Friendship Analytics</h2>

      <div className=" my-10 shadow p-8 w-11/12  rounded-md  container mx-auto">
        <h2 className="font-semibold text-3xl mb-16">By Interaction Type</h2>
        {callingLength == 0 && textLength == 0 && videoLength == 0 ? (
          <h2 className="text-2xl font-bold text-center pb-10">No interactions logged yet.</h2>
        ) : (
          <div className=" my-6 shadow p-4 rounded-md container mx-auto">
            <h2 className="font-semibold text-3xl mb-8 text-center">
              By Interaction Type
            </h2>
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                margin: "auto",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
