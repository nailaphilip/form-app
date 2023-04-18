import React from 'react';
import './Preview.css';

const Preview = (props) => {
    return (
        <div className='preview-container'>
            <div className='notepad'>
                <p>First name:<span>{props.firstname}</span></p>
                <p>Last name:<span>{props.firstname}</span></p>
                <p>Phone:<span>{props.phone}</span></p>
                <p>Role:<span>{props.role}</span></p>
                <p>Message:<span>{props.message}</span></p>
            </div>
            <div class="holes hole-top"></div>
            <div class="holes hole-middle"></div>
            <div class="holes hole-bottom"></div>
</div>
    );
};

export default Preview;