import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEye, faKey, } from '@fortawesome/free-solid-svg-icons'
import { update, generateData, isFormValid } from '../../utils/form/formActions'
import FormField from '../../utils/form/formfield';
import './loginStyle.css';
import google from '../../../assets/super-g.svg';
import facebook from '../../../assets/fb_logo.svg';
import MyButton from '../../utils/button/Button'



class Login extends Component {

    state = {
        formError: false,
        formSuccess: false,
        isFocus: false,
        formdata: {
            email: {
                element: 'fieldset',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'fieldset',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },

        },

    }

    updateForm = (element) => {
        if (element.blur) {
            this.setState({ isFocus: false })
        }
        const newFormdata = update(element, this.state.formdata, 'login');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }
    focus = () => {
        this.setState({ isFocus: true })
    }

    render() {
        return (
            <Fragment>
                <div className='welcome_wrapper'>
                    <h4>Welcome back,</h4>
                    <p>Sign in to continue</p>
                </div>
                <div className='form_container'>
                    <form className='form' onSubmit={(event) => this.submitForm(event)}>
                        <div className="block">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.updateForm(element)}
                                legend='username'
                                fontIcon={<FontAwesomeIcon icon={faUser} style={{ margin: '0 10px 0 5px', color: '#3750B2' }} />}
                                useStyle={false}
                                st={{ border: '2px solid #3750B2' }}
                                setFocus={this.focus}
                                isFocus={this.state.isFocus}
                            />
                        </div>
                        <div className="block">
                            <FormField
                                id={'password'}
                                formdata={this.state.formdata.password}
                                change={(element) => this.updateForm(element)}
                                legend='password'
                                fontIcon={<FontAwesomeIcon icon={faKey} style={{ color: '#3750B2' }} />}
                                fontIcon2={<FontAwesomeIcon icon={faEye} style={{ color: '#DADADA', cursor: 'pointer' }} />}
                                setFocus={this.focus}
                                isFocus={this.state.isFocus}
                                st={{ border: '2px solid #3750B2' }}

                                useStyle={true}
                            />
                            <div className='check_wrapper'>
                                <div>
                                    <input id='checkbox' type='checkbox' style={{ display: ' contents' }} />
                                    <label htmlFor='checkbox' style={{ color: 'rgba(0, 0, 0, 0.8)' }}>Remeber me</label>
                                </div>
                                <p style={{ margin: '0', cursor: 'pointer' }}>forgot password?</p>
                            </div>
                        </div>
                        <div className="block" style={{ marginTop: '30px' }}>
                            <MyButton
                                type='default'
                                title='Log in'
                                linkTo='/dashboard'
                            />
                        </div>
                    </form>
                    <div className='option_signin'>
                        <p style={{ margin: '0' }}>or</p>
                        <p style={{ margin: '0', cursor: 'pointer' }}>Sign in with</p>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <MyButton
                            type='default'
                            title='continue with facebook'
                            font={<img style={{ marginRight: '2px' }} src={facebook} alt='google' />}
                            linkTo='/facebook'
                        />
                    </div>
                    <div style={{ marginTop: '15px', width: '220px' }}>
                        <MyButton
                            type='default'
                            title='Google Play'
                            altStyle={{ color: '#3750B2' }}
                            sty={{ background: 'none', border: 'none' }}
                            font={<img style={{ marginRight: '2px' }} src={google} alt='google' />}
                            linkTo='/google'
                        />
                    </div>
                    <div className='account_wrapper'>
                        <p style={{ margin: '0' }}>Don't have an account? <span style={{ cursor: 'pointer' }}>Create Account</span></p>
                        <p style={{ margin: '0' }}>Trouble Signing In? <span style={{ cursor: 'pointer' }}>Contact Support</span></p>
                    </div>
                </div>
            </Fragment>


        )
    }
}

export default Login
