import React from 'react';
import './Modal.css';

const Model = (props) => {
    return (
        <div className='model-container'>
            <div className='model-text'>
                <h2>This is your note:</h2>
                <p>First name:<span>{props.firstname}</span></p>
                <p>Last name:<span>{props.firstname}</span></p>
                <p>Phone:<span>{props.phone}</span></p>
                <p>Role:<span>{props.role}</span></p>
                <p>Message:<span>{props.message}</span></p>
        </div>
        <button>Yes, I am sure</button>
        <button>No</button>
        </div>
    );
};

export default Model;