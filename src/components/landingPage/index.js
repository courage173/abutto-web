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

  const [isOpen, handleOpen] = useState(false)
  const [needModal, setModal] = useState(false)
  const [provideHelp, setModalToOpen] = useState(false)
  /*
   this function toggles the modal, it takes 2 argument one to change the 
  modal state value and the other check which modal to toggle. the second
  check 'close' is so the backdrop can work on any of the modal, hope to
  refactor modal component to resuable component
  */
  const handleModal = (p, value) => {
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
        <Header action={() => handleOpen(!isOpen)} />
      </div>
      <div>
        <div className='page_container'>
          {needModal || provideHelp ? <Backdrop
            show={needModal || provideHelp}
            click={() => handleModal('close', false)}

          /> : null}
          <NeedHelpModal modal={needModal} close={() => handleModal('need', false)} />
          <ProvideHelpModal modal={provideHelp} close={() => handleModal('provide', false)} />


          <TopSection isOpen={isOpen} />
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
