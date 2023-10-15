import React from "react";
import Image from "next/image";
import Arrow from "@/assets/arrow.svg";
import Link from "next/link";

const JoinTheMovement = () => {
	return (
		<div
			className="min-h-[80vh] flex flex-col gap-7 items-center w-full mb-20 mt-10 py-10 "
			style={{
				backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 128, 0.18)
      ), url("https://genci-io-content.s3.ap-south-1.amazonaws.com/jointhemovement.png")`,
				backgroundSize: "cover",
				overflowX: "hidden",
				width: "90%",
			}}
		>
			{/* heading */}
			<h1 className="text-5xl mb-6 font-bold w-full md:px-14 text-center">
				Join The Movement
			</h1>
			{/* card */}
			<div className="grid lg:grid-cols-3 gap-2 items-center">
				<div className="bg-[#020D11] mx-auto w-[80%]  pb-4  rounded-xl hover:scale-105 transition-all duration-300">
					<h1 className="chooseus ml-7 pt-6 pb-3">WHY</h1>
					<h2 className="text-2xl font-bold ml-7 pb-4">UNESCO Article</h2>
					<p className="text-md pb-6 ml-7 mr-10 lg:min-h-[300px] xl:min-h-[250px] ">
						In the 1990s, decentralization discussions surfaced, but lacked
						action. An insightful UNESCO article underscores the pressing need
						for decentralization, capturing its timeless importance.
					</p>
					<Link
						href={
							"https://genci-io-content.s3.ap-south-1.amazonaws.com/UnescoArticle.pdf"
						}
						target="_blank"
					>
						<button className="w-12 h-12 rounded-full border-2 border-[#DFDFDF] ml-7 hover:ring-4">
							<Image src={Arrow} alt="arrow" className="ml-3" />
						</button>
					</Link>
				</div>
				<div className="bg-[#020D11] w-[80%]  pb-4 mx-auto rounded-xl hover:scale-105 transition-all duration-300">
					<h1 className="chooseus ml-7 pt-6 pb-3">HOW</h1>
					<h2 className="text-2xl font-bold ml-7 pb-4">Whitepaper</h2>
					<p className="text-md pb-6 ml-7 mr-10 lg:min-h-[300px] xl:min-h-[250px]">
						Here, we outline a visionary approach to decentralizing the flawed
						education system, detailing a comprehensive blueprint for the
						implementation and functionality of this transformative project.
					</p>
					<Link
						href={
							"https://genci.gitbook.io/genci-whitepaper/introduction/genci-pioneering-decentralized-education-for-all"
						}
						target="_blank"
					>
						<button className="w-12 h-12 rounded-full border-2 border-[#DFDFDF] ml-7 hover:ring-4">
							<Image src={Arrow} alt="arrow" className="ml-3" />
						</button>
					</Link>
				</div>
				<div className="bg-[#020D11] w-[80%]  pb-4 mx-auto rounded-xl hover:scale-105 transition-all duration-300">
					<h1 className="chooseus ml-7 pt-6 pb-3">JOIN</h1>
					<h2 className="text-2xl font-bold ml-7 pb-4">Explore Us</h2>
					<p className="text-md pb-16 ml-7 mr-10 lg:min-h-[300px] xl:min-h-[250px]">
						Join the ranks of trusted decentralized validator operators in the
						network and help secure the interchain.
					</p>
					<Link href={"https://linktr.ee/genciuniversity"} target="_blank">
						<button className="w-12 h-12 rounded-full border-2 border-[#DFDFDF] ml-7 hover:ring-4">
							<Image src={Arrow} alt="arrow" className="ml-3" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JoinTheMovement;
