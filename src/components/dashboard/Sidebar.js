import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSearch, faCog, faTh } from '@fortawesome/free-solid-svg-icons';
import money from '../../assets/money.svg';
import support from '../../assets/support.svg'
import bosky from '../../assets/bosky.png'

class Sidebar extends Component {
    state = {
        links: [
            {
                name: 'Dashboard',
                linkTo: '/dashboard',
                public: false,
                icon: faTh
            },
            {
                name: 'SCHEDULE',
                public: false
            },
            {
                name: 'My Profile',
                linkTo: '/profile',
                public: false,
                icon: faUserCircle
            }
            ,
            {
                name: 'Provide Help',
                linkTo: '/provide_help',
                public: false,
                icon: money
            },
            {
                name: 'Need Help',
                linkTo: '/need_help',
                public: false,
                icon: money
            },
            {
                name: 'OTHERS',
                public: false
            },
            // {
            //     name: 'Search',
            //     linkTo: '/search',
            //     public: false,
            //     icon: faSearch
            // },
            {
                name: 'Settings',
                linkTo: '/settings',
                public: false,
                icon: faCog
            },
            // {
            //     name: 'Support',
            //     linkTo: '/support',
            //     public: false,
            //     icon: support
            // },
            {
                name: 'Logout',
                linkTo: '/logout',
                public: false,
                id: 'logoutLink'
            },

        ],

    }

    displayLinks() {
        return this.state.links.map((link, i) => {
            if (link.name === 'Dashboard') {
                return (
                    <div key={link.name + i} className='dashboardLink'>
                        <div onClick={this.props.close} to={link.linkTo}
                            key={i}><FontAwesomeIcon icon={faTh}
                                style={{ color: 'rgba(55, 80, 178, 0.8)', marginRight: '10px' }} />{link.name}</div>
                    </div>
                )
            }
            else if (link.name === 'OTHERS' || link.name === 'SCHEDULE') {
                return (
                    <div key={link.name + i} className='non_links'>
                        {link.name}
                    </div>
                )
            }
            else if (link.name === 'Logout') {
                return (
                    <NavLink activeStyle={{ color: "#3750B2" }} onClick={this.props.close}
                        id={link.id && link.id} className='links' to={link.linkTo} key={link.name + i} style={{ fontSize: '16px' }}>
                        {link.name}
                    </NavLink>
                )

            }
            else {
                return (
                    <NavLink activeStyle={{ color: "#3750B2" }} onClick={this.props.close} id={link.id && link.id} className='links' to={link.linkTo} key={link.name + i} style={{ marginTop: '18px', fontSize: '16px' }}>
                        {link.icon ? link.name === 'Provide Help' || link.name === 'Need Help' || link.name === 'Support' ?
                            <img src={link.icon} alt='icon' style={{ marginRight: '15px' }} /> :
                            <FontAwesomeIcon icon={link.icon} style={{ marginRight: '20px', color: '#3750B2' }} /> : null} {link.name}
                    </NavLink>
                )
            }
        })
    }
    handleProfile() {
        this.props.history.push('/profile')
    }
    render() {
        //creat an array of classes called styles so it will be easy to add more class
        const style = ['links_wrapper', this.props.isMobile ? 'open_links' : 'close_links']
        return (
            <div className={style.join(' ')}>
                <div className='profile_pic_container'>
                    <div className='profile_image'>
                        <img src={bosky} alt='profile pics' style={{ height: '109px', width: '108px', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                </div>
                <div className='profile_name' style={{ cursor: 'pointer' }} onClick={() => this.handleProfile()}>Jane Doe</div>
                {this.displayLinks()}
            </div>
        )
    }
}

export default withRouter(Sidebar)
