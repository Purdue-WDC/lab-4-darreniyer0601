import React, { useContext } from 'react'
import SignupForm from '../components/SignupForm'
import AuthContext from '../context/AuthContext';

const Signup = ({ history }) => {
    const authContext = useContext(AuthContext);

    const signupUser = (user) => {
        user.id = Math.random().toString();
        // Register the user through context
        try {
            authContext.register(user);
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
