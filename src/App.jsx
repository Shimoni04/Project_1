// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";
import About from "./components/About/About.jsx";
import Work from "./components/Work/Work.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<About />
			<Work />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
