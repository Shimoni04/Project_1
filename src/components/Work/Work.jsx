/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/proj4.png";
import proj5 from "../../assets/proj5.png";
import proj6 from "../../assets/proj6.png";

const Work = () => {
	return (
		<div className="max-w-[1200px] mx-auto p-5" id="work">
			<div className="pb-8">
				<p className="text-4xl mb-3 font-bold primary-color">Work</p>
				<p className="text-gray-300">Some of my recent works</p>
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
				{/* Project card 1 */}
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg sahdow-[#040c16] group rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative">
					<img src={proj1} objectFill="cover" />
					{/* Hover effect on cards */}
					<div className="opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Project
						</span>
						<div className="pt-8 text-center">
							<a href="#">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>
				{/* End of project card 1 */}
				{/* Project card 2 */}
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg sahdow-[#040c16] group rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative">
					<img src={proj2} objectFill="cover" />
					{/* Hover effect on cards */}
					<div className="opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Project
						</span>
						<div className="pt-8 text-center">
							<a href="#">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>
				{/* End of project card 2 */}
				{/* Project card 3 */}
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg sahdow-[#040c16] group rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative">
					<img src={proj3} objectFill="cover" />
					{/* Hover effect on cards */}
					<div className="opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Project
						</span>
						<div className="pt-8 text-center">
							<a href="#">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>
				{/* End of project card 3 */}
				{/* Project card 4 */}
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg sahdow-[#040c16] group rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative">
					<img src={proj4} objectFill="cover" />
					{/* Hover effect on cards */}
					<div className="opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Project
						</span>
						<div className="pt-8 text-center">
							<a href="#">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>
				{/* End of project card 4 */}
				{/* Project card 5 */}
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg sahdow-[#040c16] group rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative">
					<img src={proj5} objectFill="cover" />
					{/* Hover effect on cards */}
					<div className="opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Project
						</span>
						<div className="pt-8 text-center">
							<a href="#">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>
				{/* End of project card 5 */}
				{/* Project card 6 */}
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg sahdow-[#040c16] group rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative">
					<img src={proj6} objectFill="cover" />
					{/* Hover effect on cards */}
					<div className="opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Project
						</span>
						<div className="pt-8 text-center">
							<a href="#">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>
				{/* End of project card 6 */}
			</div>
		</div>
	);
};

export default Work;
