import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [click, setClicked] = useState(false);
  const { t, i18n } = useTranslation();
  const changLng = useCallback(
    (lng) => {
      setClicked(!click);
      !click ? i18n.changeLanguage("EN") : i18n.changeLanguage("TW");
    },
    [i18n, click]
  );
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-z-500 to-90% shadow-lg shadow-zinc-100/20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Aaron &nbsp;<span className="sm:block hidden"> | &nbsp;Shih</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-red-400" : "text-secondary"
              } hover:text-red-300 text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                changLng();
              }}
            >
              <a href={`#${nav.id}`}>
                {nav.id === "lang"
                  ? click
                    ? t(`nav.EN`)
                    : t(`nav.TW`)
                  : t(`nav.${nav.title}`)}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(
                (nav) =>
                  nav.id !== "lang" && (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-red-400" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px] hover:text-red-300`}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(!toggle);
                      }}
                    >
                      <a href={`#${nav.id}`}>{t(`nav.${nav.title}`)}</a>
                    </li>
                  )
              )}
              {navLinks.map(
                (nav) =>
                  nav.id === "lang" && (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-red-400" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px] hover:text-red-300`}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(!toggle);
                        changLng();
                      }}
                    >
                      {<p>{click ? t(`nav.EN`) : t(`nav.TW`)}</p>}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
