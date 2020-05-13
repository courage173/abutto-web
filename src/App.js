import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import { getFbUser } from './redux/actions/authAction'

import config from './firebase'
import Routes from './Routes'

function App(props) {
  useEffect(() => {
    firebase.initializeApp(config)
  })



  const token = localStorage.AbuttoToken;
  props.getFbUser(token)

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default connect(null, { getFbUser })(App);


