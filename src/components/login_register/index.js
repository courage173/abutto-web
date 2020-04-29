import React from 'react'
import Login from './login/Login'
import './register-login.css'

const Register_login = () => {
    return (
        <div className='form_wrapper'>
            <div className='left'>
                <div className='abuto-logo'>
                    Abutto
            </div>

            </div>
            <div className='right'>
                <Login />
            </div>
        </div>

    )
}

export default Register_login
