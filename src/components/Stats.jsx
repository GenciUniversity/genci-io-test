import React from "react";
import earth from "@/assets/rocket.svg"
const Stats = () => {
  return (
    <div className="pt-10 min-h-screen lg:min-h-[80vh] flex justify-center flex-col gap-7 items-center w-full mb-20  " style={{
      backgroundImage : `linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 128, 0.18)
      ), url("https://images.unsplash.com/photo-1634176866089-b633f4aec882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80")`,
      backgroundSize : "cover",
      backgroundPosition : "top",
      boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
    }}>
      <h2 className="text-center text-6xl md:7xl lg:text-9xl font-bold stroke-text">
        World's first
      </h2>
      <p className="text-center text-neutral-100 text-2xl md:text-3xl lg:text-5xl font-bold ">
        First Fully Self-Governed University.
      </p>
      <div className="flex w-1/3 mx-auto mb-8 justify-center items-center">
        <div className="text-center w-1/2">
          <span className="token_no text-4xl lg:text-7xl">1B</span>
          <p className="text-center text-neutral-100 text-lg lg:text-3xl font-bold ">
            Native Tokens
          </p>
        </div>
        <div className="text-center w-1/2">
          <span className="token_no text-4xl lg:text-7xl">10M</span>
          <p className="text-center text-neutral-100 text-lg lg:text-3xl font-bold ">
            Voting Tokens
          </p>
        </div>
      </div>
        <a
          href="https://genci-io-content.s3.ap-south-1.amazonaws.com/UnescoArticle.pdf"
          target="_blank"
          className="relative inline-flex items-center justify-center  p-4 md:p-5 w-[200px]  lg:w-[250px] overflow-hidden font-medium hover:scale-105 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 "
        >
          <span className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgb(63,55,201)_0%,rgb(72,149,239)_100%,rgb(72,149,239)_100%)]"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-cyan-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative  text-white text-sm lg:text-base font-semibold uppercase  tracking-widest  ">Unesco Article</span>
        </a>
    </div>
  );
};

export default Stats;
