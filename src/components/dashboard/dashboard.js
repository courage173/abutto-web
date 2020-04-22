import React, { Component } from 'react';
import './dashboardStyle.css';
import HelpCard from '../utils/help_card/HelpCard'
import MyButton from '../utils/button/Button'

class Dashboard extends Component {

    state = {
        isActive: 'provide help'
    }

    handleHelp(help) {
        this.setState({ isActive: help })
    }

    render() {
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
        }]
        return (

            <div className='dashboard_right_section'>
                <div className='dashboard_card'>
                    <div className={this.state.isActive === 'provide help' ? 'dash_card1' : 'dash_card2'} onClick={() => this.handleHelp('provide help')}>
                        <div style={{ margin: '0', fontWeight: 'bold', fontSize: '18px' }}>Provide Help</div>
                        <div style={{ margin: '0', fontSize: '14px' }}>Reach out to others in<br /> need of help</div>
                    </div>
                    <div className={this.state.isActive === 'need help' ? 'dash_card1' : 'dash_card2'} onClick={() => this.handleHelp('need help')}>
                        <div style={{ margin: '0', fontWeight: 'bold', fontSize: '18px' }}>Need Help</div>
                        <div style={{ margin: '0', fontSize: '14px' }}>In need of help</div>
                    </div>
                </div>
                <div className='line_break'>
                    <p>Upcoming Order</p>
                    <hr />
                </div>
                <div>
                    <HelpCard data={helpData} />
                </div>
                <div>
                    <MyButton
                        type='default'
                        title='view all shedule'
                        linkTo='shedule_order'
                        altStyle={{ color: '#3750B2', fontWeight: 'bold', fontSize: '16px' }}
                        sty={{ background: 'none', border: 'none', width: '162px', padding: '5px', height: '22px', marginTop: '30px' }}
                    />
                </div>
            </div>
        )
    }
}

export default Dashboard
