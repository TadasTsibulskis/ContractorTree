import React from 'react';

export default function Button ({ action, buttonText }) {
    return (
        <button onClick={action} className="nav-item">{buttonText}</button>
    );
}
