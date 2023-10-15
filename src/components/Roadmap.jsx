import React from "react";
import Image from "next/image";
import q3 from "@/assets/q3.svg";
import q4 from "@/assets/q4.svg";
import q1 from "@/assets/q1.svg";

const Roadmap = () => {
	return (
		<div className="w-[90%] min-h-[600px] flex flex-col py-16">
			{/* heading */}
			<div className="pb-10 w-full">
				<h1 className="text-5xl mb-6 font-bold w-full px-14 text-center">
					Roadmap
				</h1>
				<div className="flex flex-row justify-center items-center gap-4">
					<div className="flex items-center border-r-2 my-3">
						<div className="w-3 h-3 bg-[#05BB53]"></div>
						<p className="pl-3 text-sm pr-3">Done</p>
					</div>
					<div className="flex items-center border-r-2 my-3">
						<div className="w-3 h-3 bg-[#F4BC2C]"></div>
						<p className="pl-3 text-sm pr-3">WIP</p>
					</div>
					<div className="flex items-center">
						<div className="w-3 h-3 bg-[#FFF]"></div>
						<p className="pl-3 text-sm pr-3">Upcoming</p>
					</div>
				</div>
			</div>
			{/* cards */}
			<div className="grid lg:grid-cols-3 gap-5">
				{/* q3 */}
				<div className="p-2 border-2 border-[#4D4D4D] border-opacity-25 rounded-full mx-auto w-4/5 sm:w-3/5 lg:w-fit">
					<div className="bg-gradient-to-t from-transparent to-gray-900 rounded-full px-4 py-10">
						<div className="flex justify-center items-center pb-3">
							<Image src={q3} alt="ramdom" width={100} height={100} />
						</div>
						<p className="bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 bg-clip-text text-transparent text-center text-2xl font-bold mb-3">
							2023
						</p>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#05BB53]" />
								<p className="pl-3 text-sm pr-3 text-left">
									Unveil Genci’s website
								</p>
							</div>
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#05BB53]" />
								<p className="pl-3 text-sm pr-3 text-left">
									Private Sale - Phase 1
								</p>
							</div>
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#F4BC2C]" />
								<p className="pl-3 text-sm pr-3 text-left">
									Private Sale - Phase 2
								</p>
							</div>
							<div className="flex justify-center items-center">
								<div className="w-3 h-3 bg-[#F4BC2C]" />
								<p className="px-2 text-sm text-left">
									Social Media Content Strategies
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* q4 */}
				<div className="p-2 border-2 border-[#4D4D4D] border-opacity-25 rounded-full mx-auto w-4/5 sm:w-3/5 lg:w-fit">
					<div className="bg-gradient-to-t from-transparent to-gray-900 rounded-full px-4 py-10">
						<div className="flex justify-center items-center pb-3">
							<Image src={q4} alt="ramdom" width={100} height={100} />
						</div>
						<p className="bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 bg-clip-text text-transparent text-center text-2xl font-bold mb-3">
							2023
						</p>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#F4BC2C]" />
								<p className="pl-3 text-sm pr-3 text-left">
									Commence genci.university project
								</p>
							</div>
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#F4BC2C]" />
								<p className="pl-3 text-sm pr-3 text-left">
									Foster Community Growth
								</p>
							</div>
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#FFF]" />
								<p className="pl-3 text-sm pr-3 text-left">
									Develop Smart Contracts
								</p>
							</div>
							<div className="flex justify-center items-center">
								<div className="w-3 h-3 bg-[#FFF]" />
								<p className="px-2 text-sm text-left">Establish DAO’s.</p>
							</div>
						</div>
					</div>
				</div>
				{/* q1 */}
				<div className="p-2 border-2 border-[#4D4D4D] border-opacity-25 rounded-full mx-auto w-4/5 sm:w-3/5 lg:w-fit">
					<div className="bg-gradient-to-t from-transparent to-gray-900 rounded-full px-4 py-10">
						<div className="flex justify-center items-center pb-3">
							<Image src={q1} alt="ramdom" width={100} height={100} />
						</div>
						<p className="bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 bg-clip-text text-transparent text-center text-2xl font-bold mb-3">
							2023
						</p>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#FFF]" />
								<p className="pl-3 text-sm pr-3 text-left">Expand Community</p>
							</div>
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#FFF]" />
								<p className="pl-3 text-sm pr-3 text-left">
									Conduct Presale (ICO)
								</p>
							</div>
							<div className="flex justify-start items-center">
								<div className="w-3 h-3 bg-[#FFF]" />
								<p className="pl-3 text-sm pr-3 text-left">Launch DEX (IDO)</p>
							</div>
							<div className="flex justify-center items-center">
								<div className="w-3 h-3 bg-[#FFF]" />
								<p className="px-2 text-sm text-left">
									Introduce Exchange through IEO
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
