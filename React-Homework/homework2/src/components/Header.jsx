import React from 'react';

function Header() {
    return (
    <div className="main_text">
        <h1>Todo List</h1>
        <strong>{3 + ' more to do, ' + 0 + ' done'}</strong>
    </div>
    );
}

export default Header;