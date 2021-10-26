/* TODO: Remember to import any required hooks from the react library */
import React from "react";
import List from "../components/List";

/* TODO: Import the auth and list context from their respective files */

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
	/* TODO: Create context variables for both auth and list contexts */

	/* TODO: Set up a state for the content of the todo item which 
		 is entered by the user */

	/* TODO: Set up a state for the todo list variable that is passed
		to the list component */

	// TODO
	/* If the user is not authenticated, you should redirect
	 	them to the login page. To do this, you can use an effect
	 	to check when the authentication changes */
	/* If the user is authenticated, get the user's items by 
		using the list context and passing the user's id to filter
		out their items */
	// Redirection: to redirect the user to a url, use < props.history.push(url) >

	/* TODO: Set up a function to change the state for the content */

	const handleSubmit = (e) => {
		e.preventDefault();

		// TODO
		/* Create a todo item object, attaching the user's id
			to it (which you can get from the auth context) */
		// (Use Math.random().toString() to generate a random item id)

		/* TODO: use the list context to add the item */
	};

	return (
		<div>
			<form className="m-3" onSubmit={handleSubmit}>
				<input
					className="form-control inline m-2"
					type="text"
					placeholder="Enter a todo item"
					required
				/>
				<button className="btn btn-light">ADD</button>
			</form>
			<List list={/* TODO: pass in the todo list variable you created */} />
		</div>
	);
};

export default Home;
