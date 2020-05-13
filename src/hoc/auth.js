import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function (ComposedClass, reload, adminRoute = null) {
    class AuthenticationCheck extends Component {

        state = {
            loading: true
        }

        componentWillMount() {

            const authenticated = this.props.user && this.props.user.authenticated

            if (authenticated === false) {
                this.props.history.push('/login')
            } else {
                this.setState({ loading: false })
            }

        }
        render() {
            if (this.state.loading) {
                return (
                    <div className="main_loader">
                        loading
                        {/* <CircularProgress style={{ color: '#2196F3' }} thickness={7} /> */}
                    </div>
                )
            }
            return (
                <ComposedClass {...this.props} user={this.props.user} />
            );
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps, {})(AuthenticationCheck)
}


