import React from "react";

const ProcessWeFollow = ({ step, title, description }) => {
  return (
    <div className="relative flex flex-col items-center">
      <p className="bg-gray-600 rounded-full w-16 h-16 flex justify-center items-center absolute -mr-32 text-2xl text-white z-10">
        {step}
      </p>
      <div className="border border-gray-500 rounded-full p-5 w-[250px] h-[250px] flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold text-white text-center">{title}</h1>
        <p className="text-gray-400 text-sm max-w-[300px] text-center mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessWeFollow;
