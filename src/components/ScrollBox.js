import React from 'react';

const ScrollBox = (props) => {
    return (
        <div className='row'>
            {props.children}
        </div>
    )
}

export default ScrollBox;