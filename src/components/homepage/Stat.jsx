import React from "react";

const Stat = () => {
  return (
    <>
      <div className="flex gap-16 justify-center items-center text-center max-w-11/12 mx-auto my-6">
        <div className="bg-white py-6 shadow px-10 rounded-2xl w-65 ">
          <h2 className="text-2xl font-bold">10</h2>
          <p className="text-[18px] ">Total Friends</p>
        </div>
        <div className="bg-white py-6 shadow px-10 rounded-2xl w-65">
          <h2 className="text-2xl font-bold text-green-900">3</h2>
          <p className="text-[18px] ">On Track</p>
        </div>
        <div className="bg-white py-6 shadow px-10 rounded-2xl w-65">
          <h2 className="text-2xl font-bold  text-green-900">6</h2>
          <p className="text-[18px] ">Need Attention</p>
        </div>
        <div className="bg-white py-6 shadow  rounded-2xl w-65">
          <h2 className="text-2xl font-bold  text-green-900">12</h2>
          <p className="text-[18px] ">Interactions This Month</p>
        </div>
      </div>
      <hr className="w-10/12 text-[#E9E9E9] my-8 mx-auto" />
    </>
  );
};

export default Stat;
