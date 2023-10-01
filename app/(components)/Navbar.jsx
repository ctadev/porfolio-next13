"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { saveAs } from "file-saver";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const saveFile = () => {
    saveAs(
      "https://www.dropbox.com/scl/fi/53rqsl8pc9n4fsj82a4cq/Resume_IT.pdf?rlkey=w5b72iwgvodateo67gmyrxwta&dl=0"
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={s.nav_container} id="home">
      <main className={s.inner_container}>
        <section className={s.logo}>
          <Link href="/" scroll={false}>
            <h1 className={s.title}>Cong Ta</h1>
          </Link>
        </section>

        <aside className="flex items-center gap-4 pr-4">
          <ul
            className={
              toggleMenu ? `${s.menu_open} ${s.menu_close}` : s.menu_open
            }
          >
            <Link
              href="/"
              scroll={false}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <li className={s.item}>
                <Image
                  src="/homenav.svg"
                  alt="download"
                  height={25}
                  width={25}
                  className="dark:invert md:hidden"
                />
                <p className="mt-1">Home</p>
              </li>
            </Link>
            <Link
              href="/casestudies"
              scroll={false}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <li className={s.item}>
                <Image
                  src="/projectnav.svg"
                  alt="download"
                  height={25}
                  width={25}
                  className="dark:invert md:hidden"
                />
                <p className="mt-1">Case Studies</p>
              </li>
            </Link>
            <Link
              href="/contact"
              scroll={false}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <li className={s.item}>
                <Image
                  src="/contactnav.svg"
                  alt="download"
                  height={25}
                  width={25}
                  className="dark:invert md:hidden"
                />
                <p className="mt-1">Contact</p>
              </li>
            </Link>
            <li
              className={`${s.item} flex items-center gap-2 justify-center cursor-pointer`}
              onClick={saveFile}
            >
              <div className="relative h-[25px] w-[25px] md:h-[15px] md:w-[15px]">
                <Image
                  src="/downblack.svg"
                  alt="download"
                  fill
                  className="dark:invert"
                />
              </div>
              <p className="mt-1">Resume</p>
            </li>
          </ul>

          <section
            className={s.hamburger}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <div className={toggleMenu ? s.close : s.open} />
          </section>

          <section className="flex items-center gap-4 md:gap-8">
            <div className="h-[25px] w-[0.5px] bg-slate-600" />
            <div
              className="cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? (
                <Image src="/sun.svg" height={20} width={20} alt="sun" />
              ) : (
                <Image src="/moon.svg" height={20} width={20} alt="moon" />
              )}
            </div>
          </section>
        </aside>
      </main>
    </nav>
  );
};

export default Navbar;

const s = {
  nav_container:
    "flex fixed top-0 left-0 z-40 w-screen items-center justify-center dark:bg-black-300 bg-white-800 h-[80px] dark:text-white",
  inner_container:
    "w-full relative max-w-[1440px] flex justify-between items-center pr-4",
  title:
    "text-[1.5rem] font-arizonia font-bold pl-4 cursor-pointer hover:text-[cyan]",

  menu_open:
    "absolute z-50 top-[65px] bg-white-900/90 shadow-lg dark:bg-slate-900/90 md:shadow-none md:bg-white-800 right-[-100%] pr-6 flex flex-col gap-2 md:gap-8 px-4 md:px-0 items-start md:items-center justify-center h-[280px] rounded-lg w-[280px] md:dark:bg-black-300 md:flex-row md:static md:h-auto md:w-auto md:pt-0 md:bg-transparent transition-all",
  menu_close: "right-[0%]",
  item: "cursor-pointer text-[1.5rem] whitespace-nowrap md:text-[1rem] relative after:absolute after:inset-x-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:h-[3px] after:bg-gradient-to-r from-[cyan] to-purple-500 after:transition-all md:hover:after:scale-x-100 bg-slate-200 rounded-full dark:bg-slate-800 px-6 md:px-0 py-1 md:py-0 md:bg-transparent dark:md:bg-transparent hover:bg-blue-secondary dark:hover:bg-blue-dark md:hover:bg-transparent dark:md:hover:bg-transparent flex items-center gap-2 font-semibold",
  resume:
    "sm:pb-[4px] font-nothing md:pt-2 md:border-2 md:px-2 cursor-pointer text-[2rem] md:text-[1.5rem] relative after:absolute after:inset-x-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:h-[3px] md:after:h-0 after:bg-gradient-to-r after:transition-all hover:after:scale-x-100 rounded-md md:border-cyan-500 md:hover:bg-gradient-to-r from-cyan-500 to-purple-500",

  hamburger:
    "md:hidden h-[30px] rounded-full w-[30px] flex justify-center items-center cursor-pointer",
  open: "w-3/4 h-[3px] dark:bg-white bg-black relative after:absolute after:right-0 after:w-[13px] after:h-[3px] dark:after:bg-white after:bg-black after:translate-y-[7px] before:absolute before:right-0 before:w-[18px] before:h-[3px] dark:before:bg-white before:bg-black before:translate-y-[-7px] after:transition-all before:transition-all",
  close:
    "w-3/4 h-[2px] bg-transparent relative after:absolute after:w-full after:h-[2px] dark:after:bg-white after:bg-black after:translate-y-[-1px] after:rotate-[-45deg] before:absolute before:w-full before:h-[2px] before:bg-black dark:before:bg-white before:translate-y-[-1px] before:rotate-45 after:transition-all before:transition-all",
};
