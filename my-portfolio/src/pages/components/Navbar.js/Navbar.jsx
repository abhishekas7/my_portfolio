
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({ navItems }) => {
  return (
    <>
      <div
        className={`${styles.navMainDiv} hidden xl:flex bg-color-1 px-[48px]  flex-row text-white justify-items-start justify-between`}
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
        <div className={`${styles.navLogo}`}>
          <Link href={""}>
            <div className="w-[24px] h-[24px]">
                <IoIosArrowDown />
            </div>
          </Link>
        </div>
      </div>


      <div
        className={`${styles.navMainDiv} sm:block xl:hidden bg-color-1 px-[48px] flex flex-row text-white justify-items-start justify-between`}
      >
     dd
      </div>
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
