import React from 'react';
import { Link } from 'react-router-dom';
import './mobileNav.css'

function MobileNav(props) {
    const styles = ['mobile-nav', props.open ? 'nav-open' : 'nav-close']
    return (
        <div className={styles.join(' ')}>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    )
}

export default MobileNav
