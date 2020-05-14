import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { getFbUser } from '../redux/actions/authAction'

export default function (ComposedClass, reload, adminRoute = null) {
    class AuthenticationCheck extends Component {

        state = {
            loading: true
        }

        componentDidMount() {

            this.props.getFbUser().then((() => {
                const authenticated = this.props.user && this.props.user.authenticated
                if (authenticated === false) {
                    this.props.history.push('/login')
                }
                if (authenticated === true) {
                    this.setState({ loading: false })
                }
                console.log(authenticated)
            }))

        }
        render() {
            if (this.state.loading) {
                return (
                    <div className="main_loader">
                        <FontAwesomeIcon style={{ color: '#3750B2' }} icon={faSpinner} spin />
                        {/* <CircularProgress style={{ color: '#2196F3' }} thickness={7} /> */}
                    </div>
                )
            } else {
                return (
                    <ComposedClass {...this.props} user={this.props.user} />
                );
            }

        }
    }

    function mapStateToProps(state) {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps, { getFbUser })(AuthenticationCheck)
}


