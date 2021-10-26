import React, { useReducer } from 'react';

const initialState = {
    users: [],
    user: null,
    authenticated: false
}

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';

const AuthContext = React.createContext(initialState);

const AuthReducer = (state, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                authenticated: false
            }
        case REGISTER:
            return {
                ...state,
                users: [action.payload, ...state.users],
                user: action.payload,
                authenticated: true
            }
        default: return state;
    }
}

export const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Login user
    const login = (user) => {
        // Check if user exists and has correct credentials
        let userExists = false;
        let loggedInUser = null;
        state.users.forEach(cur_user => {
            if (cur_user.email === user.email) {
                userExists = true;
                loggedInUser = cur_user;
            }
        })

        if (!userExists) {
            throw new Error('User does not exist');
        }

        if (loggedInUser.password !== user.password) {
            throw new Error('Passwords do not match');
        }

        dispatch({
            type: LOGIN,
            payload: loggedInUser
        });
    }

    // Logout user
    const logout = () => {
        // Dispatch logout request to reducer
        dispatch({
            type: LOGOUT
        });
    }

    // Register user
    const register = (user) => {
        // Check if user already exists
        let userExists = false;
        state.users.forEach(cur_user => {
            if (cur_user.email === user.email) {
                userExists = true;
            }
        })

        if (userExists) {
            throw new Error('User already exists');
        }

        // Dispatch register request to reducer
        dispatch({
            type: REGISTER,
            payload: user
        });
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
            authenticated: state.authenticated,
            login,
            logout,
            register
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
