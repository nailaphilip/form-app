import React from 'react';
import './Preview.css';

const Preview = () => {
    return (
        <div className='preview-container'>
            <div className='notepad'>
                <p>First name:</p>
                <p>Last name:</p>
                <p>Phone:</p>
                <p>Role:</p>
                <p>Message:</p>
            </div>
            <div class="holes hole-top"></div>
            <div class="holes hole-middle"></div>
            <div class="holes hole-bottom"></div>
</div>
    );
};

export default Preview;