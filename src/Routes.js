import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout'
import LandingPage from './components/landingPage'
import RegisterLogin from './components/login_register';
import Help from './components/dashboard/provide_need_help';
import Profile from './components/dashboard/profile/profile'
import Login from './components/login_register/login/Login';
import Register from './components/login_register/register/Register'

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
                <Route exact path="/dashboard" component={Help} />
                <Route path="/profile" exact component={Profile} />
            </Layout>
        </Switch>

    )
}


export default Routes
