import React from 'react';
import './dashboardHeaderStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import bosky from '../../../assets/bosky.png'

const DashboardHeader = () => {
    return (
        <div className='dashboard_header'>
            <div className='dashboard_header_container'>
                <div className='logo' style={{ marginLeft: '10px' }} >Abutto</div>
                <div className='dash_header_left_side'>
                    <FontAwesomeIcon icon={faBell} />
                    <img src={bosky} alt='profile' style={{ height: '30px', width: '30px', borderRadius: '50%', margin: '0 20px' }} />
                    <p>Hi, <span>Bosky</span></p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader
