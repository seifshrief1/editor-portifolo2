import React from "react";

const WorkExperinecs = ({ date, name, description, jop, logo }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-center w-full p-10">
        <p className="text-gray-400 text-center lg:text-right">{date}</p>
        <div className="flex items-center gap-10">
          <img
            src={logo}
            className="w-[150px] sm:w-[200px]"
            alt={`${name} logo`}
          />
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-2xl text-lg font-bold text-white text-center lg:text-right">
              {name}
            </h1>
            <p className="text-gray-400 max-w-[500px] text-sm text-center lg:text-right">
              {description}
            </p>
          </div>
        </div>
        <p className="text-gray-400 font-bold text-center lg:text-right mt-5">
          {jop}
        </p>
      </div>
      <hr className="border-gray-500 w-full" />
    </>
  );
};

export default WorkExperinecs;
