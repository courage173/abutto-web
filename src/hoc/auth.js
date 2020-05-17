import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { getFbUser } from '../redux/actions/authAction'

export default function (ComposedClass) {
    class AuthenticationCheck extends Component {

        state = {
            loading: true
        }

        componentDidMount() {

            this._checkAndRedirect();

        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        _checkAndRedirect() {
            const authenticated = this.props.user && this.props.user.authenticated

            if (authenticated === false) {
                this.props.history.push('/login')
            }
        }

        render() {
            const authenticated = this.props.user && this.props.user.authenticated

            if (!authenticated) {
                return (
                    <div className="main_loader">
                        <FontAwesomeIcon style={{ color: '#3750B2' }} icon={faSpinner} spin />

                    </div>
                )
            } else {
                return (
                    <ComposedClass {...this.props} user={this.props.user} />
                );
            }

        }
    }


    AuthenticationCheck.propTypes = {
        authenticated: PropTypes.bool
    };


    function mapStateToProps(state) {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps, { getFbUser })(AuthenticationCheck)
}


