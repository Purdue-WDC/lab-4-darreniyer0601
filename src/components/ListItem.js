/* TODO: Remember to import any required hooks from the react library */
import React from "react";

/* TODO: Import the list context from the context file */

import "bootstrap/dist/css/bootstrap.min.css";

const ListItem = ({ item }) => {
	const { id, content } = item;

	/* TODO: Create a context variable for the list context */

	const handleDelete = () => {
		/* TODO: Use the list context's remove item function 
		 to remove the list item by passing in the id */
	};

	return (
		<div className="card m-3" id={id}>
			<div class="card-body d-flex justify-content-between align-items-center">
				<p>{content}</p>
				<button className="btn btn-light" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ListItem;
