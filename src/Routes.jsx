import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./component/Navbar";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Contact } from "./contact/Contact";

const Router = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
                    exact="true"
					element={<Home />}
				/>
                <Route
					path="/about"
					element={<About />}
				/>
                <Route
					path="/portfolio"
					element={<Portfolio />}
				/>
                <Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
            <Navbar />
		</>
	);
};

export default Router;
