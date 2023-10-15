import ChooseUs from "@/components/ChooseUs";
import Community from "@/components/Community";
import Earth from "@/components/Earth";
import Hero from "@/components/Hero";
import JoinTheMovement from "@/components/JoinTheMovement";
import Nav from "@/components/Nav";
import ReceiveTrasmissions from "@/components/ReceiveTrasmissions";
import Roadmap from "@/components/Roadmap";
import Stats from "@/components/Stats";
import Tokenomics from "@/components/Tokenomics";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center w-screen overflow-hidden">
			<Nav />
			<div className="pt-20 lg:pt-24 flex flex-col gap-10 items-center overflow-hidden">
				<Hero />
				<Stats />
				<ChooseUs />
				<Tokenomics />
				<Roadmap />
				<JoinTheMovement />
				<Community />
				<ReceiveTrasmissions />
				{/* <Earth /> */}
			</div>
		</main>
	);
}
