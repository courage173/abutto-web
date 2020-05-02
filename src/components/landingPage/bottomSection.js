import React from 'react'
import TestimonySlider from './testimonySlider/Slider'
import iphone from '../../assets/iphonePic.svg'
import googleplay from '../../assets/googleplay.svg'

const BottomSection = () => {
    const testimonies = [
        {
            name: 'Mrs Adebayo',
            image: '',
            sex: 'female',
            message: 'Nice way to reach out to others in the neigbourhood. I’m glad I signed up for this'
        },
        {
            name: 'Mr Usman yakubu',
            image: '',
            sex: 'male',
            message: 'I really appreciate the help i could receive through this platform'
        },
        {
            name: 'Mrs Nkiru',
            image: '',
            sex: 'female',
            message: 'Nice way to reach out to others in the neigbourhood. I’m glad I signed up for this'
        },
        {
            name: 'Mr Igbinedion',
            image: '',
            sex: 'male',
            message: 'Nice way to reach out to others in the neigbourhood. I’m glad I signed up for this'
        }
    ]
    return (
        <div className='bottom-wrapper'>
            <h5 className='bottom_tittle'>What are Users Saying</h5>
            <div className='testimo_slide' style={{ width: '100%' }}>
                <TestimonySlider data={testimonies} />
            </div>
            <div className='app_download_wrapper'>
                <h5>Get the App</h5>
                <p>share with your loved ones</p>
                <div className='google_apple_store_btn'>
                    <div className='google-btn'>
                        <img src={googleplay} alt='iphone' />
                        <div className='goog_app_text'>
                            <p id='sub_text'>Get it on</p>
                            <p id='sub_text2'>Google Play</p>
                        </div>
                    </div>
                    <div className='apple-btn'>
                        <img src={iphone} alt='iphone' />
                        <div className='goog_app_text'>
                            <p id='sub_text'>Download on the</p>
                            <p id='sub_text2'>App Store</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BottomSection
