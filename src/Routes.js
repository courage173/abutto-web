import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout'
import LandingPage from './components/landingPage'


const Routes = () => {
    return (
        
           <Layout>
               <Switch>
                  <Route path="/" exact component={LandingPage}/>
               </Switch>
           </Layout>
    )
}

export default Routes
