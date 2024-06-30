import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import logo from "../components/logo/dental_logo_stojanovic.png";
import logoCompany from "../components/logo/VTL_Development--.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { motion as m } from "framer-motion";

const MainLayout = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);
  const myDate = new Date().getFullYear();

  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  let meniBar = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Services", link: "/Services" },
    { name: "Dentist", link: "/Dentist" },
    { name: "Gallery", link: "/Gallery" },
    { name: "Contact", link: "/Contact" },
  ];
  return (
    <m.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      <header class="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl items-center font-DongleRegular text-3xl">
        <div>
          <img
            src={logo}
            alt="logo Dental office Stojanovic"
            class="w-1/3"
          ></img>
        </div>
        <div class="w-full h-22 fixed  top-0 left-0 ">
          <div class="md:flex items-center py-6 md:px-12 px-7">
            <div
              onClick={() => setIsOpen(!isOpen)}
              class="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-14 "
            >
              {isOpen ? (
                <IoMdClose class="bg-white-600" />
              ) : (
                <FaBars class="bg-white-600" />
              )}
            </div>
            <ul
              class={`md:p-4 ml-auto md:flex md:flex-wrap md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
              ${isOpen ? "top-14 font-light italic " : "top-[-480px]"}`}
            >
              {meniBar.map((link) => (
                <m.li whileHover={{ scale: 1.2 }}>
                  <a
                    href={link.link}
                    class="-mt-6 mr-auto md:flex md:flex-wrap items-center p-2"
                  >
                    {link.name}
                    <hr></hr>
                  </a>
                </m.li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <main class="mt-16">{children}</main>
      <footer class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <img class="w-auto h-12" src={logoCompany} alt="" />
          <p class="text-sm text-gray-600 dark:text-gray-300">
            © Copyright {myDate}. All Rights Reserved.
          </p>
          <div class="flex -mx-2 space-x-7 h-10">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
      </footer>
    </m.div>
  );
};
export default MainLayout;
