import React, { Component } from 'react';
import './setting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { update, generateData, isFormValid } from '../../utils/form/formActions'
import FormField from '../../utils/form/formfield';

import MyButton from '../../utils/button/Button'

class Setting extends Component {

    state = {
        formError: false,
        formSuccess: false,
        isFocus: false,
        formdata: {
            phoneNumber: {
                element: 'input',
                value: '',
                config: {
                    name: 'phone_input',
                    type: 'text',
                    placeholder: '070 000 000 00'
                },
                validation: {
                    required: false,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            currentPassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'current_password_input',
                    type: 'password',
                    placeholder: '*********'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: ''
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'pass_input',
                    type: 'password',
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            requestNotification: {
                element: 'toggle',
                checked: false,
                config: {
                    name: 'req_input',
                },
                name: 'req_input',
                validation: {
                    required: false,
                },
                validationMessage: '',
                touched: false,
            },
            providHelpNotification: {
                element: 'toggle',
                checked: false,
                config: {
                    name: 'provide_input',
                },
                validation: {
                    required: false,
                },
                validationMessage: '',
                name: 'provide_input',
                touched: false,
            },
            accept: {
                element: 'toggle',
                checked: false,
                config: {
                    name: 'accept_input',
                },
                name: 'accept_input',
                validation: {
                    required: false,
                },
                validationMessage: '',
                touched: false,
            },
        }
    }
    updateForm = (element, check) => {
        if (element.blur) {
            this.setState({ isFocus: false })
        }
        const newFormdata = update(element, this.state.formdata, 'settings', check);
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }
    render() {
        return (
            <div className='settings_wrapper'>
                <div className='settings_container'>
                    <div className='setting_top_container'>
                        <div className='setting_top_wrapper'>
                            <div className='act_settings_wrap'>
                                <div>Account Setting</div>
                            </div>
                            <div>
                                <div>
                                    <div className="setting_input_title">Phone Number</div>
                                    <div className='setting_number_input_wrap'>
                                        <div className='setting_phone_input_wrap'>
                                            <FormField
                                                id={'phoneNumber'}
                                                formdata={this.state.formdata.phoneNumber}
                                                change={(element) => this.updateForm(element)}
                                                useStyle={false}
                                                inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                st={{
                                                    display: 'flex',
                                                    fontFamily: 'Montserrat',
                                                    color: '#3750B2', fontWeight: '600',
                                                    fontSize: '13px',
                                                    alignItems: 'center',
                                                    marginTop: '5px'
                                                }}

                                                ApplyMobileStyle
                                                mobileStyle='settings_input_phone_mob'
                                            />
                                        </div>
                                        <div className='setting_phone_numb_btn'>
                                            <MyButton
                                                type='btn'
                                                title='Change'
                                                mobileStyle
                                                styleToApply='settings_btn_mob'
                                                altStyle={{
                                                    fontSize: '12px',
                                                    lineHeight: '15px'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='settings_top_btm_wrapper'>
                                <div className='settings_top_btm_container'>
                                    <div className="setting_input_title">Current Password</div>
                                    <FormField
                                        id={'currentPassword'}
                                        formdata={this.state.formdata.currentPassword}
                                        change={(element) => this.updateForm(element)}
                                        useStyle={false}
                                        inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                        st={{
                                            display: 'flex',
                                            fontFamily: 'Montserrat',
                                            color: '#3750B2', fontWeight: '600',
                                            fontSize: '13px',
                                            alignItems: 'center',
                                            marginTop: '5px',
                                            width: '16rem'
                                        }}

                                        ApplyMobileStyle
                                        mobileStyle='settings_input_phone_mob'
                                    />
                                </div>
                                <div className='settings_top_btm_container'>
                                    <div className="setting_input_title">New Password</div>
                                    <FormField
                                        id={'password'}
                                        formdata={this.state.formdata.password}
                                        change={(element) => this.updateForm(element)}
                                        useStyle={false}
                                        inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                        st={{
                                            display: 'flex',
                                            fontFamily: 'Montserrat',
                                            color: '#3750B2', fontWeight: '600',
                                            fontSize: '13px',
                                            alignItems: 'center',
                                            marginTop: '5px',
                                            width: '16rem'
                                        }}

                                        ApplyMobileStyle
                                        mobileStyle='settings_input_phone_mob'
                                    />
                                </div>
                                <div className='settings_top_btm_container'>
                                    <div className="setting_input_title">Confirm Password</div>
                                    <FormField
                                        id={'confirmPassword'}
                                        formdata={this.state.formdata.confirmPassword}
                                        change={(element) => this.updateForm(element)}
                                        useStyle={false}
                                        inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                        st={{
                                            display: 'flex',
                                            fontFamily: 'Montserrat',
                                            color: '#3750B2', fontWeight: '600',
                                            fontSize: '13px',
                                            alignItems: 'center',
                                            marginTop: '5px',
                                            width: '16rem'
                                        }}

                                        ApplyMobileStyle
                                        mobileStyle='settings_input_phone_mob'
                                    />
                                </div>
                                <div className='settings_top_btm_container settings_btn2'>
                                    <div>
                                        <MyButton
                                            type='btn'
                                            title='Update'
                                            mobileStyle
                                            styleToApply='settings_btn_mob'
                                            altStyle={{
                                                fontSize: '14px',
                                                lineHeight: '17px'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='setting_bottom_container'>
                        <div className='settings_btm_wrapper'>
                            <div>
                                <div className='settings_notif_text'>Notification Setting</div>
                                <div className='settings_activity_noti'>Activity Notification</div>
                                <div className='settings_email_cont'>Email me</div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className='toggle_btn_container'>
                                    <div className='toggle_btn_title'>When Someone Request for Help Within My Area:</div>
                                    <div className='toggle_btn_title'>When Someone Provide Help:</div>
                                    <div className='toggle_btn_title'>When Someone Accept My Help:</div>

                                </div>
                                <div className='toggle_btn_wraper'>
                                    <div>
                                        <FormField
                                            id={'providHelpNotification'}
                                            formdata={this.state.formdata.providHelpNotification}
                                            change={(element) => this.updateForm(element)}
                                        />

                                    </div>
                                    <div>
                                        <FormField
                                            id={'requestNotification'}
                                            formdata={this.state.formdata.requestNotification}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            id={'accept'}
                                            formdata={this.state.formdata.accept}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Setting
