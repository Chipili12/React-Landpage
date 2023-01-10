import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"


const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar/>
		<div className="row container mx-auto container">
			<Jumbotron/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
		<Footer/>
		</div>
				);
};

export default Home;
