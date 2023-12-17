import React from "react";
import { navData } from "../../data";
import { Link } from "react-scroll";
const Nav = () => {
  const { items } = navData;
  return (
    <nav>
      <ul className="flex justify-center items-center gap-x-[10px]">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="text-xl hover:hover-dark py-3 px-2 rounded-md  font-secondery cursor-pointer"
            >
              <Link
                activeClass="active" to={item.name}
                spy={true} smooth={true}
                offset={-100}  duration={800}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
