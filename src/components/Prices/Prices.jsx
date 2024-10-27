import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { FaVideo, FaImage, FaFilm } from "react-icons/fa"; // Importing relevant icons
import { MdCloudDone } from "react-icons/md";
import Price from "./Price";

const Prices = () => {
  const pricesRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      pricesRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "easePower1.inOut",
        scrollTrigger: {
          trigger: pricesRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen p-5">
      <div
        className="mt-36 p-5 shadow-lg w-full"
        ref={pricesRef}
        style={{
          background: "linear-gradient(150deg, #2a2a2a 0%, #2c2c2c 100%)",
        }}
      >
        <h1 className="text-white text-4xl text-center font-bold">
          الاشتراك و الاسعار
        </h1>
        <div className="flex lg:flex-row flex-col justify-around items-center mt-20 gap-10">
          <Price price="0" headLine="مجاني" />
          <Price price="29.99" headLine="مميز" />
          <Price price="49.99" headLine="عالي" />
        </div>
      </div>
    </div>
  );
};

export default Prices;
