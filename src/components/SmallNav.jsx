import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const SmallNav = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div>
			<div onClick={handleNav} className="block lg:hidden">
				{nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
			</div>
			<div
				className={`fixed top-20 left-0 w-full bg-transparent backdrop-blur-2xl ${
					nav
						? "h-screen bg-[#1C1C1C] ease-in-out duration-300"
						: "h-0 bg-[#1C1C1C] ease-in-out duration-300"
				} overflow-hidden`}
			>
				{nav && (
					<ul className="uppercase p-4 flex flex-col">
						<Link
							href={"/blog"}
							className="p-4 border-b border-gray-600"
							onClick={() => {
								setNav(false);
							}}
						>
							Learn
						</Link>
						<Link
							href={
								"https://genci.gitbook.io/genci-whitepaper/faqs/genci-frequently-asked-questions"
							}
							className="p-4 border-b border-gray-600"
						>
							FAQ's
						</Link>
						<Link
							href={"/team"}
							className="p-4 border-b border-gray-600"
							onClick={() => {
								setNav(false);
							}}
						>
							Our Team
						</Link>
						<Link
							href={"/blog"}
							className="p-4 border-b border-gray-600"
							onClick={() => {
								setNav(false);
							}}
						>
							Visit the University
						</Link>
					</ul>
				)}
			</div>
		</div>
	);
};
export default SmallNav;
