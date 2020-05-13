import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './dashboardHeaderStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const DashboardHeader = (props) => {
    const { name, picture } = props.user
    const nameAr = name && name.split(' ')
    const firstName = nameAr[0]

    return (
        <div className='dashboard_header'>
            <div className='dashboard_header_container'>
                <div style={{ display: 'flex' }}>
                    <FontAwesomeIcon icon={faBars} className='mobile_bars' onClick={props.open} />
                    <div className='logo' style={{ marginLeft: '10px' }} ><Link to='/'>Abutto</Link></div>
                </div>
                <div className='dash_header_left_side'>
                    <FontAwesomeIcon icon={faBell} />
                    <img src={picture && picture.data.url} alt='profile' style={{ height: '30px', width: '30px', borderRadius: '50%', margin: '0 20px', objectFit: 'cover' }} />
                    <p>Hi, <span>{firstName}</span></p>
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(DashboardHeader)
