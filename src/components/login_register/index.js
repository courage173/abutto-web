import React from 'react'
import './register-login.css';

const Register_login = (props) => {
    return (
        <div className='form_wrapper'>
            <div className='left'>
                <div className='abuto-logo'>
                    Abutto
            </div>

            </div>
            <div className='right'>
                {props.children}
            </div>
        </div>

    )
}

export default Register_login
