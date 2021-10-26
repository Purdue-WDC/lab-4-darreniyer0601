/* TODO: Remember to import the context hook from the react library */
import React from 'react'
import SignupForm from '../components/SignupForm'

/* TODO: Import the auth context from the file you created */

const Signup = ({ history }) => {
    /* TODO: Create a context variable for the auth context */

    const signupUser = (user) => {
        user.id = Math.random().toString();
        try {
            /* TODO: Register the user using the context variable */
            history.push('/');
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            <SignupForm signup={signupUser} />
        </div>
    )
}

export default Signup
