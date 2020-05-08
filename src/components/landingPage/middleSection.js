import React, { Component } from 'react';
import MyButton from '../utils/button/Button'
import CardImage from '../../assets/landpage-card.svg'
import { update, generateData, isFormValid, populateOptionFields } from '../utils/form/formActions'
import FormField from '../utils/form/formfield';

class MiddleSection extends Component {
    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            location: {
                element: 'input',
                value: '',
                config: {
                    name: 'location_input',
                    type: 'text',
                    placeholder: 'Location'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: false
            },
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: false
            },
            help: {
                element: 'select',
                value: '',
                config: {
                    name: 'help_input',
                    options: [
                        { key: 1, value: 'money' },
                        { key: 2, value: 'others' }
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: false
            },
        }
    }

    updateFields = (newFormdata) => {
        this.setState({
            formdata: newFormdata
        })
    }


    updateForm = (element) => {
        if (element.blur) {
            this.setState({ isFocus: false })
        }
        const newFormdata = update(element, this.state.formdata, 'donate');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    render() {
        return (
            <div className='mid-wrapper'>
                <div className='intro-section'>
                    <h4>We are Amazing</h4>
                    <p>During the lockdown, communities coming together to support and help each other, but due
                    to distance challenges, we believe it only good
                    to bring neighbors together through the help of map technology.
                </p>
                    <p>With Abutto, a user is able to pin point his location
                    and identify help/assistance he/she
                    can provide while the application connect a person in need of the assistance to the provider.
               </p>
                </div>
                <div>
                    <MyButton
                        type='default'
                        title='Learn More'
                        linkTo='/about'
                        altStyle={{ color: '#3750B2' }}
                        sty={{ background: '#E8F5FF', fontWeight: 'bold', border: 'none', fontSize: '20px' }}
                    />
                </div>
                <div className='card_wrapper'>
                    <div className={this.props.provideModal ? 'card1' : 'card2'} onClick={() => this.props.click('provide', true)}>
                        <img src={CardImage} alt='money bag' style={{ height: '170px', width: '200px' }} />
                        <h5>Provide Help</h5>
                        <p className={this.props.provideModal ? 'ptag1' : 'ptag2'}>Reach out to others in need of help</p>
                    </div>
                    <div className={this.props.needModal ? 'card1' : 'card2'} onClick={() => this.props.click('need', true)}>
                        <img src={CardImage} alt='money bag' style={{ height: '100px', marginTop: '20px' }} />
                        <h5>Need Help</h5>
                        <p className={this.props.needModal ? 'ptag1' : 'ptag2'}>in need of help</p>
                    </div>
                    <div className='card2'>
                        <img src={CardImage} alt='money bag' style={{ height: '100px', marginTop: '20px' }} />
                        <h5>Make Donations</h5>
                        <p className='ptag2'>Make Donations towards reaching out to others</p>
                    </div>
                </div>
                <div className='form_donation_wrapper'>
                    <div className='donate_title'>
                        <h5>Make Donations</h5>
                    </div>
                    <div className='form_donation_wrap'>
                        <div className='form_donation_container'>
                            <div>
                                <FormField
                                    id={'help'}
                                    formdata={this.state.formdata.help}
                                    change={(element) => this.updateForm(element)}
                                    legend='Type of Help'
                                    st={{
                                        display: 'flex', padding: '5px 10px 0px 10px',
                                        justifyContent: 'space-between', fontFamily: 'Montserrat',
                                        color: '#3750B2', fontWeight: '600',
                                        fontSize: '13px'
                                    }}
                                />
                                <FormField
                                    id={'location'}
                                    formdata={this.state.formdata.location}
                                    change={(element) => this.updateForm(element)}
                                    useStyle={true}
                                    st={{ border: 'none', backgroundColor: '#fff', boxShadow: '0px 7px 20px rgba(55, 80, 178, 0.4)' }}
                                    inPutStyle={{ paddingLeft: '10px' }}

                                />
                            </div>
                            <div>
                                <FormField
                                    id={'name'}
                                    formdata={this.state.formdata.name}
                                    change={(element) => this.updateForm(element)}
                                    useStyle={true}
                                    st={{ border: 'none', backgroundColor: '#fff', boxShadow: '0px 7px 20px rgba(55, 80, 178, 0.4)' }}
                                    inPutStyle={{ paddingLeft: '10px' }}
                                />
                            </div>
                        </div>
                        <div className='donate_btn'>
                            <MyButton
                                type='default'
                                title='Donate'
                                // altStyle={{ color: '#3750B2' }}
                                sty={{ fontWeight: 'bold', fontSize: '15px', width: '150px', marginTop: '40px' }}
                                //will update this after building the donate modal
                                linkTo='/donate'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MiddleSection
