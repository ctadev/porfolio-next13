"use client";

import { useState, useRef } from "react";
import { Svg } from "../(components)";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Form = () => {
  const form = useRef();
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  function clearInputs() {
    setFormInputs({
      name: "",
      email: "",
      message: "",
    });
    setError(false);
    toast.success("Message Sent, I will get back to you within 24hours", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formInputs.name == 0 ||
      formInputs.email == 0 ||
      !formInputs.email
        .toLocaleLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) ||
      formInputs.message == 0
    ) {
      setError(true);
    } else {
      setIsLoading(true);
      await emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
          process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
        )
        .then(
          () => {
            clearInputs();
            setIsLoading(false);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <main className="flex items-center justify-center overflow-x-hidden relative">
      <div className="max-w-[1440px] w-full flex flex-col-reverse gap-[80px] md:flex-row md:gap-[100px] px-6 py-[100px]">
        <section>
          <ul className="flex flex-col gap-10">
            <li>
              <h1 className="text-[24px] leading-[31px]">My Socials</h1>
              <div className="flex gap-6 mt-4">
                <Link
                  href="https://www.linkedin.com/in/cong-ta-8040a018b/"
                  target="_blank"
                >
                  <Svg
                    iconName="linkin"
                    color="#778295"
                    className="social_icons"
                  />
                </Link>
                <Link href="https://github.com/ctadev" target="_blank">
                  <Svg
                    iconName="github"
                    color="#778295"
                    className="social_icons h-[24px] w-[24px]"
                  />
                </Link>
              </div>
            </li>

            <li>
              <h1 className="text-[24px] leading-[31px]">Phone Number</h1>
              <Link href="tel:2267535591">
                <div className="flex items-center gap-2 mt-4 div_icon group">
                  <Svg
                    iconName="phone"
                    color="#778295"
                    className="social_icons"
                  />
                  <p className="font-semibold text-[24px] leading-[31px] dark:text-white text-black-400 group-hover:text-blue-secondary">
                    (226) 753-5591
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <h1 className="text-[24px] leading-[31px]">Email Address</h1>
              <Link href="mailto:ctakammy@gmail.com">
                <div className="flex items-center gap-2 mt-4 div_icon group">
                  <Svg
                    iconName="chevdown"
                    color="#778295"
                    className="social_icons"
                  />
                  <p className="font-semibold text-[24px] leading-[31px] dark:text-white text-black-400 group-hover:text-blue-secondary">
                    ctakammy@gmail.com
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </section>

        <form ref={form} onSubmit={handleSubmit} className="flex-grow">
          <section className="">
            <ul className="flex flex-col gap-10">
              <li>
                <h2 className="text-[20px] leading-[30px] mb-4">
                  What&apos;s your name?
                </h2>
                {error && formInputs.name <= 0 ? (
                  <label className={s.label_error}>
                    Your Name Cannot be empty.
                  </label>
                ) : null}
                <input
                  type="text"
                  className={`h-[50px] md:h-[80px] rounded-[20px] w-full bg-white-800 border border-[#CCE1FF] dark:border-[#2C3C56] dark:bg-black-300 outline-none px-4 required:border-red-500 required:dark:border-red-500`}
                  name="name"
                  value={formInputs.name}
                  onChange={handleChange}
                />
              </li>
              <li>
                <h2 className="text-[20px] leading-[30px] mb-4">
                  What&apos;s your email?
                </h2>
                {error &&
                !formInputs.email
                  .toLocaleLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  ) ? (
                  <label className={s.label_error}>
                    Please enter a valid email address.
                  </label>
                ) : null}
                <input
                  className={`h-[50px] md:h-[80px] rounded-[20px] w-full bg-white-800 border border-[#CCE1FF] dark:border-[#2C3C56] dark:bg-black-300 outline-none px-4 required:border-red-500 required:dark:border-red-500`}
                  type="email"
                  name="email"
                  value={formInputs.email}
                  onChange={handleChange}
                />
              </li>
              <li>
                <h2 className="text-[20px] leading-[30px] mb-4">
                  Your message?
                </h2>
                {error && formInputs.message <= 0 ? (
                  <label className={s.label_error}>
                    Your Message cannot be empty.
                  </label>
                ) : null}
                <textarea
                  rows="4"
                  cols="50"
                  className={`h-[140px] md:h-[190px] rounded-[20px] w-full bg-white-800 border border-[#CCE1FF] dark:border-[#2C3C56] dark:bg-black-300 outline-none p-4`}
                  name="message"
                  value={formInputs.message}
                  onChange={handleChange}
                ></textarea>
              </li>
              <li className="flex justify-end">
                <button
                  type="submit"
                  className={`h-[70px] rounded-full w-full md:w-[186px] bg-blue-light text-white ${
                    isLoading && "bg-red-400"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </li>
            </ul>
          </section>
        </form>
      </div>
      <ToastContainer />
      {isLoading && (
        <div className="fixed top-1/2 left-1/2 z-40 h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
          <Image src="/loading.svg" alt="loading" fill />
        </div>
      )}
    </main>
  );
};

export default Form;

const s = {
  label_error: "text-red-500 text-md font-bold py-1 px-2 rounded-md w-fit mb-1",
};
