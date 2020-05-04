import React, { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/header_footer/dashboardHeader/DashboardHeader';
import Backdrop from '../components/landingPage/backdrop/Backdrop'
import './layout.css'

const DashboardWrap = (props) => {
    const [isMobile, setMobile] = useState(false)
    return (
        <div>
            <div className='dashboard_backdrop'>
                <Backdrop show={isMobile} click={() => setMobile(!isMobile)} />
            </div>
            <DashboardHeader open={() => setMobile(!isMobile)} />
            <div className='dashboard_wrapper'>
                <Sidebar isMobile={isMobile} close={() => setMobile(false)} />
                <div className='dashboard_container'>
                    {props.children}
                </div>
            </div>

        </div>
    )
}

export default DashboardWrap