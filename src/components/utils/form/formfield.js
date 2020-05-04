import React, { Fragment } from 'react';
import './formField.css'

const Formfield = ({ formdata, change, id, legend,
    fontIcon, fontIcon2, useStyle,
    setFocus, isFocus, st, inPutStyle, selStyle, ApplyMobileStyle }) => {
    const showError = () => {
        let errorMessage = null;

        if (formdata.validation && !formdata.valid) {
            errorMessage = (
                <div className="error_label">
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }
    const renderTemplate = () => {
        let formTemplate = null;
        //the applymobile props is to check if the view is mobile and apply extra styles if needed for responsiveness
        let styles = ['formBlock', ApplyMobileStyle ? 'mobileStyle' : ' ']
        switch (formdata.element) {
            case ('input'):
                formTemplate = (
                    <div className={styles.join(' ')} style={st ? st : null}>
                        {formdata.showlabel ?
                            <div className="label_inputs">{formdata.config.label}</div>
                            : null}

                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id })}
                            style={inPutStyle}
                        />
                        {showError()}
                    </div>
                )
                break;
            case ('fieldset'):
                formTemplate = (
                    <div className={styles.join(' ')} style={isFocus ? st : null}>
                        {formdata.showlabel ?
                            <div className="label_inputs">{formdata.config.label}</div>
                            : null}
                        <p className='legend'>{legend}</p>
                        <div className={useStyle ? 'icon_input_wrapper' : null}>
                            {fontIcon && fontIcon}
                            <input
                                style={{ background: '#E8F5FF' }}
                                onFocus={setFocus}
                                {...formdata.config}
                                value={formdata.value}
                                onBlur={(event) => change({ event, id, blur: true })}
                                onChange={(event) => change({ event, id })}
                            />
                            {fontIcon2 && fontIcon2}
                        </div>
                        {showError()}
                    </div>
                )
                break;
            case ('select'):
                formTemplate = (
                    <div className={styles.join(' ')}
                        style={{
                            border: 'none', backgroundColor: '#fff',
                            boxShadow: '0px 7px 20px rgba(55, 80, 178, 0.4)', marginTop: selStyle
                        }} >
                        {
                            formdata.showlabel ?
                                <div className="label_inputs">{formdata.config.label}</div>
                                : null
                        }
                        <div style={st && st}>
                            {legend && legend}
                            <select
                                value={formdata.value}
                                onBlur={(event) => change({ event, id, blur: true })}
                                onChange={(event) => change({ event, id })}
                                className={st ? 'selectInput' : null}
                            >
                                <option value=""></option>
                                {
                                    formdata.config.options.map(item => (
                                        <option
                                            key={item.key}
                                            value={item.value}
                                        >
                                            {item.value}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        {showError()}
                    </div >
                )
                break;
            case ('textarea'):
                formTemplate = (
                    <div className={styles.join(' ')}>
                        {formdata.showlabel ?
                            <div className="label_inputs">{formdata.config.label}</div>
                            : null}
                        <textarea
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id })}
                        />
                        {showError()}
                    </div>
                )
                break;
            case ('checkbox'):
                formTemplate = (
                    <div className={styles.join(' ')}>
                        {formdata.showlabel ?
                            <div className="label_inputs">{formdata.config.label}</div>
                            : null}
                        <checkbox
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id })}
                        />
                        {showError()}
                    </div>
                )
                break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }


    return (
        <Fragment>
            {renderTemplate()}
        </Fragment>
    );
};

export default Formfield;