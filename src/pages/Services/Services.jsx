import React, { useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";
import { PiCoins, PiTimerDuotone } from "react-icons/pi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import ProcessWeFollow from "../../components/ProcessWeFollow/ProcessWeFollow";
import Footer from "../../components/Footer/Footer";
import gsap from "gsap";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "تعديل الصور و الفيديوهات",
      icon: <FaPhotoVideo />,
      color: "text-green-500",
    },
    {
      id: 2,
      title: "جودة عالية",
      icon: <MdOutlineHighQuality />,
      color: "text-blue-500",
    },
    {
      id: 3,
      title: "اسعار رمزية",
      icon: <PiCoins />,
      color: "text-yellow-400",
    },
    {
      id: 4,
      title: "ضمان علي كل مشروع",
      icon: <AiFillSafetyCertificate />,
      color: "text-gray-500",
    },
    {
      id: 5,
      title: "تصميم اعلانات و لوجوهات",
      icon: <FaPhotoVideo />,
      color: "text-red-500",
    },
    {
      id: 6,
      title: "استلام في فترة زمنية قصيرة",
      icon: <PiTimerDuotone />,
      color: "text-blue-500",
    },
  ];

  const servicesRef = useRef(null);
  const processWeFollowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      servicesRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
      }
    );

    gsap.fromTo(
      processWeFollowRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-20">
        <h1 className="text-3xl font-bold text-white p-5 text-center">
          خدماتي
        </h1>
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5"
          ref={servicesRef}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="flex justify-center items-center flex-col p-5 rounded-xl hover:scale-105 transition-all duration-300 w-[350px] mx-auto"
              style={{
                background: "linear-gradient(135deg, #2f2f2f 0%, #1d1d1d 100%)",
              }}
            >
              <span className={`text-4xl ${service.color}`}>
                {service.icon}
              </span>
              <p className="text-white text-xl text-center">{service.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-20" ref={processWeFollowRef}>
          <h1 className="text-3xl font-bold text-white p-5 text-center">
            كيف نعمل في المشروع؟
          </h1>
          <div className="flex flex-col lg:flex-row justify-around items-center w-full p-10 flex-wrap gap-5">
            <ProcessWeFollow
              step="01"
              title="مرحلة التخطيط والإعداد"
              description="مناقشة تفاصيل المشروع مع العميل (أو فريق العمل) لفهم الرؤية والأهداف."
            />
            <ProcessWeFollow
              step="02"
              title="مرحلة التحرير الأولي"
              description="القيام بقص الأجزاء غير الضرورية ودمج المقاطع الرئيسية لتكوين مسودة أولية."
            />
            <ProcessWeFollow
              step="03"
              title="مرحلة التحرير المتقدم"
              description="تعديل الملاحظات والبدء في تحسين جودة الفيديو والصور. ضبط الألوان وتصحيحها لتحقيق توازن بصري مريح."
            />
            <ProcessWeFollow
              step="04"
              title="التصدير والتسليم"
              description="تصدير الفيديو أو الصور بالجودة والحجم المطلوبين."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
