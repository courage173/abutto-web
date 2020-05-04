import React from 'react';
import { Link } from 'react-router-dom';
import './buttonStyle.css'



const MyButton = (props) => {
    const { sty, altStyle, font,
        linkTo, altClass,
        mobileStyle, styleToApply } = props
    const styles = ['my_link', mobileStyle ? styleToApply : ' ']
    const buttons = () => {
        let template = '';
        switch (props.type) {
            case "default":
                template = <Link
                    className={!altClass ? 'link_default' : altClass}
                    style={altStyle && altStyle}
                    to={linkTo}
                    onClick={() => console.log()}

                >
                    {font ? font : null}
                    {props.title}
                </Link>
                break;
            case "btn":
                template = <div
                    className={!altClass ? 'link_default' : altClass}
                    style={altStyle && altStyle}
                    onClick={() => props.runAction()}

                >
                    {font ? font : null}
                    {props.title}
                </div>
                break;
            default:
                template = '';
        }
        return template
    }


    return (
        <div className={styles.join(' ')} style={sty}>
            {buttons()}
        </div>
    );
};

export default MyButton;