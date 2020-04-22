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
    return (
        <div>
            <table className='help_table' style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>TYPE OF ORDER</th>
                        <th>QUANTITY</th>
                        <th>LOCATION</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {displayCard()}
            </table>
        </div>
    )
}

export default HelpCard
