// eslint-disable-next-line no-unused-vars
import React from "react";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";

const Skills = () => {
	return (
		<div className=" border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
			<h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
				My <br />
				Tech <br />
				Stack
			</h2>
			{/* Tech Stack */}
			{/* Tailwind */}
			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={tailwind} alt="" />
				<p className="mt2">Tailwind</p>
			</div>
			{/* html */}
			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={html} alt="" width={100} height={100} />
				<p className="mt2">HTML</p>
			</div>
			{/* CSS */}
			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={css} alt="" width={100} height={100} />
				<p className="mt2">CSS</p>
			</div>
			{/* Javascript */}
			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={javascript} alt="" width={100} height={100} />
				<p className="mt2">Javascript</p>
			</div>
			{/* React */}
			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={react} alt="" width={100} height={100} />
				<p className="mt2">React</p>
			</div>
		</div>
	);
};

export default Skills;
