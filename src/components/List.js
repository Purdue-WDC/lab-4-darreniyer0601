import React from 'react'
import ListItem from './ListItem'

import "bootstrap/dist/css/bootstrap.min.css";

const List = (props) => {
    return (
        <div className="d-flex flex-column justify-content-center">
            {props.list.map(listItem => (
                <ListItem item={listItem} />
            ))}
        </div>
    )
}

export default List
