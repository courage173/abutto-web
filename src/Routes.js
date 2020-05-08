import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout'
import LandingPage from './components/landingPage'
import RegisterLogin from './components/login_register';
import NeedHelp from './components/dashboard/provide_need_help/NeedHelp';
import ProvideHelp from './components/dashboard/provide_need_help/ProvideHelp';
import Profile from './components/dashboard/profile/profile'
import Login from './components/login_register/login/Login';
import Register from './components/login_register/register/Register';
import Setting from './components/dashboard/setting/Setting'

const Routes = () => {
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
            <Layout>
                <Route exact path="/need_help" component={NeedHelp} />
                <Route exact path="/provide_help" component={ProvideHelp} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/settings" exact component={Setting} />
            </Layout>
        </Switch>

    )
}


export default Routes
