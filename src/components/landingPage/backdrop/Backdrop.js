import React from 'react';
import './backDropStyles.css'


const Backdrop = (props) => {
    //array to hold the classes and a check for openening or removing the backdrop
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div onClick={props.click} className={cssClasses.join(' ')}></div>;
};

export default Backdrop;