import React, { useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import WorkExperinecs from "../../components/WorkExperineces/WorkExperinecs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const About = () => {
  const firstSection = useRef(null);
  const secondSection = useRef(null);
  const thirdSection = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      firstSection.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "easePower1.inOut",
      }
    );
    gsap.fromTo(
      secondSection.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "easePower1.inOut",
      }
    );
    gsap.fromTo(
      thirdSection.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "easePower1.inOut",
        scrollTrigger: {
          trigger: thirdSection.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div>
      <Header />
      {/* first section */}
      <div
        className="flex lg:flex-row flex-col justify-around items-center gap-10 p-10 mt-20"
        ref={firstSection}
      >
        <div>
          <h1 className="text-4xl font-bold text-white">
            مرحبا , انا اسم المحرر
          </h1>
          <p
            className="text-gray-200 mt-5 text-sm max-w-[500px]"
            style={{ lineHeight: 2 }}
          >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
            هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو
            العربي، مثل الصحة، الأحيان والأخبار. هذا النص هو مثال لنص يمكن أن
            يستبدل في نفس
          </p>
          <p
            className="text-gray-200 mt-5 text-sm max-w-[500px]"
            style={{ lineHeight: 2 }}
          >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
            هذا النص من مولد النص العربي
          </p>
          <Link to="/contact">
            <button className="mt-2 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
              تواصل معي
            </button>
          </Link>
        </div>
        <img
          src="https://media.wired.com/photos/60dcea818a1e88a03ed5ce04/master/pass/Gear-Beef-Up-Video-Editing-PC-1124258613.jpg"
          className="lg:w-[400px] w-[300px] rounded-xl"
        />
      </div>
      {/* second section */}
      <div
        className="flex lg:flex-row flex-col justify-around items-center p-10 bg-black/10 mt-10"
        ref={secondSection}
      >
        <div className="flex flex-col gap-2 items-center mb-5">
          <div className="flex flex-col border border-gray-500 p-5 text-white rounded-2xl items-center text-5xl w-[300px]">
            +143 <p className="text-sm">مشروع</p>
          </div>
          <div className="flex flex-col border border-gray-500 p-5 text-white rounded-2xl items-center text-5xl w-[300px]">
            +120 <p className="text-sm">عميل</p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">محرر متميز</h1>
          <p
            className="text-gray-200 mt-5 text-sm max-w-[500px]"
            style={{ lineHeight: 2 }}
          >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
            هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو
            العربي، مثل الصحة، الأحيان والأخبار. هذا النص هو مثال لنص يمكن أن
            يستبدل في نفس
          </p>
          <div class="flex items-start justify-start mt-2">
            <div class="relative group">
              <Link to="/projects">
                <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div class="relative z-10 flex items-center space-x-2">
                      <span class="transition-all duration-500 group-hover:translate-x-1">
                        شاهد اعمال اكثر
                      </span>
                      <svg
                        class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-white text-center">
          تجارب العمل
        </h1>
        <div
          className="flex flex-col justify-center items-center mt-10"
          ref={thirdSection}
        >
          <WorkExperinecs
            date="2009-2013"
            name="شركة بيكسيليد"
            description="هي شركة متخصصة في تقديم خدمات تحرير الصور عبر الإنترنت. تأسست في عام 2008 وتقدم أدوات تحرير صور بسيطة وسهلة الاستخدام"
            jop="معدل صور"
            logo="https://vectorseek.com/wp-content/uploads/2023/08/Pixlr-Logo-Vector.svg-.png"
          />
          <WorkExperinecs
            date="2013-2018"
            name="شركة دافينشي ريزولف"
            description="هو برنامج شامل لتحرير الفيديوهات وتصحيح الألوان ويُعتبر الأفضل في مجاله بالنسبة لتحرير الألوان. يستخدمه المحترفون"
            jop="منتج فيديوهات"
            logo="https://www.sawvideo.com/sites/default/files/workshops/graphics/DaVinci-Resolve-15-Logo-Larger.png"
          />
          <WorkExperinecs
            date="2018-2024"
            name="شركة ادوبي"
            description="تُعتبر أدوبي إحدى أكبر الشركات العالمية المتخصصة في تطوير البرمجيات الإبداعية، وتركز بشكل كبير على برامج التصميم، تحرير الصور والفيديوهات، وصناعة المحتوى. "
            jop="معدل صور و منتج فيديوهات"
            logo="https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
