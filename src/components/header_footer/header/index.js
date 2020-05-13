import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.css'
import { Link, withRouter } from 'react-router-dom';

import MyButton from '../../utils/button/Button'
import { logout } from '../../../redux/actions/authAction'


class Header extends Component {

    state = {
        links: [
            {
                name: 'ABOUT',
                linkTo: '/about',
                public: true
            },
            {
                name: 'BLOG',
                linkTo: '/blog',
                public: true
            },
            {
                name: 'SERVICES',
                linkTo: '/blog',
                public: true
            },
            {
                name: 'SUPPORT',
                linkTo: '/support',
                public: true
            },
            {
                name: 'CONTACT',
                linkTo: '/contact',
                public: true
            },


        ],
        pages: [
            {
                name: 'Register',
                linkTo: '/register',
                public: true
            },
            {
                name: 'Login',
                linkTo: '/login',
                public: true
            },
            {
                name: 'Logout',
                public: true
            }
        ]
    }


    handleLogout = () => {
        this.props.logout().then(() => {
            this.props.history.push('/login')
        })
    }

    showLink(links) {
        let list = []
        //will do a check if the user is authenticated or not to display private routes
        //will implement if login api's are available


        const authenticated = this.props.user ? this.props.user.authenticated : false

        links.forEach((item) => {
            if (item.public) {
                list.push(item)
            } else {
                //
            }
        })
        return list.map((item, i) => {
            //check if link is register or login 
            if (item.name === "Register" || item.name === "Login") {
                return !authenticated ? <div key={item.name + i} className='reg_reg_btn'><Link className='reg_reg_link' to={item.linkTo} key={i}>{item.name}</Link></div> : null
            } else if (item.name === "Logout") {
                return authenticated ? <MyButton
                    type='btn'
                    title={item.name}
                    runAction={this.handleLogout}
                    sty={{ fontWeight: 'bold', fontSize: '15px', width: '71px', marginTop: '0', marginRight: '0px', boxShadow: 'none', cursor: 'pointer' }}
                /> : null
            } else {
                return <Link key={item.name + i} className='links' to={item.linkTo}>
                    {item.name}
                </Link>
            }
        })
    }
    render() {
        const { action } = this.props
        return (

            <header>
                <div className='container'>
                    <div>
                        <div className='logo'>
                            Abutto
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBars} className='landing_page_menu_bar' onClick={action} />
                    </div>
                    <div className='link_container' style={{ width: '50%' }}>
                        <div className='link-wrapper'>
                            {this.showLink(this.state.links)}
                        </div>
                    </div>
                    <div className='reg_log'>
                        <div className='log_reg_btn_wrap'>
                            {this.showLink(this.state.pages)}
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps, { logout })(withRouter(Header))
