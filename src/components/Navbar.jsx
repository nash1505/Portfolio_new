import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import NavbarConfig from "../config/NavBar.config.json";
import { AiFillFire } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-dark-theme-color text-gray-300">
      <div className="w-[100px]">
        <AiFillFire size={30} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {NavbarConfig.links.map((each) => (
          <li key={each.value} className="pl-[10px] cursor-pointer">
            <Link to={each.value} smooth={true} duration={500}>
              {each.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {NavbarConfig.links.map((each) => (
          <li className="py-6 text-4xl" key={each.value}>
            <Link
              onClick={handleClick}
              to={each.value}
              smooth={true}
              duration={500}
            >
              {each.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 pr-[5px]"
              href="https://www.linkedin.com/in/nachiket-gujalwar-81173615b/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 pr-[5px]"
              href="https://github.com/nash1505"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300 pr-[5px]"
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=gujalwar6@gmail.com&tf=1"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 pr-[5px]"
              href={"src/assets/Resume/Nachiket_Gujalwar_Resume.pdf"}
              download={"Nachiket_Resume.pdf"}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
