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
              <li className={s.item}>Home</li>
            </Link>
            <Link
              href="/casestudies"
              scroll={false}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <li className={s.item}>Case Studies</li>
            </Link>
            <Link
              href="/contact"
              scroll={false}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <li className={s.item}>Contact</li>
            </Link>
            <li
              className={`${s.item} flex items-center gap-2 justify-center cursor-pointer`}
              onClick={saveFile}
            >
              <Image
                src="/downblack.svg"
                alt="download"
                height={13.3}
                width={13.3}
                className="dark:invert"
              />
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
    "absolute z-50 top-[65px] bg-white-900/90 shadow-lg dark:bg-black-200/90 md:shadow-none md:bg-white-800 right-[-100%] pr-6 flex flex-col gap-2 md:gap-8 items-center justify-center h-[350px] rounded-lg w-[290px] md:dark:bg-black-300 md:flex-row md:static md:h-auto md:w-auto md:pt-0 md:bg-transparent transition-all",
  menu_close: "right-[0%]",
  item: "cursor-pointer text-[2rem] whitespace-nowrap font-nothing sm:text-[1rem] relative font-lora after:absolute after:inset-x-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:h-[3px] after:bg-gradient-to-r from-[cyan] to-purple-500 after:transition-all hover:after:scale-x-100",
  resume:
    "sm:pb-[4px] font-nothing md:pt-2 md:border-2 md:px-2 cursor-pointer text-[2rem] sm:text-[1.5rem] relative after:absolute after:inset-x-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:h-[3px] md:after:h-0 after:bg-gradient-to-r after:transition-all hover:after:scale-x-100 rounded-md md:border-cyan-500 md:hover:bg-gradient-to-r from-cyan-500 to-purple-500",

  hamburger:
    "md:hidden h-[30px] w-[35px] border-[1px] border-black dark:border-white flex justify-center items-center cursor-pointer rounded-md",
  open: "w-3/4 h-[2px] dark:bg-white bg-black relative after:absolute after:w-full after:h-[2px] dark:after:bg-white after:bg-black after:translate-y-[7px] before:absolute before:w-full before:h-[2px] dark:before:bg-white before:bg-black before:translate-y-[-7px] after:transition-all before:transition-all",
  close:
    "w-3/4 h-[2px] bg-transparent relative after:absolute after:w-full after:h-[2px] dark:after:bg-white after:bg-black after:translate-y-[-1px] after:rotate-[-45deg] before:absolute before:w-full before:h-[2px] before:bg-black dark:before:bg-white before:translate-y-[-1px] before:rotate-45 after:transition-all before:transition-all",
};
