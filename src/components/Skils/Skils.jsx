import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Skils = () => {
  const skills = [
    {
      name: "Adobe Photoshop",
      image: "http://pngimg.com/uploads/photoshop/photoshop_PNG14.png",
    },
    {
      name: "Adobe Premiere Pro",
      image:
        "https://cdn.freelogovectors.net/wp-content/uploads/2020/07/adobe-premier-logo.png",
    },
    {
      name: "Adobe illustrator",
      image:
        "https://logodownload.org/wp-content/uploads/2017/04/Adobe-Illustrator-ai-logo.png",
    },
    {
      name: "GIMP",
      image:
        "https://4.bp.blogspot.com/-WAGA4wUnvFA/XFBrLhJDCNI/AAAAAAAAHoM/mrhHHVWEcCAabaCxBEceB7i1vvV2EZVZwCK4BGAYYCw/s1600/LOGO%2BGIMP.png",
    },
    {
      name: "Final Cut Pro",
      image: "https://vectorified.com/images/final-cut-pro-icon-png-21.png",
    },
    {
      name: "Adobe Lightroom",
      image:
        "https://laurashoe.com/wp-content/uploads/2019/01/Lightroom-new-logo.png",
    },
    {
      name: "Davinci Resolve",
      image: "https://screen-recording.ru/img/_src/davinci-resolve-logo.png",
    },
    {
      name: "Adobe After Effects",
      image:
        "https://logodownload.org/wp-content/uploads/2017/04/adobe-after-effects-logo-0.png",
    },
  ];

  const MainDivRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      MainDivRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "easePower1.inOut",
        scrollTrigger: {
          trigger: MainDivRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={MainDivRef}>
      <h1 className="text-4xl font-bold text-white text-center mt-36">
        مهاراتي
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 px-4">
        <img
          className="w-full max-w-md lg:max-w-lg mb-8 lg:mb-0"
          src="https://img.freepik.com/free-photo/back-view-creative-filmmaker-working-movie-laptop-girlfriend-background_482257-31235.jpg?t=st=1728766100~exp=1728769700~hmac=7b64d6a5986bb47af9ab71ba4645635d0226b05c743d1158d978c3ab22f00510&w=1380"
          alt="Creative filmmaker working"
        />
        <div className="grid grid-cols-3 gap-6 lg:gap-14">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
              />
              <p className="text-white font-bold mt-2 text-center text-sm sm:text-base">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skils;
