import React from "react";

const Stat = () => {
  return (
    <>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto my-10 px-4">
  
  <div className="bg-white py-6 shadow-md px-6 rounded-2xl text-center">
    <h2 className="text-3xl font-bold">16</h2>
    <p className="text-gray-600 text-lg mt-1">Total Friends</p>
  </div>

  <div className="bg-white py-6 shadow-md px-6 rounded-2xl text-center">
    <h2 className="text-3xl font-bold text-green-600">7</h2>
    <p className="text-gray-600 text-lg mt-1">On Track</p>
  </div>

  <div className="bg-white py-6 shadow-md px-6 rounded-2xl text-center">
    <h2 className="text-3xl font-bold text-red-500">9</h2>
    <p className="text-gray-600 text-lg mt-1">Need Attention</p>
  </div>

  <div className="bg-white py-6 shadow-md px-6 rounded-2xl text-center">
    <h2 className="text-3xl font-bold text-blue-500">12</h2>
    <p className="text-gray-600 text-lg mt-1">Interactions This Month</p>
  </div>

</div>
      <hr className="w-10/12 text-[#E9E9E9] my-8 mx-auto" />
    </>
  );
};

export default Stat;
