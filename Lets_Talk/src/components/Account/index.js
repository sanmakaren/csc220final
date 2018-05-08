import React from 'react';
import Navigation from '../Navigation';
import AuthUserContext from '../Session/AuthUserContext';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

/**
 * Change password or Reset. 
 */
const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <Navigation />
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
