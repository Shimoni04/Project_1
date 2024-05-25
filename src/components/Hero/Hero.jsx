// eslint-disable-next-line no-unused-vars
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "../../assets/services1.jpeg";

const Hero = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
			<div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
				<img src={HeroImage} alt="" />
			</div>

			<div className="col-span-2 px-5 my-auto">
				<h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
					<span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
						I`m a
					</span>{" "}
					<br />
					<TypeAnimation
						sequence={[
							"Web Designer",
							1000,
							"UI/UX Designer",
							1000,
							"Web Developer",
							1000,
						]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
					/>
				</h1>
				<p className="text-white sm:text-lg my-6 lg:text-xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sequi
					excepturi ipsam aspernatur quasi doloribus aperiam laudantium quo.
				</p>
				<div className="my-8">
					<button className="px-6 py-3 w-[10rem] mr-4 rounded-xl bg-gradient-to-r from-pink-600 to-orange-400 font-semibold text-white">
						Download CV
					</button>
					<button className="px-6 py-3 w-[10rem] mr-4 rounded-xl text-white border border-gray-400 hover:bg-gradient-to-r from-pink-600 to-orange-400 hover:border-none">
						Contact Me
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
