import React from "react";
import { MdCloudDone } from "react-icons/md";

const Price = ({ price, headLine }) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #3e3e3e 0%, #1c1c1c 100%)",
      }}
      className="p-5 cursor-pointer rounded-xl shadow-lg border-t-[1px] border-l-[1px] border-gray-500 flex flex-col justify-center items-center gap-5 transition-all duration-300 hover:scale-105 hover:bg-indigo-700 group"
    >
      <h1 className="text-3xl font-bold text-teal-600 ml-5 p-2">{headLine}</h1>
      <p className="text-right text-white max-w-[500px]">
        تحرير الصور بجودة عالية والمعلومات الاخرى بجودة عالية و اضافة بعض
        المؤثرات.
      </p>
      <h1 className="text-7xl font-bold text-white flex justify-center p-5">
        {price}
        <p className="text-4xl text-teal-600">$</p>
      </h1>
      <div className="flex flex-col justify-center items-center mt-10 gap-5">
        <div className="flex items-start gap-2">
          <span className="text-green-500">
            <MdCloudDone />
          </span>
          <p className="text-white text-right text-sm max-w-[400px]">
            تحرير الصور بجودة عالية والمعلومات الاخرى بجودة عالية و اضافة بعض
            المؤثرات.
          </p>
        </div>
        <hr className="w-full" />
        <div className="flex items-start gap-2">
          <span className="text-green-500">
            <MdCloudDone />
          </span>
          <p className="text-white text-right text-sm max-w-[400px]">
            تحرير الصور بجودة عالية والمعلومات الاخرى بجودة عالية و اضافة بعض
            المؤثرات.
          </p>
        </div>
        <hr className="w-full" />
        <div className="flex items-start gap-2">
          <span className="text-green-500">
            <MdCloudDone />
          </span>
          <p className="text-white text-right text-sm max-w-[400px]">
            تحرير الصور بجودة عالية والمعلومات الاخرى بجودة عالية و اضافة بعض
            المؤثرات.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
