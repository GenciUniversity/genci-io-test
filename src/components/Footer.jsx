import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import { BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<footer
			className="w-screen overflow-x-hidden bg-[#081021] px-8"
			style={{
				background:
					'url("https://genci-io-content.s3.ap-south-1.amazonaws.com/footer-bg.png")',
				backgroundSize: "cover",
			}}
		>
			<div className="mx-auto max-w-[1350px] py-6">
				<div className="grid grid-cols-2 md:grid-cols-12 gap-8">
					<div className="col-span-3 gap-4">
						<div className=" text-xl font-bold flex justify-start">
							{" "}
							<Image
								src={logo}
								alt="logo"
								className="h-10 w-20 object-contain"
							/>
						</div>
						<p className="mt-4 text-sm text-[#a5a6a9]">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
							cupiditate quae nam molestias.
						</p>
						<p className="mt-6  font-bold">Explore</p>
						<ul className=" mt-2 flex gap-6">
							<li>
								<a
									href="https://genci.io/"
									target="_blank"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									<span className="sr-only">Google</span>

									<div className="p-2 bg-[#202429]  rounded-full">
										<BsGoogle size={20} />
									</div>
								</a>
							</li>

							<li>
								<a
									href="https://www.instagram.com/genci_official/?utm_source=qr&igshid=YzU1NGVlODEzOA%3D%3D"
									target="_blank"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									<span className="sr-only">Instagram</span>

									<div className="p-2 bg-[#202429]  rounded-full">
										<BsInstagram size={20} />
									</div>
								</a>
							</li>

							<li>
								<a
									href="https://twitter.com/GenciOfficial"
									target="_blank"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									<span className="sr-only">Twitter</span>

									<div className="p-2 bg-[#202429]  rounded-full">
										<BsTwitter size={20} />
									</div>
								</a>
							</li>

							<li>
								<a
									href="https://www.linkedin.com/company/genciedu/"
									target="_blank"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									<span className="sr-only">LinkedIn</span>

									<div className="p-2 bg-[#202429]  rounded-full">
										<BsLinkedin size={20} />
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div className="hidden md:block col-end-7 md:col-span-3"></div>

					<div className="col-span-3 md:col-span-2">
						<p className="font-semibold text-xl">Learn</p>

						<ul className="mt-6 space-y-4 text-sm">
							<li>
								<a
									href="#"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									About us
								</a>
							</li>

							<li>
								<a
									href="#"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									Company Support
								</a>
							</li>

							<li>
								<a
									href="#"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									Case Studies
								</a>
							</li>

							<li>
								<a
									href="#"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									Research & Development
								</a>
							</li>
						</ul>
					</div>

					<div className="col-span-3 md:col-span-2">
						<p className="font-semibold text-xl">Privacy Policy</p>

						<ul className="mt-6 space-y-4 text-sm">
							<li>
								<a
									href="#"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									Community
								</a>
							</li>

							<li>
								<a
									href="#"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									Policy
								</a>
							</li>
						</ul>
					</div>

					<div className="col-span-3 md:col-span-2">
						<p className="font-semibold text-xl">Contact Us </p>

						<ul className="mt-6 space-y-4 text-sm">
							<li>
								<a
									href="tel:+919494315111"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									+91 9494315111
								</a>
							</li>

							<li>
								<a
									href="mailto:info@genci.io"
									className=" transition hover:opacity-75 text-[#a5a6a9]"
								>
									info@genci.io
								</a>
							</li>
						</ul>
					</div>
				</div>

				<p className="text-sm border-t-[0.7px] pt-4 mt-4 border-[#80bfff] text-center text-[#a5a6a9]">
					Copyright&copy;genci.All right reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
