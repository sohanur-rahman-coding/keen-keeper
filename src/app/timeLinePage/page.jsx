"use client";
import { useContext } from "react";
import { communicationContext } from "@/components/contexts/communications.context";
import { IoCallSharp } from "react-icons/io5";
import { IoIosText } from "react-icons/io";
import { MdVideoChat } from "react-icons/md";

const TimeLinePage = () => {
  const { calling, text, videoCalling } = useContext(communicationContext);

  const today = new Date().toLocaleDateString("en-GB");

  if (calling.length === 0 && text.length === 0 && videoCalling.length === 0) {
    return (
      <div className="w-11/12 mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Timeline</h2>
        <h2 className="text-3xl font-bold text-center mt-10 py-30">
          No Communications found!
        </h2>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto my-10 w-11/12">
        <h2 className="text-2xl font-semibold mb-6">Timeline</h2>

        {calling.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-slate-100 rounded-xl shadow mb-4"
          >
            <IoCallSharp className="text-3xl text-green-600" />
            <div>
              <p className="font-semibold">
                Call with <span className="text-lg">{item.name}</span>
              </p>
              <p className="text-sm text-gray-500">{today}</p>
            </div>
          </div>
        ))}

        {text.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-slate-100 rounded-xl shadow mb-4"
          >
            <IoIosText className="text-3xl text-blue-600" />
            <div>
              <p className="font-semibold">
                Text with <span className="text-lg">{item.name}</span>
              </p>
              <p className="text-sm text-gray-500">{today}</p>
            </div>
          </div>
        ))}

        {videoCalling.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-slate-100 rounded-xl shadow mb-4"
          >
            <MdVideoChat className="text-3xl text-red-600" />
            <div>
              <p className="font-semibold">
                Video call with <span className="text-lg">{item.name}</span>
              </p>
              <p className="text-sm text-gray-500">{today}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default TimeLinePage;
