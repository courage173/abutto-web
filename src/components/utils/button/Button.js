import React from 'react';
import { Link } from 'react-router-dom';
import './buttonStyle.css'



const MyButton = (props) => {

    const buttons = () => {
        let template = '';

        switch (props.type) {
            case "default":
                template = <Link
                    className={!props.altClass ? 'link_default' : props.altClass}
                    style={props.altStyle && props.altStyle}
                    to={props.linkTo}
                    onClick={() => console.log()}

                >
                    {props.font ? props.font : null}
                    {props.title}
                </Link>
                break;
            case "btn":
                template = <div
                    className={!props.altClass ? 'link_default' : props.altClass}
                    style={props.altStyle && props.altStyle}
                    onClick={() => props.runAction()}

                >
                    {props.font ? props.font : null}
                    {props.title}
                </div>
                break;
            default:
                template = '';
        }
        return template
    }


    return (
        <div className="my_link" style={props.sty}>
            {buttons()}
        </div>
    );
};

export default MyButton;