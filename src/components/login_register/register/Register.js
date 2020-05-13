import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faKey, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import google from '../../../assets/super-g.svg';
import facebook from '../../../assets/fb_logo.svg';

import { update } from '../../utils/form/formActions'
import FormField from '../../utils/form/formfield';
import './registerStyle.css';
import MyButton from '../../utils/button/Button'
import { signInWithFacebook } from '../../../redux/actions/authAction'



class Register extends Component {

    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            username: {
                element: 'fieldset',
                value: '',
                config: {
                    name: 'username_input',
                    type: 'text',
                    placeholder: 'Enter a username'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'EMAIL'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            phoneNumber: {
                element: 'input',
                value: '',
                config: {
                    name: 'phone_input',
                    type: 'text',
                    placeholder: 'PHONE'
                },
                validation: {
                    required: true,
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
            confirmPassword: {
                element: 'fieldset',
                value: '',
                config: {
                    name: 'pass_input',
                    type: 'password',
                    placeholder: 'CONFIRM PASSWORD'
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },

        },

    }
    fbLogin = () => {
        this.props.signInWithFacebook().then(res => this.props.history.push('/profile'))
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
                <div className='create_wrapper'>
                    <h4>Create an</h4>
                    <h4>Account</h4>
                    <div>Let's get to know you</div>

                </div>
                <div className='reg_form_container'>
                    <form className='form' onSubmit={(event) => this.submitForm(event)}>
                        <div className="block">
                            {/* <FormField
                                id={'username'}
                                formdata={this.state.formdata.username}
                                change={(element) => this.updateForm(element)}
                                legend='username'
                                fontIcon={<FontAwesomeIcon icon={faUser} style={{ margin: '0 10px 0 5px', color: '#3750B2' }} />}
                                useStyle={false}
                                st={{ border: '2px solid #3750B2' }}
                                setFocus={this.focus}
                                isFocus={this.state.isFocus}
                                ApplyMobileStyle
                                mobileStyle='form_block_mobile'
                            /> */}
                        </div>
                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element) => this.updateForm(element)}
                            fontIcon={<FontAwesomeIcon icon={faEnvelope} style={{ margin: '0 10px 0 5px', color: '#3750B2' }} />}
                            useStyle={false}
                            inPutStyle={{ background: 'rgb(232, 245, 255)', boxShadow: 'rgb(232, 245, 255) 0px 0px 0px 9999px inset' }}
                            st={{
                                display: 'flex',
                                fontFamily: 'Montserrat',
                                color: '#3750B2', fontWeight: '600',
                                fontSize: '13px',
                                alignItems: 'center',
                                marginTop: '25px'
                            }}
                            ApplyMobileStyle
                            mobileStyle='form_block_mobile'
                        />
                        <FormField
                            id={'phoneNumber'}
                            formdata={this.state.formdata.phoneNumber}
                            change={(element) => this.updateForm(element)}
                            fontIcon={<FontAwesomeIcon icon={faMobileAlt} style={{ margin: '0 10px 0 5px', color: '#3750B2' }} />}
                            useStyle={false}
                            inPutStyle={{ background: 'rgb(232, 245, 255)', boxShadow: 'rgb(232, 245, 255) 0px 0px 0px 9999px inset' }}
                            st={{
                                display: 'flex',
                                fontFamily: 'Montserrat',
                                color: '#3750B2', fontWeight: '600',
                                fontSize: '13px',
                                alignItems: 'center',
                                marginTop: '25px'
                            }}
                            ApplyMobileStyle
                            mobileStyle='form_block_mobile'
                        />
                        <FormField
                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element) => this.updateForm(element)}
                            fontIcon={<FontAwesomeIcon icon={faKey} style={{ color: '#3750B2' }} />}
                            fontIcon2={<FontAwesomeIcon icon={faEye} style={{ color: '#DADADA', cursor: 'pointer' }} />}
                            inPutStyle={{ background: 'rgb(232, 245, 255)', boxShadow: 'rgb(232, 245, 255) 0px 0px 0px 9999px inset' }}
                            useStyle={true}
                            ApplyMobileStyle
                            mobileStyle='form_block_mobile'
                        />
                        <FormField
                            id={'confirmPassword'}
                            formdata={this.state.formdata.confirmPassword}
                            change={(element) => this.updateForm(element)}
                            fontIcon={<FontAwesomeIcon icon={faKey} style={{ color: '#3750B2' }} />}
                            fontIcon2={<FontAwesomeIcon icon={faEye} style={{ color: '#DADADA', cursor: 'pointer' }} />}
                            inPutStyle={{ background: 'rgb(232, 245, 255)', boxShadow: 'rgb(232, 245, 255) 0px 0px 0px 9999px inset' }}
                            useStyle={true}
                            ApplyMobileStyle
                            mobileStyle='form_block_mobile'
                        />
                        <div id='reg_btn_container' className="block" style={{ marginTop: '30px' }}>
                            <MyButton
                                type='btn'
                                title='Sign up'
                                runAction={() => console.log('i aint working yet')}
                                sty={{
                                    margin: '0px', background: '#E8F5FF',
                                    border: 'none',
                                    boxShadow: '0px 1px 10px rgba(55, 80, 178, 0.2)',
                                    borderRadius: '10px ',
                                    width: '100px'
                                }}
                                altStyle={{ color: '#3750B2' }}
                            // mobileStyle
                            // styleToApply='login_btn_style'
                            />
                        </div>
                    </form>
                    <div className='option_register'>
                        <p style={{ margin: '0' }}>or</p>
                    </div>
                    <div id='continue_with_fb_btn_reg' style={{ marginTop: '7px' }}>
                        <MyButton
                            type='btn'
                            title='continue with facebook'
                            font={<img style={{ marginRight: '2px' }} src={facebook} alt='google' />}
                            runAction={() => this.fbLogin()}
                            sty={{ margin: '0px' }}
                            altStyle={{ cursor: 'pointer' }}
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
                    <div className='support_sigin_wrapper'>
                        <p style={{ margin: '0' }}>Got an account? <span style={{ cursor: 'pointer' }}><Link to='/login'>Sign in</Link></span></p>
                        <p style={{ margin: '0' }}>Need help? <span style={{ cursor: 'pointer' }}>Contact Support</span></p>
                    </div>
                </div>
            </Fragment>


        )
    }
}

export default connect(null, { signInWithFacebook })(withRouter(Register))
