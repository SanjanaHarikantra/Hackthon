// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	// NavBtnLink,
} from "./navbarElement";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/Home" >
						Home
					</NavLink>
					<NavLink to="/About" activeStyle>
						About
					</NavLink>
					<NavLink to="/Contact" activeStyle>
		             Contact
					</NavLink>
					<NavLink to="/Cart" activeStyle>
						Cart
					</NavLink>
					<NavLink to="/Product" activeStyle>
						Product
					</NavLink>
					
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					{/* <NavBtnLink to="/signin">
					</NavBtnLink> */}
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
