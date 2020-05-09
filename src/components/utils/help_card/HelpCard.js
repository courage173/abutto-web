import React from 'react'
import './helpCard.css'
import MyButton from '../../utils/button/Button'

const HelpCard = (props) => {
    const displayCard = () => {
        return props.data.map((item, i) => (
            <tbody key={i}>
                <tr className='tr'>
                    <td align='middle'> {item.date} </td>
                    <td align='middle'>{item.type}</td>
                    <td align='middle'>{item.quantity}</td>
                    <td align='middle'> {item.location} </td>
                    <td>
                        <MyButton
                            type='default'
                            title='view'
                            linkTo='view_order'
                            altStyle={{ color: '#000000', fontWeight: 'bold', fontSize: '12px' }}
                            sty={{ background: 'none', border: 'none' }}
                        />
                    </td>
                    <td>
                        <MyButton
                            type='default'
                            title='Cancel'
                            linkTo='cancel_order'
                            altStyle={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '12px' }}
                            sty={{ background: 'rgba(225, 55, 55, 0.9)', border: 'none' }}
                        />
                    </td>
                </tr>
            </tbody>
        ))


    }
    const displayMobileCard = () => {
        return props.data.map((item, i) => (
            <div className='mobile_help_wrapper' key={i + item.date}>
                <div className='mobile_help_container'>
                    <div className='mobile_card_title'>
                        <p>DATE</p>
                        <p>TYPE OF ORDER</p>
                        <p> {props.type === 'provide' ? 'QUANTITY' : 'No. of PERSONS'} </p>
                        <p>LOCATION</p>

                    </div>
                    <div className='mobile_card_content'>
                        <p> {item.date} </p>
                        <p>{item.type}</p>
                        <p>{item.quantity}</p>
                        <p>{item.location}</p>
                    </div>
                </div>
                <div className='mobile_card_btn'>
                    <MyButton
                        type='default'
                        title='view'
                        linkTo='view_order'
                        altStyle={{ color: '#000000', fontWeight: 'bold', fontSize: '12px' }}
                        sty={{ background: 'none', border: 'none', width: '50px' }}
                    />
                    <MyButton
                        type='default'
                        title='Cancel'
                        linkTo='cancel_order'
                        altStyle={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '12px' }}
                        sty={{ background: 'rgba(225, 55, 55, 0.9)', border: 'none', width: '50px', boxShadow: 'none' }}
                    />
                </div>
            </div>
        ))
    }
    return (
        <div>
            <table className='help_table' style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>TYPE OF ORDER</th>
                        <th>{props.type === 'provide' ? 'QUANTITY' : 'No. of PERSONS'}</th>
                        <th>LOCATION</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {displayCard()}
            </table>
            <div className='help_mobileview_container'>
                {displayMobileCard()}
            </div>
        </div>
    )
}

export default HelpCard
