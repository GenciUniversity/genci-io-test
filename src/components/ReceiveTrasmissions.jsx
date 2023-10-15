import React, { useState } from "react";
import genciReciveTransmissionLogo from "@/assets/GenciTransmission.svg";
import { HiMailOpen } from "react-icons/hi";
import logo from "@/assets/logo-gradient.svg";
import Image from "next/image";

const ReceiveTrasmissions = () => {
	const [email, setEmail] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const subscribeToNewsletter = async () => {
		const data = { email };

		try {
			const response = await fetch("https://genci-io.onrender.com/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				console.log("Successfully subscribed to the newsletter!");
				// Handle successful subscription (e.g., show a success message)
			} else {
				console.error("Failed to subscribe to the newsletter");
				// Handle subscription failure (e.g., show an error message)
			}
		} catch (error) {
			console.error("An error occurred while subscribing:", error);
		}
	};

	return (
    <div className="bg-cover w-full justify-center items-center flex flex-col min-h-[50vh] lg:min-h-[60vh]">
      <div
        className="bg-[#081021] w-[90%] lg:w-4/5 rounded-lg border border-[#3F37C9] min-h-[40vh] flex justify-center lg:justify-between items-center px-5 lg:px-20"
        style={{
          background: 'url("https://i.imgur.com/ZuwQGfv.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="space-y-7">
          <div className="ml-2 space-y-3">
            <div className="font-bold text-4xl md:text-5xl">
              Receive transmissions
            </div>
            <p className="text-lg md:text-xl opacity-70">
              Unsubscribe at any time. Privacy policy
            </p>
          </div>
          <div className="flex bg-[#111B37] rounded-full">
            <span className="inset-y-0 left-0 flex items-center pl-6">
              <HiMailOpen size={20} />
            </span>
            <input
              className="py-4 text-lg md:text-xl font-medium bg-[#111B37] pl-2 lg:pl-4 focus:outline-none w-full rounded-md"
              autoComplete="off"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="relative inline-flex items-center justify-center py-3  md:p-5 w-[200px]  lg:w-[250px] overflow-hidden font-medium hover:scale-105 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 mx-auto lg:mx-0"
              onClick={subscribeToNewsletter}
            >
              <span className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgb(63,55,201)_0%,rgb(72,149,239)_100%,rgb(72,149,239)_100%)]"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-cyan-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white text-sm md:text-base font-semibold uppercase tracking-widest">
                Subscribe
              </span>
            </button>
          </div>
        </div>
        <Image src={logo} alt="logo" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default ReceiveTrasmissions;
