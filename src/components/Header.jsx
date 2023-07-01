import React, { useState, useEffect } from "react";
// import header data
import { headerData } from "../data";
import { Link } from "react-scroll";
// import components
import Nav from "./branches/Nav";
import NavMobile from "./branches/NavMobile";
import Socials from "./branches/Socials";
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  const { g_logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const handleMobileClick = () => {
    setNavMobile(false);
  };
  //scrollevent
  useEffect(() => {
    const handle = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
    return () => {
      window.removeEventListener("scroll", handle);
    };
  });
  return (
    <header
      className={`${
        isActive
          ? "h-[100px] lg:h-[110px] bg-black text-white"
          : "h-[140px] lg:h-[170px]  bg-white"
      }  fixed left-0 shadow-lg right-0 z-10 max-w-full w-full mx-auto transition-all duration-500`}
    >
      <div className="flex justify-between items-center h-full px-[50px] ">
        <Link
          activeClass="none"
          to="HOME"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center flex-col p-2"
        >
          <img
            className={
              isActive
                ? "w-[98px] h-[50px] rounded-sm sm:block hidden"
                : "w-[120px] h-[80px] rounded-sm sm:block hidden"
            }
            src={g_logo}
            alt="logo_image"
          />
          <p className="md:text-[16px] text-3xl shadow after:h-10 my-1 button md:px-3 px-0 w-[20px]">
            GentleMen
          </p>
        </Link>
        <div className="hidden xl:flex">
          <Nav />
        </div>
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl text-white" />
        </div>
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0 overflow-hidden"} ${
            isActive ? "top-[100px]" : "top-[120px] lg:top-[150px]"
          } fixed left-0 z-10 w-full h-full bg-white text-black transition-all duration-500`}
        >
          <NavMobile onLinkClick={handleMobileClick} />
        </div>
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
