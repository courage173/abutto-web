import React, { useState } from 'react';
import './landingPage.css'
import TopSection from './topSection'
import MiddleSection from './middleSection';
import BottomSection from './bottomSection';
import Header from '../header_footer/header'
import Footer from '../header_footer/footer/footer'
import NeedHelpModal from './need_provide_help_modal/NeedHelpModal'
import Backdrop from './backdrop/Backdrop'
import ProvideHelpModal from './need_provide_help_modal/ProvideHelp'

const LandingPage = () => {

  const [needModal, setModal] = useState(false)
  const [provideHelp, setModalToOpen] = useState(false)
  const handleModal = (p, value) => {
    console.log(p, value)
    if (p === 'need' || p === 'close') {
      setModal(value)
    }
    if (p === 'provide' || p === 'close') {
      setModalToOpen(value)
    }

  }




  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className='page_container'>
          {needModal || provideHelp ? <Backdrop
            show={needModal || provideHelp}
            click={(p) => handleModal('close', false)}

          /> : null}
          <NeedHelpModal modal={needModal} />
          <ProvideHelpModal modal={provideHelp} />


          <TopSection />
          <MiddleSection
            click={(m, value) => handleModal(m, value)}
          />
          <BottomSection />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
