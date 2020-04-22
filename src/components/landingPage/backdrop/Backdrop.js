import React from 'react';
import './backDropStyles.css'


const Backdrop = (props) => {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div onClick={props.click} className={cssClasses.join(' ')}></div>;
};

export default Backdrop;