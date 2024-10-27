import React, { useEffect, useRef } from "react";
import video1 from "../../assets/Orange tutorial in Adobe Illustrator - 1 minute tutorial for beginner.mp4";
import video2 from "../../assets/1min lightroom tutorial _ Photo Editing.mp4";
import video3 from "../../assets/videoplayback (2).mp4";
import video4 from "../../assets/videoplayback.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const WorkingVideos = () => {
  const videosRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      videosRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "easePower1.inOut",
        scrollTrigger: {
          trigger: videosRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="mt-36" ref={videosRef}>
      <h1 className="text-4xl text-center text-white font-bold">
        بعض الفيديوهات لاعمالي
      </h1>
      <div className="flex justify-around flex-wrap items-center gap-10 mt-10">
        <video src={video1} className="w-[600px]" autoPlay loop muted />
        <video src={video2} className="w-[600px]" autoPlay loop muted />
        <video src={video3} className="w-[600px]" autoPlay loop muted />
        <video src={video4} className="w-[600px]" autoPlay loop muted />
      </div>
    </div>
  );
};

export default WorkingVideos;
