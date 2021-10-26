import React, { useContext } from "react";
import ListContext from "../context/ListContext";

import "bootstrap/dist/css/bootstrap.min.css";

const ListItem = (props) => {
	const { id, content } = props.item;
	const { removeItem } = useContext(ListContext);

	const handleDelete = () => {
		removeItem(id);
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
