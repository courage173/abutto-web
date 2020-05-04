import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout'
import LandingPage from './components/landingPage'
import Register_login from './components/login_register';
import Help from './components/dashboard/provide_need_help';
import Profile from './components/dashboard/profile/profile'


const Routes = () => {
    return (


        <Switch>
            <Route path="/login" exact component={Register_login} />
            <Route path="/" exact component={LandingPage} />
            <Layout>
                <Route path="/dashboard" exact component={Help} />
                <Route path="/profile" exact component={Profile} />
            </Layout>
        </Switch>

    )
}

export default Routes
