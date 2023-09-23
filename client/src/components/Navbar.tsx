import React from "react";
import { openMenu } from "./../models/Animator";

const Navbar = ({ }) => {
	return <nav>
		<img src="/assets/logo_colored.png" alt="" className="logo" />
		<img src="/assets/header.png" alt="" className="name" />
		<div className="menu-toggle" onClick={()=>{
			openMenu();
		}}>
			<i className="material-icons">menu</i>
		</div>
	</nav>;
}

export default Navbar;