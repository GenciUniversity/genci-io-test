import React from "react";
import {BsTwitter, BsLinkedin} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
const TeamCard = () => {
  return (
    <div className="w-full pt-10 flex flex-wrap gap-10 ">
      <div
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mx-auto mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
      >
        <div className="rounded-lg overflow-hidden shadow-md bg-[#131619]">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <img
                src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                alt="Display Picture of Andres Berlin"
                role="img"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16 space-y-2">
            <h1 className="font-bold text-3xl text-center mb-1  ">
              Harsh Sachdev
            </h1>
            <p className="text-gray-100 text-sm font-medium text-center">
              Chief Executive Officer
            </p>
            <p className="text-center text-gray-300 text-base pt-2 font-normal">
              The CEO's role in raising a company's corporate IQ is to establish
              an atmosphere that promotes knowledge sharing and collaboration.
            </p>
            <div className="w-full flex justify-center pt-5 gap-10 pb-5">
              <BsTwitter className="text-2xl hover:scale-105 cursor-pointer"/>
              <BsLinkedin className="text-2xl hover:scale-105 cursor-pointer"/>
              <a href="mailto:hershey@genci.io">
              <FiMail className="text-2xl hover:scale-105 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mx-auto mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
      >
        <div className="rounded-lg overflow-hidden shadow-md bg-[#131619]">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <img
                src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                alt="Display Picture of Andres Berlin"
                role="img"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16 space-y-2">
            <h1 className="font-bold text-3xl text-center mb-1  ">
              Shreyansh Jain
            </h1>
            <p className="text-gray-100 text-sm font-medium text-center">
              Chief Technology Officer
            </p>
            <p className="text-center text-gray-300 text-base pt-2 font-normal">
              The CEO's role in raising a company's corporate IQ is to establish
              an atmosphere that promotes knowledge sharing and collaboration.
            </p>
            <div className="w-full flex justify-center pt-5 gap-10 pb-5">
              <BsTwitter className="text-2xl hover:scale-105 cursor-pointer"/>
              <BsLinkedin className="text-2xl hover:scale-105 cursor-pointer"/>
              <a href="mailto:shreyansh@genci.io">
              <FiMail className="text-2xl hover:scale-105 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mx-auto mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
      >
        <div className="rounded-lg overflow-hidden shadow-md bg-[#131619]">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <img
                src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                alt="Display Picture of Andres Berlin"
                role="img"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16 space-y-2 ">
            <h1 className="font-bold text-3xl text-center mb-1  ">
              Chaitanya Bhude
            </h1>
            <p className="text-gray-100 text-sm font-medium text-center">
              Chief Operating Officer
            </p>
            <p className="text-center text-gray-300 text-base pt-2 font-normal">
              The CEO's role in raising a company's corporate IQ is to establish
              an atmosphere that promotes knowledge sharing and collaboration.
            </p>
            <div className="w-full flex justify-center pt-5 gap-10 pb-5">
              <BsTwitter className="text-2xl hover:scale-105 cursor-pointer"/>
              <BsLinkedin className="text-2xl hover:scale-105 cursor-pointer"/>
              <a href="mailto:chaitanya@genci.io">
              <FiMail className="text-2xl hover:scale-105 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
