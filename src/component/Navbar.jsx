import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div
			style={{
				position: "fixed",
				zIndex: 9999999,
				bottom: "30px", // Place the navbar at the bottom
				width: "100%", // Full width
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<nav className="animate-nav">
				<ul
					style={{
						listStyle: "none",
						padding: 0,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<li>
						<NavLink
							to="/"
							style={{ textDecoration: "none", color: "white", padding: '5px' }}
							exact
                            className="animate-opacity"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							style={{ textDecoration: "none", color: "white", padding: '5px' }}
							exact
                            className="animate-opacity"
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/portfolio"
							style={{ textDecoration: "none", color: "white", padding: '5px' }}
							exact
                            className="animate-opacity"
						>
							Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							style={{ textDecoration: "none", color: "white", padding: '5px' }}
							exact
                            className="animate-opacity"
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
