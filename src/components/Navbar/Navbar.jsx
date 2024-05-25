// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		// mobile view
		<div className="bg-black h-[100px] text-gray-200 max-w-[1200px] mx-auto flex justify-between items-center">
			<h1 className="text-3xl font-bold ml-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
				Shimoni Vyas
			</h1>
			<ul className="hidden md:flex">
				<li className="p-5">
					<a href="#about">About</a>
				</li>
				<li className="p-5">
					<a href="#work">Work</a>
				</li>
				<li className="p-5">
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div onClick={handleNav} className="block md:hidden mr-6">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			{/* web view */}
			<div
				className={
					nav
						? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-300"
						: "fixed left-[-100%]"
				}>
				<h1 className="text-3xl m-4">Shimoni Vyas</h1>
				<ul className="p-8 text-2xl">
					<li className="p-2">
						<a href="#about">About</a>
					</li>
					<li className="p-2">
						<a href="#work">Work</a>
					</li>
					<li className="p-2">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
