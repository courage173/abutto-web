import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faKey, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { update, generateData, isFormValid } from '../../utils/form/formActions'
import FormField from '../../utils/form/formfield';
import './registerStyle.css';
import google from '../../../assets/super-g.svg';
import facebook from '../../../assets/fb_logo.svg';
import MyButton from '../../utils/button/Button'



class Register extends Component {

    state = {
        formError: false,
        formSuccess: false,
        isFocus: false,
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
                            inPutStyle={{ background: 'rgb(232, 245, 255)' }}
                            st={{
                                display: 'flex',
                                fontFamily: 'Montserrat',
                                color: '#3750B2', fontWeight: '600',
                                fontSize: '13px',
                                alignItems: 'center',
                                marginTop: '25px'
                            }}
                            setFocus={this.focus}
                            isFocus={this.state.isFocus}
                            ApplyMobileStyle
                            mobileStyle='form_block_mobile'
                        />
                        <FormField
                            id={'phoneNumber'}
                            formdata={this.state.formdata.phoneNumber}
                            change={(element) => this.updateForm(element)}
                            fontIcon={<FontAwesomeIcon icon={faMobileAlt} style={{ margin: '0 10px 0 5px', color: '#3750B2' }} />}
                            useStyle={false}
                            inPutStyle={{ background: 'rgb(232, 245, 255)' }}
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
                            st={{ border: '2px solid #3750B2' }}
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
                            st={{ border: '2px solid #3750B2' }}
                            useStyle={true}
                            ApplyMobileStyle
                            mobileStyle='form_block_mobile'
                        />
                        <div id='reg_btn_container' className="block" style={{ marginTop: '30px' }}>
                            <MyButton
                                type='default'
                                title='Sign up'
                                linkTo='/dashboard'
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
                            type='default'
                            title='continue with facebook'
                            font={<img style={{ marginRight: '2px' }} src={facebook} alt='google' />}
                            linkTo='/facebook'
                            sty={{ margin: '0px' }}
                        />
                    </div>
                    <div style={{ marginTop: '15px', width: '220px' }}>
                        <MyButton
                            type='default'
                            title='Google Play'
                            altStyle={{ color: '#3750B2' }}
                            sty={{ background: 'none', border: 'none', margin: '0px' }}
                            font={<img style={{ marginRight: '2px' }} src={google} alt='google' />}
                            linkTo='/google'
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

export default Register
