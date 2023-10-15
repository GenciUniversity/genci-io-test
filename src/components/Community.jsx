import React from "react";
import msg from "@/assets/msg.svg";
import twitter from "@/assets/twitter.svg";
import dev from "@/assets/dev.svg";
import red from "@/assets/red.svg";
import Image from "next/image";
import arrow from "@/assets/arrow.svg";
import Link from "next/link";
const Community = () => {
  return (
    <div className="relative items-center lg:items-start text-center lg:text-start flex flex-col my-10 justify-center  min-h-[80vh]  w-[95%] lg:w-[90%] gap-4  ">
      <p className="w-full chooseus px-4 lg:px-14">Join Community</p>
      <div className="text-5xl mb-6 font-bold flex flex-wrap self-start px-4 lg:px-14 lg:w-3/5 ">
        Meet the worldwide community.
      </div>
      <div className="flex w-full justify-center flex-wrap">
        <div className="w-full sm:w-1/2 xl:w-1/4 px-14 items-center lg:items-start text-center lg:text-start flex flex-col gap-3 lg:gap-5 py-4 lg:py-10 ">
          <figure>
            <Image src={msg} alt="msg" />
          </figure>

          <div className="text-white text-2xl font-bold  leading-10">
            Telegram
          </div>
          <div className="lg:min-h-[100px] text-neutral-200 text-lg font-medium  leading-normal">
            Ask general questions and chat with the worldwide community on
            Telegram.
          </div>
          <Link
						href={
							"https://t.me/GenciUniversity"
						}
						target="_blank"
            className="z-20"
					>
						<button className="h-14 aspect-square grid place-content-center rounded-full border-2 border-[#DFDFDF] mb-10 lg:mb-0 mt-3 lg:mt-5 hover:scale-105 duration-300">
							<Image src={arrow} alt="arrow"  />
						</button>
					</Link>
          
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/4 px-14 items-center lg:items-start text-center lg:text-start flex flex-col gap-3 lg:gap-5 py-4 lg:py-10 ">
          <figure>
            <Image src={twitter} alt="twitter" />
          </figure>
          <div className="text-white text-2xl font-bold  leading-10">
            Twitter
          </div>
          <div className="lg:min-h-[100px] text-neutral-200 text-lg font-medium  leading-normal">
            Follow @genciofficial to get the latest news and updates from across
            the ecosystem.
          </div>
          <Link
						href={
							"https://twitter.com/GenciOfficial"
						}
						target="_blank"
            className="z-20"
					>
						<button className="h-14 aspect-square grid place-content-center rounded-full border-2 border-[#DFDFDF] mb-10 lg:mb-0 mt-3 lg:mt-5 hover:scale-105 duration-300">
							<Image src={arrow} alt="arrow"  />
						</button>
					</Link>
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/4 px-14 items-center lg:items-start text-center lg:text-start flex flex-col gap-3 lg:gap-5 py-4 lg:py-10 ">
          <figure>
            <Image src={dev} alt="edu" />
          </figure>
          <div className="text-white text-2xl font-bold  leading-10">
            Discord
          </div>
          <div className="lg:min-h-[100px] text-neutral-200 text-lg font-medium  leading-normal">
            Have technical questions about Genci tools? Ask a developer on the
            Discord.
          </div>
          <Link
						href={
							"https://discord.gg/ZVw7TgnMEJ"
						}
						target="_blank"
					>
						<button className="h-14 aspect-square grid place-content-center rounded-full border-2 border-[#DFDFDF] mb-10 lg:mb-0 mt-3 lg:mt-5 hover:scale-105 duration-300">
							<Image src={arrow} alt="arrow"  />
						</button>
					</Link>
          
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/4 px-14 items-center lg:items-start text-center lg:text-start flex flex-col gap-3 lg:gap-5 py-4 lg:py-10">
          <figure>
            <Image src={red} alt="reddit" />
          </figure>
          <div className="text-white text-2xl font-bold  leading-10">
            Linked
          </div>
          <div className="lg:min-h-[100px] text-neutral-200 text-lg font-medium  leading-normal">
            Thinking about becoming a validator or interested in network
            matters?
          </div>
          <Link
						href={
							"https://t.me/GenciUniversity"
						}
						target="_blank"
            className="z-20"
					>
						<button className="h-14 aspect-square grid place-content-center rounded-full border-2 border-[#DFDFDF] mb-10 lg:mb-0 mt-3 lg:mt-5 hover:scale-105 duration-300">
							<Image src={arrow} alt="arrow"  />
						</button>
					</Link>
        </div>
      </div>
      <div className="absolute blur-circle -left-[10%]"></div>
      <div className="absolute blur-circle top-0 -right-[10%]"></div>
    </div>
  );
};

export default Community;
