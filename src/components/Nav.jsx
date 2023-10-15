import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import SmallNav from "./SmallNav";
import { useRouter } from "next/router";
const Nav = () => {
	const router = useRouter();
	return (
		<header className="w-full h-20 px-3 flex items-center justify-between fixed top-0 backdrop-blur-md z-50 text-lg font-medium pr-5">
			<figure
				className="p-3 w-[120px] sm:w=[140px] lg:w-fit lg:h-[80px] cursor-pointer"
				onClick={() => {
					router.push("/");
				}}
			>
				<Image src={logo} alt="logo" className="h-full" />
			</figure>
			<SmallNav />
			<nav className="hidden lg:flex justify-between w-1/3 ">
				<Link href={"/blog"} className={styles.underline}>
					Learn
				</Link>
				<Link
					target="_blank"
					href={
						"https://genci.gitbook.io/genci-whitepaper/faqs/genci-frequently-asked-questions"
					}
					className={styles.underline}
				>
					FAQs
				</Link>
				<Link href={"/team"} className={styles.underline}>
					Our Team
				</Link>
			</nav>
			<Link
				className={`${styles.underline} font-semibold cursor-pointer hidden lg:block`}
			>
				Visit the University {">"}&nbsp;
			</Link>
		</header>
	);
};

export default Nav;
