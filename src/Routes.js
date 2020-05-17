import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFbUser } from './redux/actions/authAction'

import Auth from './hoc/auth'
import LandingPage from './components/landingPage'
import RegisterLogin from './components/login_register';
import NeedHelp from './components/dashboard/provide_need_help/NeedHelp';
import ProvideHelp from './components/dashboard/provide_need_help/ProvideHelp';
import Profile from './components/dashboard/profile/profile'
import Login from './components/login_register/login/Login';
import Register from './components/login_register/register/Register';
import Setting from './components/dashboard/setting/Setting'




const Routes = (props) => {

    const { getFbUser } = props
    useEffect(() => {
        getFbUser()
    })
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact>
                <RegisterLogin>
                    <Login />
                </RegisterLogin>
            </Route>
            <Route path="/register" exact>
                <RegisterLogin>
                    <Register />
                </RegisterLogin>
            </Route>
            <Route exact path="/need_help" component={Auth(NeedHelp)} />
            <Route exact path="/provide_help" component={Auth(ProvideHelp)} />
            <Route path="/profile" exact component={Auth(Profile)} />
            <Route path="/settings" exact component={Auth(Setting)} />
        </Switch>

    )
}


export default connect(null, { getFbUser })(Routes)
