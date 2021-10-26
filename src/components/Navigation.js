/* TODO: Remember to import any required hooks from the react library */
import React from "react";
import { NavLink } from "react-router-dom";

/* TODO: Import the auth context from the file you created */

import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
	/* TODO: Create a context variable for the auth context */

	const handleLogout = () => {
		/* TODO: use the logout function from the auth context to log the user out */
	};

	// You can use this jsx for the logout button
	// You may style it as you want
	const logoutButton = (
		<li className="float-right">
			<button className="btn btn-ligt" onClick={handleLogout}>
				Logout
			</button>
		</li>
	);

	// You can use this jsx for the login and register links
	// You may change the styling if you want
	const authLinks = (
		<>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/login">
					Login
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/register">
					Register
				</NavLink>
			</li>
		</>
	);

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand m-2" href="/">
					Todo List
				</a>
				<ul className="navbar-nav position-absolute end-0 m-2">
					{/* TODO: Use the authenticated variable from the auth context
					to check if a user is authenticated. If so, display the logout
					button; if not, display the login and register buttons */}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
