import React from 'react'
import './landingPage.css'

const LandingPage = () => {
    return (

           <div className='wrapper'>
              <div style={{height: '70vh', marginTop: '250px'}} >
                  <div className='text_wrapper'>
                    <p>With Unity we can reach out to<br/> each other in the community</p>

                  </div>
                    
                  <div className='get_btn_wrap'>Get Started</div> 

                  
              </div>
              
              <div >
              <div className='google_apple_store_btn'>
                    <div className='apple-btn'></div>
                    <div className='google-btn'></div>
                  </div>
              </div>
           </div>
       
    )
}

export default LandingPage
