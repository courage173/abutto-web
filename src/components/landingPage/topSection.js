import React from 'react';
import MobileNav from './mobileNav'

const TopSection = ({ isOpen }) => {

    return (
        <div className='page_wrapper'>
            <div className='mobile_nav_container'>
                <MobileNav open={isOpen} />
            </div>
            <div className='wrapper'>
                <div className='top_content_wrapper' style={{ height: '70vh', marginTop: '250px' }} >
                    <div className='text_wrapper'>
                        <p>With Unity we can reach out to<br /> each other in the community</p>
                    </div>
                    <div className='get_btn_wrap'>Get Started</div>
                    <div className='how_it_works_btn'>How it works</div>
                </div>

                {/* <div >
                    
                </div> */}
            </div>
        </div>
    )
}

export default TopSection
