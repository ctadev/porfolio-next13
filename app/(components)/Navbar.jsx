"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={s.nav_container} id="home">
      <main className={s.inner_container}>
        <section className={s.logo}>
          <Link href="#home" scroll={false}>
            <h1 className={s.title}>Cong Ta</h1>
          </Link>
        </section>

        <ul
          className={
            toggleMenu ? `${s.menu_open} ${s.menu_close}` : s.menu_open
          }
        >
          <Link
            href="#about"
            scroll={false}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <li className={s.item}>About</li>
          </Link>
          <Link
            href="#projects"
            scroll={false}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <li className={s.item}>Projects</li>
          </Link>
          <Link
            href="#contact"
            scroll={false}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <li className={s.item}>Contacts</li>
          </Link>
          <Link
            href="https://docs.google.com/document/d/1yQXkfRsHRm6XBuoPG0Ota3d23bFp3VxFpMe5XvHBEP8/"
            target="_blank"
          >
            <li className={`${s.resume} buttonStyle`}>Resume</li>
          </Link>
        </ul>

        <section
          className={s.hamburger}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <div className={toggleMenu ? s.close : s.open} />
        </section>
      </main>
    </nav>
  );
};

export default Navbar;

const s = {
  nav_container:
    "flex fixed top-0 left-0 z-40 w-screen items-center justify-center bg-[#202A3C] h-[100px] text-white",
  inner_container:
    "w-full relative max-w-[1200px] flex justify-between items-center",
  title:
    "text-[3rem] font-arizonia font-bold pl-4 cursor-pointer hover:text-[cyan]",

  menu_open:
    "absolute z-50 top-[86px] right-[-100%] pr-6 flex flex-col gap-4 md:gap-12 pt-24 items-center justify-start h-[400px] rounded-lg w-1/2 bg-slate-500/80 md:flex-row md:static md:h-auto md:w-auto md:pt-0 md:bg-transparent transition-all",
  menu_close: "right-[0%]",
  item: "cursor-pointer text-[2rem] font-nothing sm:text-[1.5rem] relative font-lora after:absolute after:inset-x-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:h-[3px] after:bg-gradient-to-r from-[cyan] to-purple-500 after:transition-all hover:after:scale-x-100",
  resume:
    "sm:pb-[4px] font-nothing md:pt-2 md:border-2 md:px-2 cursor-pointer text-[2rem] sm:text-[1.5rem] relative after:absolute after:inset-x-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:h-[3px] md:after:h-0 after:bg-gradient-to-r after:transition-all hover:after:scale-x-100 rounded-md md:border-cyan-500 md:hover:bg-gradient-to-r from-cyan-500 to-purple-500",

  hamburger:
    "mr-10 md:hidden h-[30px] w-[35px] border-[1px] border-white flex justify-center items-center cursor-pointer",
  open: "w-3/4 h-[2px] bg-white relative after:absolute after:w-full after:h-[2px] after:bg-white after:translate-y-[7px] before:absolute before:w-full before:h-[2px] before:bg-white before:translate-y-[-7px] after:transition-all before:transition-all",
  close:
    "w-3/4 h-[2px] bg-transparent relative after:absolute after:w-full after:h-[2px] after:bg-white after:translate-y-[-1px] after:rotate-[-45deg] before:absolute before:w-full before:h-[2px] before:bg-white before:translate-y-[-1px] before:rotate-45 after:transition-all before:transition-all",
};
