import React from "react";
import Socials from "./Socials";
import { navData } from "../../data";
import { Link } from "react-scroll";
const NavMobile = ({ onLinkClick }) => {
  //Destructring Data
  const { items } = navData;
  return (
    <nav className="w-full flex flex-col justify-start">
      <ul className="flex flex-col justify-center items-center">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="py-4 hover:hover-dark w-11/12 text-center"
            >
              <Link
                onClick={onLinkClick}
                className="text-2xl font-primary uppercase"
                to={item.name}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="text-3xl py-3">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
