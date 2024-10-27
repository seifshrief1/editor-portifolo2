import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const images = [
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
  ];

  const imagesRef = useRef(null);
  const textRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      imagesRef.current,
      { opacity: 1.5 },
      {
        opacity: 0.3,
        duration: 1,
        yPercent: -100,
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true, // التاثير يحدث تدريجيا
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="h-[90%]">
      <div className="relative flex justify-center mt-28 overflow-hidden h-full">
        {/* Columns for scrolling */}
        <div
          className="flex justify-center flex-wrap gap-10 opacity-100"
          ref={imagesRef}
        >
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt=""
              className="lg:w-1/3 object-cover rounded shadow-lg"
            />
          ))}
        </div>
      </div>

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        ref={textRef}
      >
        <h1
          className="lg:text-5xl md:text-4xl text-2xl font-bold mb-5 text-[#F2F4F6]"
          style={{ lineHeight: "1.2" }}
        >
          تحرير <span className="text-gray-400">الصور و الفيديوهات</span>
          <br /> اصبح امرا بسيطا
        </h1>
        <p className="text-gray-200 mb-4 text-sm">
          نقوم بتحرير الصور و الفيديوهات بدقة كبيرة للمستخدم , انطلق الان!
        </p>
        <Link to="/projects">
          <button class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
            <span class="lg:text-lg text-sm">القي نظرة علي اعمالي</span>
            <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div class="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
