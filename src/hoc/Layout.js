import React from 'react'
import LinkSection from '../components/dashboard/linkSection';
import DashboardHeader from '../components/header_footer/dashboardHeader/DashboardHeader'

const DashboardWrap = (props) => {
    return (
        <div>
            <DashboardHeader />
            <div className='dashboard_wrapper'>
                <LinkSection />
                <div className='dashboard_container'>
                    {props.children}
                </div>
            </div>

        </div>
    )
}

export default DashboardWrap