/* TODO: Remember to import any required hooks from the react library */
import React from 'react'

// List context object
// items:   list of todo items
const initialState = {
    items: []
};

// Dispatch types (for the reducer function)
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

/* TODO: create a list context object, using the initial state provided */

/* TODO: set up a reducer function to deal with the different list actions */


/* TODO: Export a provider which will maintain state and 
    handle dispatching requests */

    /* TODO: Set up list context state using the useReducer hook */


    // TODO
    // @func    addItem()
    // @params  item  -  the todo item to add to the list
    // @desc    adds the given item to the list in the state
    // @access  Private

    /*
        Simply call the dispatch() method with the type as ADD_ITEM
        and the payload as the item passed in the argument
    */

    // TODO
    // @func    removeItem()
    // @params  id - the id of the todo list item to remove
    // @desc    removes the specified item from the list in the state

    /*
        Simply call the dispatch() method with the type as REMOVE_ITEM
        and the payload as the id passed in the argument
    */

    // TODO
    // @func    getItems()
    // @params  userId - the id of the user that is logged in
    // @desc    gets the logged in user's todo items
    // @return  [] containing the items belonging to the logged in user
    // @access  Private

    /*
        There are 2 ways you can do this:
            (i)     Option 1 (more code)
                - initialize an empty list
                - iterate through the items[] list
                - if the user id matches the one passed in the argument, add it 
                    to the empty list
                - return the list
            (ii)    Option 2 (literally one line of code)
                - Look up the filter() function: 
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    */


    // TODO
    // @return  provider component with the state values and the functions 
    // (remember to wrap props.children within the provider)

/* TODO: export the default context object */