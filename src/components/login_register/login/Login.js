import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEye, faKey, } from '@fortawesome/free-solid-svg-icons'
import { update } from '../../utils/form/formActions'
import FormField from '../../utils/form/formfield';
import './loginStyle.css';
import google from '../../../assets/super-g.svg';
import facebook from '../../../assets/fb_logo.svg';
import MyButton from '../../utils/button/Button'

import { signInWithFacebook } from '../../../redux/actions/authAction'



class Login extends Component {

    state = {
        formError: false,
        formSuccess: false,
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

    fbLogin = () => {
        this.props.signInWithFacebook().then(res => {
            console.log(res)
            return this.props.history.push('/profile')
        })
    }

    updateForm = (element) => {
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
                                inPutStyle={{ background: 'rgb(232, 245, 255)', boxShadow: 'rgb(232, 245, 255) 0px 0px 0px 9999px inset' }}
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
                                useStyle={true}
                                inPutStyle={{ background: 'rgb(232, 245, 255)', boxShadow: 'rgb(232, 245, 255) 0px 0px 0px 9999px inset' }}
                            />
                            <div className='check_wrapper'>
                                <div className='login'>
                                    <input id='checkbox' type='checkbox' style={{ display: ' contents' }} />
                                    <label htmlFor='checkbox' style={{ color: 'rgba(0, 0, 0, 0.8)' }}>Remeber me</label>
                                </div>
                                <p style={{ margin: '0', cursor: 'pointer' }}>forgot password?</p>
                            </div>
                        </div>
                        <div className="block" style={{ marginTop: '30px' }}>
                            <MyButton
                                type='btn'
                                title='Log in'
                                runAction={() => console.log("i can't login now")}
                                sty={{ margin: '0px' }}
                                mobileStyle
                                styleToApply='login_btn_style'
                            />
                        </div>
                    </form>
                    <div className='option_signin'>
                        <p style={{ margin: '0' }}>or</p>
                        <p style={{ margin: '0', cursor: 'pointer' }}>Sign in with</p>
                    </div>
                    <div id='continue_with_fb_btn' style={{ marginTop: '30px' }}>
                        <MyButton
                            type='btn'
                            title='continue with facebook'
                            altStyle={{ cursor: 'pointer' }}
                            font={<img style={{ marginRight: '2px' }} src={facebook} alt='google' />}
                            runAction={() => this.fbLogin()}
                            sty={{ margin: '0px' }}
                        />
                    </div>
                    <div style={{ marginTop: '15px', width: '220px' }}>
                        <MyButton
                            type='btn'
                            title='Google Play'
                            altStyle={{ color: '#3750B2', cursor: 'pointer' }}
                            sty={{ background: 'none', border: 'none', margin: '0px' }}
                            font={<img style={{ marginRight: '2px' }} src={google} alt='google' />}

                        />
                    </div>
                    <div className='account_wrapper'>
                        <p style={{ margin: '0' }}>Don't have an account? <span style={{ cursor: 'pointer' }}><Link to='/register'>Create Account</Link></span></p>
                        <p style={{ margin: '0' }}>Trouble Signing In? <span style={{ cursor: 'pointer' }}>Contact Support</span></p>
                    </div>
                </div>
            </Fragment>


        )
    }
}


export default connect(null, { signInWithFacebook })(withRouter(Login))
