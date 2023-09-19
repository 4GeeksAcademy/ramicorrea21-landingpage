import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import CardContainer from "./CardContainer";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<CardContainer/>
		<Footer/>
		</>
	);
};

export default Home;