import "./App.css";
import { Switch, Route } from "react-router";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* TODO: Import the auth and list context providers from their respective files */

function App() {
	return (
		<div className="App">
			{/* TODO: Wrap the following jsx in the providers */}
			<Navigation />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Signup} />
			</Switch>
		</div>
	);
}

export default App;
