import React, { Fragment } from 'react'
import Help from './index'

function ProvideHelp() {
    const helpData = [{
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff Rice',
        quantity: '2 Mudu',
        location: '0.2mm away '
    }, {
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff Rice',
        quantity: '2 Mudu',
        location: '0.2mm away'
    }, {
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff Rice',
        quantity: '2 Mudu',
        location: '0.2mm away'
    }, {
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff fufu',
        quantity: '2 bag',
        location: '0.9mm away'
    }, {
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff Rice',
        quantity: '2 Mudu',
        location: '0.2mm away'
    }, {
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff fufu',
        quantity: '2 bag',
        location: '0.9mm away'
    }]
    return (
        <Fragment>
            <Help helpData={helpData} help='provide' />
        </Fragment>
    )
}

export default ProvideHelp
