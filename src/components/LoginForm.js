/* TODO: Remember to import any required hooks from the react library */
import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = (props) => {
	/* TODO: Set up state for the form data using useState */

	/* TODO: Set up a function (or multiple functions) to 
		change the state for the form data */

    const handleSubmit = (e) => {
        e.preventDefault();

		// TODO
		// Create a user object if you have used 
		// multiple states
		// If you have a single user object set up,
		// you can directly pass that into the function
        props.login(/* user object */);
    }

    return (
        <form onSubmit={handleSubmit}>
			<div className="form-group m-3">
				<label>Email</label>
				<input
					name="email"
					type="email"
					className="form-control"
                    required
					/* TODO: Remember to connect an input event to an event handler */ 
				/>
			</div>
			<div className="form-group m-3">
				<label>Password</label>
				<input
					name="password"
					type="text"
					className="form-control"
                    required
					/* TODO: Remember to connect an input event to an event handler */
				/>
			</div>
			<button type="submit" className="btn btn-dark">
				Login
			</button>
		</form>
    )
}

export default LoginForm
