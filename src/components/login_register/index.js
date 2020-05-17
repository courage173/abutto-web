import React from 'react';
import { Link } from 'react-router-dom';
import './register-login.css';


const RegisterLogin = (props) => {
    return (
        <div className='form_wrapper'>
            <div className='left'>
                <div className='abuto-logo'>
                    <Link to='/' style={{ color: 'rgba(55, 80, 178, 0.7)' }}>Abutto</Link>
                </div>

            </div>
            <div className='right'>
                {props.children}
            </div>
        </div>

    )
}

export default RegisterLogin
