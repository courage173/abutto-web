import React, { useState } from 'react'
import LinkSection from '../components/dashboard/linkSection';
import DashboardHeader from '../components/header_footer/dashboardHeader/DashboardHeader';
import Backdrop from '../components/landingPage/backdrop/Backdrop'

const DashboardWrap = (props) => {
    const [isMobile, setMobile] = useState(false)
    return (
        <div>
            <Backdrop show={isMobile} click={() => setMobile(!isMobile)} />
            <DashboardHeader open={() => setMobile(!isMobile)} />
            <div className='dashboard_wrapper'>
                <LinkSection isMobile={isMobile} close={() => setMobile(!isMobile)} />
                <div className='dashboard_container'>
                    {props.children}
                </div>
            </div>

        </div>
    )
}

export default DashboardWrap