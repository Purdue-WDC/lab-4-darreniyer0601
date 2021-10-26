import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
	const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand m-2" href="/">
					Todo List
				</a>
				<ul className="navbar-nav position-absolute end-0 m-2">
					{authenticated ? (
						<li className="float-right">
							<button className="btn btn-ligt" onClick={handleLogout}>Logout</button>
						</li>
					) : (
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
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
