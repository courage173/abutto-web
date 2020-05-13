import React, { Component } from 'react';
import { connect } from 'react-redux';

import './profileStyle.css';
// import bosky from '../../../assets/bosky.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { update } from '../../utils/form/formActions'
import FormField from '../../utils/form/formfield';

import MyButton from '../../utils/button/Button'
import Layout from '../../../hoc/Layout'



class Profile extends Component {
    state = {
        formError: false,
        formSuccess: false,
        isFocus: false,
        formdata: {
            firstName: {
                element: 'input',
                value: '',
                config: {
                    name: 'firstName_input',
                    type: 'text',
                },
                validation: {
                    required: false,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastName: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastName_input',
                    type: 'text',
                },
                validation: {
                    required: false,
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
                },
                validation: {
                    required: false,
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
                },
                validation: {
                    required: false,
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
                    placeholder: '*********'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            address: {
                element: 'input',
                value: '',
                config: {
                    name: 'pass_input',
                    type: 'address',
                },
                validation: {
                    required: false,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            city: {
                element: 'input',
                value: '',
                config: {
                    name: 'city_input',
                    type: 'city',
                },
                validation: {
                    required: false,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            state: {
                element: 'input',
                value: '',
                config: {
                    name: 'pass_input',
                    type: 'state',
                },
                validation: {
                    required: false,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            gender: {
                element: 'select',
                value: '',
                config: {
                    name: 'gender_input',
                    options: [
                        { key: 1, value: 'Male' },
                        { key: 2, value: 'Female' },
                    ]
                },
                validation: {
                    required: false
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: false
            }

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
    render() {
        const { picture, name } = this.props.user
        return (
            <Layout>
                <div className="profile-section">
                    <div className="navs">
                        <div className="edit-profile">Edit Profile</div>
                        <div className="save">
                            <MyButton
                                type='btn'
                                title='Save'
                                rightIcon={<FontAwesomeIcon icon={faArrowRight} className="arrow" />}
                                altStyle={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                    alignItems: 'center',
                                }}
                            />
                        </div>
                    </div>

                    <div className="edit-section container-fluid">
                        <div className="blue-bg">
                        </div>

                        <div className="user-edit-section">
                            <div className="user-container">
                                <div className='profile_setting_wrap'><p style={{ margin: '0px' }}>Profile Setting</p></div>
                                <img className="user-icon" src={picture && picture.data.url} alt='profile' style={{
                                    height: '150px', width: '150px', borderRadius:
                                        '100%', objectFit: 'cover'
                                }} />
                                <div className="foto-edit">
                                    <FontAwesomeIcon icon={faCamera} className="edit-icon" />
                                </div>
                                <div className="name">{name}</div>
                                <button className="available">Available</button>
                            </div>
                            <div className="input-section">
                                <div className="acct_setting_wrapper"><p style={{ margin: '0px' }}>Account Setting</p></div>
                                <hr className="line" />
                                <div className="profile_form_wrapper">
                                    <div className="profile-form_top_section">
                                        <div>
                                            <div>
                                                <div className="first">First Name</div>
                                                <FormField
                                                    id={'firstName'}
                                                    formdata={this.state.formdata.firstName}
                                                    change={(element) => this.updateForm(element)}
                                                    useStyle={false}
                                                    inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                    st={{
                                                        marginBottom: '21px',
                                                        fontFamily: 'Montserrat',
                                                        color: '#3750B2', fontWeight: '600',
                                                        fontSize: '13px',
                                                        alignItems: 'center',
                                                        marginTop: '5px'
                                                    }}

                                                // ApplyMobileStyle
                                                // mobileStyle='form_block_mobile'
                                                />
                                            </div>
                                            <div>
                                                <div className="first">Password</div>
                                                <FormField
                                                    id={'password'}
                                                    formdata={this.state.formdata.password}
                                                    change={(element) => this.updateForm(element)}
                                                    inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                    fontIcon2={<FontAwesomeIcon icon={faEye} style={{ color: '#DADADA', cursor: 'pointer' }} />}
                                                    st={{
                                                        marginBottom: '21px',
                                                        marginTop: '5px',
                                                        justifyContent: 'space-evenly',
                                                        alignItems: 'center'
                                                    }}
                                                    useStyle={false}
                                                // ApplyMobileStyle
                                                // mobileStyle='form_block_mobile'
                                                />
                                            </div>
                                            <div>
                                                <div className="first">Email</div>
                                                <FormField
                                                    id={'email'}
                                                    formdata={this.state.formdata.email}
                                                    change={(element) => this.updateForm(element)}
                                                    useStyle={false}
                                                    inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                    st={{
                                                        marginBottom: '21px',
                                                        fontFamily: 'Montserrat',
                                                        color: '#3750B2', fontWeight: '600',
                                                        fontSize: '13px',
                                                        alignItems: 'center',
                                                        marginTop: '5px'
                                                    }}

                                                // ApplyMobileStyle
                                                // mobileStyle='form_block_mobile'
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <div className="first">Last Name</div>
                                                <FormField
                                                    id={'lastName'}
                                                    formdata={this.state.formdata.lastName}
                                                    change={(element) => this.updateForm(element)}
                                                    useStyle={false}
                                                    inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                    st={{
                                                        marginBottom: '21px',
                                                        fontFamily: 'Montserrat',
                                                        color: '#3750B2', fontWeight: '600',
                                                        fontSize: '13px',
                                                        alignItems: 'center',
                                                        marginTop: '5px'
                                                    }}

                                                // ApplyMobileStyle
                                                // mobileStyle='form_block_mobile'
                                                />
                                            </div>
                                            <div>
                                                <div className="first">Gender</div>
                                                <FormField
                                                    id={'gender'}
                                                    formdata={this.state.formdata.gender}
                                                    change={(element) => this.updateForm(element)}
                                                    legend='Sex'
                                                    st={{
                                                        marginBottom: '21px',
                                                        padding: '5px 10px 0px 10px',
                                                        justifyContent: 'space-between', fontFamily: 'Montserrat',
                                                        color: 'black', fontWeight: '600',
                                                        fontSize: '13px',
                                                    }}
                                                    selStyle='23px'
                                                    ApplyMobileStyle
                                                    mobileStyle='genderStyle'
                                                />
                                            </div>
                                            <div>
                                                <div className="first">Telephone</div>
                                                <FormField
                                                    id={'phoneNumber'}
                                                    formdata={this.state.formdata.phoneNumber}
                                                    change={(element) => this.updateForm(element)}
                                                    useStyle={false}
                                                    inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                    st={{
                                                        marginBottom: '21px',
                                                        fontFamily: 'Montserrat',
                                                        color: '#3750B2', fontWeight: '600',
                                                        fontSize: '13px',
                                                        alignItems: 'center',
                                                        marginTop: '5px'
                                                    }}

                                                // ApplyMobileStyle
                                                // mobileStyle='form_block_mobile'
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='profile_form_btm_section'>
                                        <div className='address_container'>
                                            <div className='address_wrapper'>
                                                <div className="first">Address</div>
                                                <FormField
                                                    id={'address'}
                                                    formdata={this.state.formdata.address}
                                                    change={(element) => this.updateForm(element)}
                                                    useStyle={false}
                                                    inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                    st={{
                                                        marginBottom: '21px',
                                                        fontFamily: 'Montserrat',
                                                        color: '#3750B2', fontWeight: '600',
                                                        fontSize: '13px',
                                                        alignItems: 'center',
                                                        marginTop: '20px',
                                                        width: '80%'
                                                    }}
                                                    ApplyMobileStyle
                                                    mobileStyle='address_input_mobile_style'
                                                />
                                            </div>
                                            <div></div>
                                        </div>
                                        <div className='city_state_section'>
                                            <div >
                                                <div className="first">City</div>
                                                <FormField
                                                    id={'city'}
                                                    formdata={this.state.formdata.city}
                                                    change={(element) => this.updateForm(element)}
                                                    useStyle={false}
                                                    inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                    st={{
                                                        marginBottom: '21px',
                                                        fontFamily: 'Montserrat',
                                                        color: '#3750B2', fontWeight: '600',
                                                        fontSize: '13px',
                                                        alignItems: 'center',
                                                        marginTop: '5px'
                                                    }}

                                                // ApplyMobileStyle
                                                // mobileStyle='form_block_mobile'
                                                />
                                            </div>
                                            <div>
                                                <div className="first">State</div>
                                                <FormField
                                                    id={'state'}
                                                    formdata={this.state.formdata.state}
                                                    change={(element) => this.updateForm(element)}
                                                    useStyle={false}
                                                    inPutStyle={{ background: 'white', boxShadow: 'inset 0 0 0px 9999px white', marginLeft: '15px' }}
                                                    st={{
                                                        marginBottom: '21px',
                                                        fontFamily: 'Montserrat',
                                                        color: '#3750B2', fontWeight: '600',
                                                        fontSize: '13px',
                                                        alignItems: 'center',
                                                        marginTop: '5px'
                                                    }}

                                                // ApplyMobileStyle
                                                // mobileStyle='form_block_mobile'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='save_btn_for_mobile_wrapper'>
                                <MyButton
                                    type='btn'
                                    title='Save'
                                    rightIcon={<FontAwesomeIcon icon={faArrowRight} className="arrow" />}
                                    mobileStyle
                                    styleToApply='save_btn_for_mobile'
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {})(Profile);