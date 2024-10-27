import React from "react";
import Header from "../../components/header/Header";
import Icons from "./Icons";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="mt-28 h-screen flex flex-col items-center justify-start py-10">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          تواصل معي
        </h1>

        {/* Contact Form */}
        <form className="bg-gray-800 p-6 rounded-md shadow-lg w-11/12 max-w-lg">
          <label className="block mb-4">
            <span className="text-white">الاسم الكامل</span>
            <input
              type="text"
              placeholder="أدخل اسمك"
              className="mt-1 block w-full p-2 rounded-md bg-gray-700 text-white"
            />
          </label>
          <label className="block mb-4">
            <span className="text-white">البريد الإلكتروني</span>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="mt-1 block w-full p-2 rounded-md bg-gray-700 text-white"
            />
          </label>
          <label className="block mb-4">
            <span className="text-white">رسالتك</span>
            <textarea
              placeholder="أدخل رسالتك هنا"
              className="mt-1 block w-full p-2 rounded-md bg-gray-700 text-white h-32"
            ></textarea>
          </label>

          <button class="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer w-full justify-center font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
            ارسال الرسالة
            <svg
              class="w-5 h-5"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
        </form>
        {/* Social Icons */}
        <div className="mt-8">
          <Icons />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
