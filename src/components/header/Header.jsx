import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi"; // Import a menu icon

const About = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "easePower1.inOut",
      }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      ref={headerRef}
      className="flex lg:justify-around justify-between items-center fixed top-0 right-0 left-0 p-5 z-10"
      style={{
        background: "linear-gradient(135deg, #2e2e2e 0%, #1c1c1c 100%)",
      }}
    >
      <h1 className="text-white text-xl font-bold">اسم المحرر</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-5 items-center text-white">
        <li className="hover:text-[#FFCC00] transition duration-300">
          <Link to="/">الرئيسية</Link>
        </li>
        <li className="hover:text-[#FFCC00] transition duration-300">
          <Link to={"/about"}>من انا</Link>
        </li>
        <li className="hover:text-[#FFCC00] transition duration-300">
          <Link to={"/projects"}>اعمالي</Link>
        </li>
        <li className="hover:text-[#FFCC00] transition duration-300">
          <Link to={"/services"}>خدماتي</Link>
        </li>
        <li className="hover:text-[#FFCC00] transition duration-300">
          <Link to={"/contact"}>تواصل معي</Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <HiMenu
          onClick={toggleMenu}
          className="text-white text-3xl cursor-pointer"
        />
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3 bg-gray-800 bg-opacity-95 flex flex-col p-5 z-20 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-right text-2xl font-bold mb-5"
          >
            &times;
          </button>
          <ul className="flex flex-col gap-5 items-start text-white">
            <li className="hover:text-[#FFCC00] transition duration-300">
              <Link to="/" onClick={toggleMenu}>
                الرئيسية
              </Link>
            </li>
            <li className="hover:text-[#FFCC00] transition duration-300">
              <Link to="/about" onClick={toggleMenu}>
                من انا
              </Link>
            </li>
            <li className="hover:text-[#FFCC00] transition duration-300">
              <Link to="/projects" onClick={toggleMenu}>
                اعمالي
              </Link>
            </li>
            <li className="hover:text-[#FFCC00] transition duration-300">
              <Link to="/services" onClick={toggleMenu}>
                خدماتي
              </Link>
            </li>
            <li className="hover:text-[#FFCC00] transition duration-300">
              <Link to="/contact" onClick={toggleMenu}>
                تواصل معي
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;
