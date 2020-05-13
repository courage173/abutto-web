import React, { Component } from 'react';
import CSSTransition from "react-transition-group/CSSTransition"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './needHelpStyle.css';

import { update } from '../../utils/form/formActions'
import FormField from '../../utils/form/formfield';
import MyButton from '../../utils/button/Button'
import MapSection from '../../utils/map/Map'

class NeedHelpModal extends Component {
    state = {
        formError: false,
        formSuccess: false,
        isFocus: false,
        formdata: {
            help: {
                element: 'select',
                value: '',
                config: {
                    name: 'help_input',
                    options: [
                        { key: 1, value: 'Foodstuff' },
                        { key: 2, value: 'Clothing' },
                        { key: 3, value: 'others' }
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
            number: {
                element: 'input',
                value: '',
                config: {
                    name: 'number_input',
                    type: 'number',
                    placeholder: 'Number of Persons'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: false
            },
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
        const newFormdata = update(element, this.state.formdata, 'needHelp');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    render() {
        const modaStyle = ['modal', this.props.modal ? 'ModalOpen' : 'ModalClosed']
        const animationTiming = {
            enter: 400,
            exit: 1000
        };

        return (

            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={this.props.modal}
                timeout={animationTiming}
                classNames={{
                    enter: '',
                    enterActive: 'ModalOpen',
                    exit: '',
                    exitActive: 'ModalClosed'
                }}>
                <div className={modaStyle.join(' ')}>
                    <div className='modal_container'>
                        <FontAwesomeIcon icon={faTimes} style={{ margin: '10px', color: '#755151' }} onClick={this.props.close} />
                        <div className='need_help_modal_wrapper'>
                            <FormField
                                id={'help'}
                                formdata={this.state.formdata.help}
                                change={(element) => this.updateForm(element)}
                                legend='Type of Help'
                                st={{
                                    display: 'flex', padding: '5px 10px 0px 10px',
                                    justifyContent: 'space-between', fontFamily: 'Montserrat',
                                    color: '#3750B2', fontWeight: '600',
                                    fontSize: '13px',
                                }}
                                selStyle='23px'
                                ApplyMobileStyle
                                mobileStyle='mobileStyle'
                            />
                            <FormField
                                id={'number'}
                                formdata={this.state.formdata.number}
                                change={(element) => this.updateForm(element)}
                                useStyle={true}
                                st={{ border: 'none', backgroundColor: '#fff', boxShadow: '0px 7px 20px rgba(55, 80, 178, 0.4)' }}
                                inPutStyle={{ paddingLeft: '10px', width: '92%' }}
                                ApplyMobileStyle
                                mobileStyle='mobileStyle'
                            />
                            <FormField
                                id={'location'}
                                formdata={this.state.formdata.location}
                                change={(element) => this.updateForm(element)}
                                useStyle={true}
                                st={{ border: 'none', backgroundColor: '#fff', boxShadow: '0px 7px 20px rgba(55, 80, 178, 0.4)' }}
                                inPutStyle={{ paddingLeft: '10px', width: '92%' }}
                                ApplyMobileStyle
                                mobileStyle='mobileStyle'

                            />
                            <div className='location_wrapper'>
                                <MapSection />
                            </div>
                            <div style={{ marginTop: '25px', marginBottom: '30px' }}>
                                <MyButton
                                    type='btn'
                                    title='Need help'
                                />
                            </div>
                        </div >
                    </div>
                </div>
            </CSSTransition>
        )
    }

}

export default NeedHelpModal
