import React from 'react'
import { Link } from 'react-router-dom'
import './footerStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div>
                <div className='footer_site_name'>
                    2020 Abutto
                </div>
            </div>
            <div className='home_service_wrapper'>
                <div className='home_container'>
                    <div style={{ fontWeight: 'bold' }}>Home</div>
                    <div><Link to='about'>About</Link></div>
                    <div><Link to='blog'>Blog</Link></div>
                    <div><Link to='services'>Services</Link></div>
                    <div><Link to='support'>Support</Link></div>
                    <div><Link to='contact'>Contact</Link></div>
                </div>
                <div className='home_container'>
                    <div style={{ fontWeight: 'bold' }}>Services</div>
                    <div><Link to='provide_help'>Provide Help</Link></div>
                    <div><Link to='donations'>Donations</Link></div>
                    <div><Link to='doctor'>See a doctor</Link></div>
                </div>
                <div className='home_container'>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>Contact</div>
                        <div>23 Abdul Rasheed Plaza, <br />Wuse 2 Abuja</div>
                    </div>
                    <div>
                        <a href='www.twitter.com'><FontAwesomeIcon icon={faTwitter} /></a>
                        <Link to='www.facebook.com'><FontAwesomeIcon icon={faFacebook} style={{ marginLeft: '10px' }} /></Link>
                        <Link to='www.instagram.com'><FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '10px' }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
