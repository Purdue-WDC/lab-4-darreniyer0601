// Remember to import any required hooks from the react library
import React from 'react'
import LoginForm from '../components/LoginForm'

/* TODO: Import the auth context from the file you created */

const Login = ({ history }) => {
    /* TODO: Create a context variable for the auth context */

    const loginUser = (user) => {
        try {
            /* TODO: Log the user in using the context variable */
            history.push('/');
        } catch (err) {
            alert(err.message);
        }
        
    }

    return (
        <div>
            <LoginForm login={loginUser} />
        </div>
    )
}

export default Login
