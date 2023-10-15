import HeroImage from "@/assets/heroImg.png";
import Image from "next/image";
import Logo from "./Spline";
const Hero = () => {
  return (
    <div className="flex  flex-wrap-reverse  w-[85%]  mx-auto lg:pt-10 justify-center sm:gap-8 md:gap-12 lg:gap-20 min-h-[calc(100vh-70px)]  ">
      <div className="flex w-full flex-col gap-6 lg:gap-7 mx-auto lg:mx-0 px-4 lg:w-2/5 pt-2 lg:pt-5 text-center  lg:text-left">
        <p className="text-sm lg:text-lg chooseus">World’s First De-Ed Platform</p>
        <p className="font-bold text-4xl lg:text-5xl xl:text-6xl w-full mx-auto ">
          Discover<br className="hidden lg:block"></br> Your  Path <span className="lg:whitespace-nowrap">to Success at</span> <span className="lg:whitespace-nowrap">  Genci University</span>
        </p>
        <span className="text-sm lg:mt-5 lg:text-lg font-medium">
          Ask why, learn how. Education for all, affordably. <span className="whitespace-nowrap"> Join the movement!</span>
        </span>
        <a
          href="https://genci.gitbook.io/genci-whitepaper/introduction/genci-pioneering-decentralized-education-for-all"
          className="relative inline-flex items-center justify-center py-4  md:p-5 w-[200px]  lg:w-[250px] overflow-hidden font-medium hover:scale-105 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 mx-auto lg:mx-0"
          
        >
          <span className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgb(63,55,201)_0%,rgb(72,149,239)_100%,rgb(72,149,239)_100%)]"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-cyan-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-sm md:text-base font-semibold uppercase  tracking-widest">Whitepaper</span>
        </a>
      </div>

      <figure className="p-3 w-[300px] sm:w-fit mx-auto lg:mx-0 lg:w-[450px] aspect-square ">
        <Image src={HeroImage} alt="logo" className="w-full" />
      </figure>
      {/* <Logo/>  */}
    </div>
  );
};

export default Hero;
