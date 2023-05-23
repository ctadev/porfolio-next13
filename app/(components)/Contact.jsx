"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Image from "next/image";

const Contact = () => {
  const form = useRef();
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);

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
    toast.success(
      "Message Sent, I will get back to you within 24hours",
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formInputs.name == 0 ||
      formInputs.email == 0 ||
      formInputs.message == 0
    ) {
      setError(true);
    } else {
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
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <>
      <Head>
        <title>Contact - Cong&apos;s Porfolio</title>
        <meta
          name="description"
          content="Contact form for congs porfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/manicure.png" />
      </Head>
      <div className={s.contact} id="contact">
        <main className={s.inner_container}>
          <section className={s.contact_info}>
            <div className={s.infos}>
              <Image
                src="https://raw.githubusercontent.com/judygab/web-dev-projects/3099dfd4ab2683c422e0f4e662d84b8a147db245/personal-portfolio/src/assets/img/contact-img.svg"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </section>

          <form className={s.form} ref={form} onSubmit={handleSubmit}>
            <h1 className={s.title2}>Get In Touch</h1>
            <div className={s.input_container}>
              <input
                type="text"
                className={s.textbox}
                name="name"
                value={formInputs.name}
                onChange={handleChange}
              />
              <label
                className={`${formInputs.name ? s.label_filled : s.label}`}
              >
                Your Name
              </label>
              {error && formInputs.name <= 0 ? (
                <label className={s.label_error}>
                  Your Name Cannot be empty.
                </label>
              ) : null}
            </div>
            <div className={s.input_container}>
              <input
                type="email"
                className={s.textbox}
                name="email"
                value={formInputs.email}
                onChange={handleChange}
              />
              <label
                className={`${formInputs.email ? s.label_filled : s.label}`}
              >
                Your Email
              </label>
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
            </div>
            <div className={s.input_container}>
              <textarea
                className={s.textarea}
                name="message"
                value={formInputs.message}
                onChange={handleChange}
              />
              <label
                className={`${formInputs.message ? s.label_filled : s.label}`}
              >
                Your Message
              </label>
              {error && formInputs.message <= 0 ? (
                <label className={s.label_error}>
                  Your Message cannot be empty.
                </label>
              ) : null}
            </div>
            <button className={s.btn}>Submit</button>
          </form>
        </main>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;

const s = {
  contact:
    "bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-800 text-white flex items-center justify-center py-[3rem]",
  inner_container:
    "max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center w-full justify-center",
  contact_info: "",
  infos: "flex flex-col gap-8 px-4",
  title: "font-font3 text-6xl",
  title2: "font-font3 text-4xl font-bold font-nothing",

  info_list: "flex flex-col gap-4",
  li: "flex gap-2 cursor-pointer hover:text-gold lg:text-2xl",

  form: "flex flex-col items-center gap-6 min-h-[70VH] min-w-[400px] px-6 py-10 rounded-lg",
  input_container: "w-full relative flex flex-col gap-1 z-10",
  textbox:
    "bg-transparent border rounded-md h-[3rem] w-full py-2 px-4 peer outline-none required:border-red-500",
  textarea:
    "bg-transparent border rounded-md h-[10rem] w-full py-2 px-4 peer outline-none",
  label:
    "absolute z-10 left-[15px] px-2 pointer-events-none top-[10px] transition-all duration-200 rounded-md peer-focus:top-[-12px] peer-focus:bg-[#212121]",
  label_filled:
    "top-[-12px] absolute z-10 left-[15px] px-2 pointer-events-none transition-all duration-200 bg-[#212121] rounded-md",
  btn: "border rounded-md w-full p-4 font-bold text-xl bg-slate-900 hover:text-gold hover:bg-[cyan] hover:text-black",
  label_error: "text-red-500 text-md font-bold bg-black/90 py-1 px-2 rounded-md w-fit",
};
