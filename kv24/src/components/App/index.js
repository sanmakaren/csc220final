import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import WriteEntry from '../WriteEntry';
import Questionnaire from '../Questionnaire';
import HomePageLayout from '../HomePageLayout';

import './index.css';

// Display the following routes on the page when clicked
const App = () =>
  <Router>
    <div className="app">
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.WriteEntry} component={() => <WriteEntry /> } />
      <Route exact path={routes.Questionnaire} component={() => <Questionnaire /> } />
      <Route exact path={routes.HomePageLayout} component={() => <HomePageLayout />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />

    </div>
  </Router>

export default withAuthentication(App);
