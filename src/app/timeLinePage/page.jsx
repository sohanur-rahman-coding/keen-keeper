"use client";
import { communicationContext } from "@/components/contexts/communications.context";
import Image from "next/image";
import { useContext } from "react";
import { IoIosText } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdMissedVideoCall, MdVideoChat } from "react-icons/md";

const TimeLinePage = () => {
  const { calling, text , videoCalling} = useContext(communicationContext);
  console.log(calling,text, 'text', "calling");
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="container mx-auto my-10 w-11/12 ">
      <h2 className="text-2xl font-semibold my-4">Timeline </h2>

      {calling.length && text.length || videoCalling.length === 0 ? (
        <h2 className="font-bold text-4xl text-center my-5">
          No Communications found!
        </h2>
      ) : (
        calling.map((calling, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div className="flex gap-4 items-center">
                <IoCallSharp className="text-4xl" />
                <div>
                  <h2 className="font-semibold">
                    Call with{" "}
                    <span className="text-2xl font-semibold">
                      {calling.name}
                    </span>
                  </h2>
                  <p>{today}</p>
                </div>
              </div>
            </div>
          );
        })
      )
      }
      { (
        text.map((text, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div className="flex gap-4 items-center">
                <IoIosText className="text-4xl" />
                <div>
                  <h2 className="font-semibold">
                    Text with{" "}
                    <span className="text-2xl font-semibold">
                      {text.name}
                    </span>
                  </h2>
                  <p>{today}</p>
                </div>
              </div>
            </div>
          );
        })
      )
      }
      { (
        videoCalling.map((videoCall, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div className="flex gap-4 items-center">
                <MdVideoChat className="text-4xl" />
                <div>
                  <h2 className="font-semibold">
                    Video call with{" "}
                    <span className="text-2xl font-semibold">
                      {videoCall.name}
                    </span>
                  </h2>
                  <p>{today}</p>
                </div>
              </div>
            </div>
          );
        })
      )
      }
    </div>
  );
};

export default TimeLinePage;
