import React from "react";
import { FaStreetView } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div class=" flex  justify-center font-DongleRegular  text-3xl">
        {/* kartice */}
        <div class="grid gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div class="border-2 border-lime-500 p-3 rounded-lg shadow-xl hover:shadow-2xl h-44">
            <FaStreetView />
            <h1>Address</h1>
            <p>
              <a
                href="https://maps.app.goo.gl/6uzeM6V6xogJfFbD7"
                target="_blank"
                rel="noreferrer"
              >
                Hajduk Veljkova br.10 Čačak
              </a>
            </p>
          </div>
          <div class="border-2 border-lime-500 p-3 rounded-lg shadow-xl hover:shadow-2xl h-44">
            <MdEmail />
            <h1>Email</h1>
            <p>dentalofficestojanovic@gmail.com</p>
            <p>stojanovic@gmail.com</p>
          </div>
          <div class="border-2 border-lime-500 p-3 rounded-lg shadow-xl hover:shadow-2xl h-44">
            <FaPhone />
            <h1>Phone </h1>
            <p>032-111-111</p>
            <p>032-222-222</p>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1130.9989261547112!2d20.350780188425656!3d43.891949048157635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDUzJzMwLjgiTiAyMMKwMjEnMDQuOSJF!5e1!3m2!1ssr!2srs!4v1708524490131!5m2!1ssr!2srs"
        width="400"
        height="250"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Maps"
        class="rounded-2xl mr-auto ml-auto pt-2"
      ></iframe>
      {/* Contact */}
      <div class="py-2 lg:py-4 px-4 mx-auto max-w-screen-md  text-3xl">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">
          Contact
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Contact us...thank you 💟
        </p>
        <form class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 font-medium text-gray-900 dark:text-gray-300 font-DongleRegular  text-3xl"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="test@test.com"
              required
              name="from_name"
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 font-medium text-gray-900 dark:text-gray-300 font-DongleRegular  text-3xl"
            >
              Title
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Write title..."
              required
              name="to_title"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 font-medium text-gray-900 dark:text-gray-400 font-DongleRegular  text-3xl"
            >
              Message
            </label>
            <textarea
              required
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write message..."
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm bg-slate-500 font-medium text-center text-white rounded-lg bg-tahiti sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
