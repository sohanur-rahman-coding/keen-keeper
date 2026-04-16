"use client";
import { useContext, useState } from "react";
import { communicationContext } from "@/components/contexts/communications.context";
import { IoCallSharp } from "react-icons/io5";
import { IoIosText } from "react-icons/io";
import { MdVideoChat } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const TimeLinePage = () => {
  const { timeline } = useContext(communicationContext);
  const [filteredType, setFilteredType] = useState("");

  // ✅ FIXED: auto close added here
  const handleSelect = (type, e) => {
    setFilteredType(type);

    // close dropdown
    e.currentTarget.closest("details").open = false;
  };

  let filteredData = timeline;

  if (filteredType === "Call") {
    filteredData = timeline.filter((item) => item.type === "call");
  } else if (filteredType === "Text") {
    filteredData = timeline.filter((item) => item.type === "text");
  } else if (filteredType === "Video") {
    filteredData = timeline.filter((item) => item.type === "video");
  }

  if (filteredData.length === 0) {
    return (
      <div className="w-11/12 mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Timeline</h2>
        <h2 className="text-3xl font-bold text-center mt-10 py-20">
          No Communications found!
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 w-11/12">
      <h2 className="text-2xl font-semibold mb-6">Timeline</h2>

      <details className="dropdown w-52 mb-8 font-semibold">
        <summary className="input input-bordered w-full cursor-pointer flex justify-between items-center">
          <span>{filteredType ? filteredType : "Filter Timeline"}</span>
          <span>
            {" "}
            <RiArrowDropDownLine />
          </span>
        </summary>

        <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow">
          <li className="menu-title">Filter timeline</li>

          <li
            className={filteredType === "Call" ? "bg-base-200 rounded" : ""}
            onClick={(e) => handleSelect("Call", e)}
          >
            <button className="w-full text-left">Call</button>
          </li>

          <li
            className={filteredType === "Text" ? "bg-base-200 rounded" : ""}
            onClick={(e) => handleSelect("Text", e)}
          >
            <button className="w-full text-left">Text</button>
          </li>

          <li
            className={filteredType === "Video" ? "bg-base-200 rounded" : ""}
            onClick={(e) => handleSelect("Video", e)}
          >
            <button className="w-full text-left">Video</button>
          </li>
        </ul>
      </details>

      {filteredData.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-4 bg-slate-100 rounded-xl shadow mb-4"
        >
          {item.type === "call" && (
            <IoCallSharp className="text-3xl text-green-600" />
          )}
          {item.type === "text" && (
            <IoIosText className="text-3xl text-blue-600" />
          )}
          {item.type === "video" && (
            <MdVideoChat className="text-3xl text-red-600" />
          )}

          <div>
            <p className="font-semibold">
              {item.type === "call" && "Call with "}
              {item.type === "text" && "Text with "}
              {item.type === "video" && "Video call with "}
              <span className="text-lg">{item.name}</span>
            </p>

            <p className="text-sm text-gray-500">
              {new Date(item.time).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLinePage;
