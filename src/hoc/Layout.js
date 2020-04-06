import React from 'react'
import Header from '../components/header_footer/header'

const Layout = (props) => {
    return (
        <div>
            <div>
               <Header />
            </div>
            
            <div className='page_container'>
               {props.children}
            </div>
        </div>
    )
}

export default Layout
