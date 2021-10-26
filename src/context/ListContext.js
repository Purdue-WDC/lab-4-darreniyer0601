import React, { useReducer } from 'react'

const initialState = {
    items: []
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const ListContext = React.createContext(initialState);

const ListReducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                items: [action.payload, ...state.items]
            }
        case REMOVE_ITEM:
            return {
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export const ListContextProvider = (props) => {
    const [state, dispatch] = useReducer(ListReducer, initialState);

    // Add an item
    const addItem = (item) => {
        console.log('item', item);
        dispatch({
            type: ADD_ITEM,
            payload: item
        });
    }

    // Remove an item
    const removeItem = (id) => {
        dispatch({
            type: REMOVE_ITEM,
            payload: id
        })
    }

    // Get logged in user's items
    const getItems = (userId) => {
        return state.items.filter(item => item.userId === userId);
    }

    return (
        <ListContext.Provider value={{
            items: state.items,
            addItem,
            removeItem,
            getItems
        }}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContext
