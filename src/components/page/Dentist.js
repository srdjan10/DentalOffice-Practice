import React, { useState } from "react";
import doctor from "../doctorData";

const Dentist = () => {
  const [dentistDoctor, setDentisDoctor] = useState(doctor);

  return (
    <div>
      <h1 class="mt-2 text-center text-lime-500 text-7xl font-DongleLight">
        OUR DENTIST
      </h1>
      <div class="grid grid-rows-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
        {dentistDoctor.map((item) => (
          <ul
            key={item.id}
            class="w-1/2 bg-white rounded-xl shadow-xl overflow-hidden md:max-w-full mr-auto ml-auto"
          >
            <div class="relative -bottom-12 flex h-[200px] w-[200px] rounded-full mr-auto ml-auto">
              <img
                src={item.picture}
                alt="Dental medical people "
                class="h-full w-full rounded-full mr-auto ml-auto"
              ></img>
            </div>

            <div class="mt-16 flex flex-col items-center">
              <p class="text-navy-700 text-xl font-bold dark:text-white">
                {item.name} {item.lastName}
              </p>
              <p class="text-base font-normal text-gray-600">
                {item.profession}
              </p>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Dentist;
