import React from 'react';

const ScrollBox = (props) => {
    return (
        <div className='container' style={{overflowY: 'scroll', border: '1px solid black', height: '700px'}}>
                 <div className='row'>
                    {props.children}
                 </div>
        </div>
    )
}

export default ScrollBox;