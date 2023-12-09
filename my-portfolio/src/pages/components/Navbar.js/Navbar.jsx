import { GiTribalShield } from "react-icons/gi";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";

const Navbar = ({ navItems }) => {
  

  const [showNavabr, setshowNavabr] = useState(false)


const HandleNav=()=>{
  setshowNavabr((showNavabr) => !showNavabr);
}

  return (
    <>
      <div
        className={`${styles.navMainDiv}  hidden xl:flex bg-color-1 px-[48px]  flex-row text-white justify-items-start justify-between`}
      >
        <div className={`${styles.navLogo}`}>
          <h4 className={` font-bold`}>ABHISHEK</h4>
        </div>
        <div className={`${styles.navItems} flex flex-row`}>
          {navItems?.map((items, i) => {
            return (
              <a href={items.link}>
                <div className="w-[150px] font-[400] text-center">
                  {items.name}
                </div>
              </a>
            );
          })}
        </div>
        <div className={`${styles.navLogo} flex`}>
          <div className="w-[24px] h-[24px] mr-5">
            <AiOutlineInstagram size={30} />
          </div>
          <div className="w-[24px] h-[24px] mr-5">
            <AiOutlineLinkedin size={30} />
          </div>
          <div className="w-[24px] h-[24px] mr-5">
            <AiOutlineGithub size={30} />
          </div>
        </div>
      </div>

      <div
        className={`${styles.navMainDiv} sm:block xl:hidden bg-color-1 px-[48px] flex flex-row text-white justify-items-start justify-between`}
      >
        <div className={`${styles.navLogo}`}>
          <h4 className={` font-bold`}>ABHISHEK</h4>
        </div>
        <div onClick={()=>{HandleNav()}}>
          <GiTribalShield size={25}/>
        </div>
      </div>


   {showNavabr && (
    <div
    className={`${styles.navMainDiv} w-100 h-[100vh] sm:block xl:hidden bg-color-1 px-[48px] `}
  >
<div className=" text-white">
{navItems?.map((items, i) => {
            return (
              <a href={items.link}>
                <div className="w-[150px] font-[400] text-center">
                  {items.name}
                </div>
              </a>
            );
          })}
</div>
    </div>
   )}
    </>
  );
};

Navbar.defaultProps = {
  navItems: [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Works",
      link: "/about",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact",
      link: "/resume",
    },
    {
      name: "Services",
      link: "/resume",
    },
  ],
  socialItems: [
    {
      icon: "fa fa-github",
      link: "https://www.google.com",
    },
    {
      icon: "fa fa-twitter",
      link: "https://www.google.com",
    },
  ],
};

export default Navbar;
