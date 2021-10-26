import React, { useState, useContext, useEffect } from "react";
import List from "../components/List";
import AuthContext from "../context/AuthContext";
import ListContext from "../context/ListContext";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ history }) => {
	const authContext = useContext(AuthContext);
	const listContext = useContext(ListContext);

	const [content, setContent] = useState("");
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		if (!authContext.authenticated) {
			history.push("/login");
		} else {
			setTodoList(listContext.getItems(authContext.user.id));
		}
	}, [history, authContext, listContext]);

	const handleChange = (e) => {
		setContent(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const todoItem = {
			content: content,
			id: Math.random().toString(),
			userId: authContext.user.id,
		};

		listContext.addItem(todoItem);
		setContent("");
	};

	return (
		<div>
			<form className="m-3" onSubmit={handleSubmit}>
				<input
					value={content}
					onChange={handleChange}
					className="form-control inline m-2"
					type="text"
					placeholder="Enter a todo item"
					required
				/>
				<button className="btn btn-light">ADD</button>
			</form>
			<List list={todoList} />
		</div>
	);
};

export default Home;
