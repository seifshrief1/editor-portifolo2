import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { Link } from "react-router-dom";

const WhoIAm = () => {
  const Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      Ref.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "easePower1.inOut",
        scrollTrigger: {
          trigger: Ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-5 mt-32 p-5 shadow-lg"
      ref={Ref}
      style={{
        background: "linear-gradient(150deg, #2a2a2a 0%, #2c2c2c 100%)",
      }}
    >
      <div className="flex flex-col gap-5 text-right">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-right">
          من اكون؟
        </h1>
        <p className="max-w-full md:max-w-[400px] text-gray-400 mx-auto md:mx-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, in
          aspernatur ab dolore omnis non fugit? Dolor eos omnis cumque, commodi
          numquam nesciunt ea. Accusantium ut sapiente dignissimos nulla quas.
        </p>
        <div className="flex flex-col gap-5 items-center md:items-start">
          <Link to="/about">
            <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-12 md:h-16 w-48 md:w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
              <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
              <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
              <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
              <p className="z-10">اعرف المزيد</p>
            </button>
          </Link>
          <SocialMediaLinks />
        </div>
      </div>
      <div className="lg:flex flex-col md:flex-row md:flex hidden gap-5 items-center">
        <img
          src="https://i.pinimg.com/736x/a2/e5/aa/a2e5aa9dd7619a36dc158cdad99083fb.jpg"
          className="w-60 md:w-[250px] lg:w-[300px] rounded-2xl mt-5 md:mt-20"
        />
        <img
          src="https://i.pinimg.com/564x/b7/18/68/b71868f683a8683158d30c6680ebac08.jpg"
          className="w-60 md:w-[250px] lg:w-[300px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default WhoIAm;
