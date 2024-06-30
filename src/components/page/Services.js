import React, { useState } from "react";
import servis1 from "../picture/service-details-promo1.png";
import servis2 from "../picture/service-details-promo2.png";
import YTvideo from "../video/How to Brush Your Teeth Animation MCM.mp4";

const Services = () => {
  return (
    <div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full mr-10 ml-10 content-center mb-12">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-80 w-full object-cover md:h-full md:w-48"
              src={servis1}
              alt="servis dental"
            />
          </div>
          <div class="p-8">
            <p class="mt-2 text-justify text-lime-500 text-3xl font-DongleLight">
              Phasellus risus turpis, pretium sit amet magna non, molestie
              ultricies enim. Nullam pulvinar felis at metus malesuada, nec
              convallis lacus commodo. Duis blandit neque purus, nec auctor mi
              sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut,
              placerat eget urna. Curabitur nec faucibus leo, et laoreet nibh.
              Pellentesque euismod quam at eros efficitur, vitae venenatis sem
              consectetur. Donec ut risus ultricies, dictum neque at, bibendum
              purus. In hac habitasse platea dictumst. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat
              quam lectus. Curabitur dictum velit non lacus ornare tempor.
              Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed
              laoreet posuere velit sit amet varius.
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto bg-blue-800 rounded-xl shadow-md overflow-hidden md:max-w-full mr-10 ml-10 content-center mb-12">
        <div class="md:flex">
          <div class="p-8">
            <p class="mt-2 text-justify text-white text-3xl font-DongleLight">
              Phasellus risus turpis, pretium sit amet magna non, molestie
              ultricies enim. Nullam pulvinar felis at metus malesuada, nec
              convallis lacus commodo. Duis blandit neque purus, nec auctor mi
              sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut,
              placerat eget urna. Curabitur nec faucibus leo, et laoreet nibh.
              Pellentesque euismod quam at eros efficitur, vitae venenatis sem
              consectetur. Donec ut risus ultricies, dictum neque at, bibendum
              purus. In hac habitasse platea dictumst. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat
              quam lectus. Curabitur dictum velit non lacus ornare tempor.
              Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed
              laoreet posuere velit sit amet varius.
            </p>
          </div>
          <div class="md:shrink-0">
            <img
              class="h-80 w-full object-cover md:h-full md:w-48"
              src={servis2}
              alt="servis dental"
            />
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full mr-10 ml-10 content-center mb-12">
        <div class="md:flex">
          <div class="p-8">
            <p class="mt-2 text-justify text-lime-500 text-3xl font-DongleLight">
              Safety First
            </p>
            <p class="mt-2 text-justify text-lime-500 text-3xl font-DongleLight">
              Since 1998, Donto Dentistry has been proud to combine modern
              techniques and high-tech equipment. Dr. John Dae, Micha and his
              team deliver a personalized and comfortable dental care experience
              unlike any other Mason dentist.
            </p>
          </div>
          <div class="md:shrink-0 ">
            <video className="h-60 w-50 rounded-lg aspect-video" controls>
              <source src={YTvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default Services;
