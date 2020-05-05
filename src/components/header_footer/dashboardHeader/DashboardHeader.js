import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardHeaderStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import bosky from '../../../assets/bosky.png'

const DashboardHeader = (props) => {
    return (
        <div className='dashboard_header'>
            <div className='dashboard_header_container'>
                <div style={{ display: 'flex' }}>
                    <FontAwesomeIcon icon={faBars} className='mobile_bars' onClick={props.open} />
                    <div className='logo' style={{ marginLeft: '10px' }} ><Link to='/'>Abutto</Link></div>
                </div>
                <div className='dash_header_left_side'>
                    <FontAwesomeIcon icon={faBell} />
                    <img src={bosky} alt='profile' style={{ height: '30px', width: '30px', borderRadius: '50%', margin: '0 20px', objectFit: 'cover' }} />
                    <p>Hi, <span>Bosky</span></p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader
