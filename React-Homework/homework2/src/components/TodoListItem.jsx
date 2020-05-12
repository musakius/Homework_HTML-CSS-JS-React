import React from 'react';

function TodoListItem({todo}) {
    return (
        <li>
            <p>{todo}</p>
            <button className="removeItem">
                <i className="far fa-trash-alt"></i>
            </button>
            <button className="detailsItem">
                <i className="fas fa-info"></i>
            </button>
        </li>
    );
}

export default TodoListItem;