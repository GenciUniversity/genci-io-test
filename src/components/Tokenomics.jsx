import React, { useState } from "react";
import Image from "next/image";
import Ecosystem from "@/assets/ecosystem.svg";
import CoreTeam from "@/assets/coreteam.svg";
import PublicSale from "@/assets/publicsale.svg";
import Treasury from "@/assets/treasury.svg";
import Community from "@/assets/community.svg";
import PrivateSale from "@/assets/privatesale.svg";
import Liquidity from "@/assets/liquidity.svg";
import Legal from "@/assets/legal.svg";
import CEX from "@/assets/cex.svg";

const Tokenomics = () => {
	const [selectedId, setSelectedId] = useState(0); // Default to Ecosystem

	const BreakdownData = [
		{
			id: 0,
			label: "Ecosystem",
			percentage: 43,
			para: "With the introduction of our dedicated ecosystem tokens, we unlock a world of possibilities that revolutionize the student experience. Students will have the opportunity to retain a significant portion of their course fees by staking their tokens, thereby providing us with the necessary liquidity. As a reward for their commitment, these tokens will be gradually released as a well-deserved coronation for their accomplishments upon successfully completing their courses.",
		},
		{
			id: 1,
			label: "Core Team",
			percentage: 10,
			para: "This portion of tokens is vested, with 10% released after 2 years from the token launch, followed by a monthly release of 7.5% thereafter. This incentivizes the core team's long-term commitment and aligns their interests with the project's success.",
		},
		{
			id: 2,
			label: "Public Sale",
			percentage: 10,
			para: "This segment of tokens is released with 10% available on the day of launch, followed by subsequent monthly releases of 7.5%. These tokens are allocated to participants in the public sale, enabling wider access and distribution.",
		},
		{
			id: 3,
			label: "Treasury",
			percentage: 10,
			para: "Tokens from this allocation are disbursed as and when required, subject to the vote of the community, committee, and students. The treasury serves as a reserve to support various operational needs and strategic initiatives.",
		},
		{
			id: 4,
			label: "Community",
			percentage: 10,
			para: "This allocation is dedicated to fostering community growth and development, with a monthly release of 2.75% tokens. These tokens empower community members and encourage active engagement and participation.",
		},
		{
			id: 5,
			label: "Private Sale",
			percentage: 5,
			para: "Reserved exclusively for private investors, this allocation ensures strategic partnerships and necessary capital influx for the university's growth.",
		},
		{
			id: 6,
			label: "Liquidity",
			percentage: 4,
			para: "Tokens from this pool are utilized as needed to provide liquidity when the token is launched on decentralized exchange (DEX) platforms, facilitating smooth trading and market access.",
		},
		{
			id: 7,
			label: "Legal",
			percentage: 4,
			para: "Tokens from this allocation are released as required for legal purposes, such as obtaining necessary licenses and facilitating compliance-related activities associated with the establishment and operation of the university.",
		},
		{
			id: 8,
			label: "CEX",
			percentage: 4,
			para: "Allocated for liquidity provision on centralized exchanges (CEX), these tokens support trading activities upon listing on such platforms.",
		},
	];

	const handleTokenHover = (id) => {
		setSelectedId(id);
	};

	const svgMap = {
		0: Ecosystem,
		1: CoreTeam,
		2: PublicSale,
		3: Treasury,
		4: Community,
		5: PrivateSale,
		6: Liquidity,
		7: Legal,
		8: CEX,
	};

	return (
		<div className="lg:w-[90%] h-full flex flex-col mb-5">
			{/* heading */}
			<div className="flex">
				<h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left w-full">
					Tokenomics
				</h1>
			</div>
			{/* main content */}
			<div className="flex flex-col lg:flex-row pt-5">
				{/* pie-chart */}
				<div className="flex flex-col justify-start items-center flex-1">
					<div className="mt-8 flex flex-col justify-start items-center">
						<Image
							src={svgMap[selectedId]}
							alt="Token"
							className="mb-10 bg-transparent"
						/>
						<p className="text-base text-center lg:text-left p-6">
							{BreakdownData[selectedId].para}
						</p>
					</div>
				</div>
				{/* list of token */}
				<div className="flex flex-col flex-grow">
					{BreakdownData.map((data) => (
						<div
							key={data.id}
							className={`flex mx-10 justify-between border-b-2 border-[#797A7E] border-opacity-25 ${
								selectedId === data.id ? "scale-105" : ""
							} transition-all duration-300 cursor-pointer`}
							onMouseEnter={() => handleTokenHover(data.id)}
						>
							<p className="p-3 lg:p-4 text-lg lg:text-2xl font-bold">
								{data.label}
							</p>
							<p className="p-3 lg:p-4 text-lg lg:text-xl font-medium">
								{data.percentage}%
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
