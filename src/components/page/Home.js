import React, { useEffect, useState } from "react";
import pict1 from "../picture/workplace.jpg";
import icon1 from "../iconDental/icon1.png";
import icon2 from "../iconDental/dental-icon-2.jpg";
import icon3 from "../iconDental/dental-icon-3.jpg";
import visit from "../picture/dental-visits.jpeg";
import icon4 from "../iconDental/tooth_anatomy.jpg";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const timer =
      counter < 250 && setInterval(() => setCounter(counter + 1), 10);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    const timer = years < 15 && setInterval(() => setYears(years + 1), 100);
    return () => clearInterval(timer);
  }, [years]);

  return (
    <div>
      <div>
        <div class="relative max-w-full mx-auto mt-20">
          <img
            class="h-80 w-full object-cover rounded-md"
            src={pict1}
            alt="Radno okruzenje"
          />
          <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-white text-3xl font-bold">
              Better Dentistry. <br></br>Join us to a fun and friendly dental
              environment. Our professionals are working so hard to see smile on
              your face that you deserve! We are dedicated about our duties
            </h2>
          </div>
        </div>
      </div>
      {/* tri boxa */}
      <div class="min-h-screen flex items-center justify-center p-2">
        {/* tailwind za mobilne i desktop racunare - box flex */}
        <div class="grid grid-rows-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <div class="border-2 border-lime-500 p-3 rounded-lg shadow-xl hover:shadow-2xl h-44">
            {" "}
            <img src={icon1} alt="Easy Appointment" class="h-14"></img>
            <h1>Easy Appointment</h1>
            <p>
              Lorem Ipsum is simply is very dummy text of the printings and type
              setting
            </p>
          </div>
          <div class="border-2 border-lime-500 p-3 rounded-lg shadow-xl hover:shadow-2xl h-44">
            <img src={icon2} alt="Easy Appointment" class="h-14 "></img>
            <h1>Emergency Service</h1>
            <p>
              Lorem Ipsum is simply is very dummy text of the printings and type
              setting
            </p>
          </div>
          <div class="border-2 border-lime-500 p-3 rounded-lg shadow-xl hover:shadow-2xl h-44">
            {" "}
            <img src={icon3} alt="Easy Appointment" class="h-14 "></img>
            <h1>Emergency Service Tooth 🦷 </h1>
            <p>
              Lorem Ipsum is simply is very dummy text of the printings and type
              setting
            </p>
          </div>
          <div class="border-2 border-lime-500 p-3 rounded-lg shadow-xl hover:shadow-2xl h-44">
            {" "}
            <img src={icon4} alt="Easy Appointment" class="h-14 "></img>
            <h1>Emergency Tooth polish</h1>
            <p>
              Lorem Ipsum is simply is very dummy text of the printings and type
              setting
            </p>
          </div>
        </div>
      </div>
      {/* novi deo  */}
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full mr-10 ml-10 content-center mb-12">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-80 w-full object-cover md:h-full md:w-48"
              src={visit}
              alt="Poseta stomatologa"
            />
          </div>
          <div class="p-8">
            <p class="mt-2 text-justify text-lime-500 text-4xl font-DongleLight">
              Welcome to Dental office "STOJANOVIC" represents everything going
              to dentist necessary. We have upgraded your dreaded dentist
              appointment and transformed it into a relaxing.
            </p>
            <p class="mt-2 text-justify text-lime-500 text-3xl font-DongleBold">
              Happy Patients: {counter} +
            </p>
            <hr class="w-64 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700 mr-1 ml-1" />
            <p class="mt-2 text-justify text-lime-500 text-3xl font-DongleBold">
              Years Experience: {years} +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
