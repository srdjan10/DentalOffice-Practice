/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        DongleBold: ["Dongle-Bold", "Dongle-Bold"],
        DongleLight: ["Dongle-Light", "Dongle-Light"],
        DongleRegular: ["Dongle-Regular", "Dongle-Regular"],
      },
    },
  },
  plugins: [],
};
