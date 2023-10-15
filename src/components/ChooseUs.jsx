import React from "react";
import rocket from "@/assets/rocket.svg";
import edu from "@/assets/edu.svg";
import cost from "@/assets/cost.svg";
import Image from "next/image";
import vector from "@/assets/Vector.png";
const ChooseUs = () => {
  return (
    <div className="relative flex flex-col my-10 justify-center  min-h-[80vh] w-[90%] lg:[95%] xl:w-[85%] gap-4  items-center">
      <p className="w-full chooseus px-7 lg:px-14">Choose Us</p>
      <div className="text-5xl mb-6 font-bold w-full px-7 lg:px-14">
        Why should you opt in Genci?
      </div>
      <div className="flex w-full flex-wrap  justify-center  ">
        <div className="w-full lg:w-1/3 px-7 lg:px-14 flex flex-col gap-5 py-10 lg:border-r-2 border-gray-400">
          <figure>
            <Image src={rocket} alt="rocket" />
          </figure>
          <div className="text-white text-3xl font-semibold  leading-10">
            Empowering Curiosity
          </div>
          <div className="h-[100px] text-neutral-200 text-lg font-medium  leading-normal">
            We firmly believe that asking{" "}
            <span className="font-bold"> “why”</span> and{" "}
            <span className="font-bold"> "how"</span> is at the heart of
            meaningful learning
          </div>
          <Image src={vector} alt="arrow" className="mt-4 mb-7 lg:mb-0 lg:mt-10" />
        </div>
        <div className="w-full lg:w-1/3 px-7 lg:px-14 flex flex-col gap-5 py-10 lg:border-r-2 border-gray-400">
          <figure>
            <Image src={edu} alt="rocket" />
          </figure>
          <div className="text-white text-3xl font-semibold  leading-10">
            Education For Everyone
          </div>
          <div className="h-[100px] text-neutral-200 text-lg font-medium  leading-normal">
            Access to quality education is a fundamental right, not a privilege
          </div>
          <Image src={vector} alt="arrow" className="mt-4 mb-7 lg:mb-0 lg:mt-10" />
        </div>
        <div className="w-full lg:w-1/3 px-7 lg:px-14 flex flex-col gap-5 py-10">
          <figure>
            <Image src={cost} alt="rocket" />
          </figure>
          <div className="text-white text-3xl font-semibold  leading-10">
            Lowest Cost Achievable
          </div>
          <div className="h-[100px] text-neutral-200 text-lg font-medium  leading-normal">
            Keeping education affordable is at the core of our values
          </div>
          <Image src={vector} alt="arrow" className="mt-4 mb-7 lg:mb-0 lg:mt-10" />
        </div>
      </div>
      <a
          href="https://linktr.ee/genciuniversity"
          target="_blank"
          className="relative inline-flex items-center justify-center  p-5 w-[250px] overflow-hidden font-medium hover:scale-105 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 mt-5"
        >
          <span className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgb(63,55,201)_0%,rgb(72,149,239)_100%,rgb(72,149,239)_100%)]"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-cyan-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative  text-white text-base font-semibold uppercase  tracking-widest">Join Us</span>
        </a>
        <div className="absolute blur-circle -left-[10%]">

        </div>
    </div>
  );
};

export default ChooseUs;
