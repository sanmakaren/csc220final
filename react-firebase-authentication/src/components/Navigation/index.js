import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const name = "Let's Talk"
const NavigationAuth = () =>
<div id="navigation" className="Navigation">
<nav>
  <ul>
    <li><Link to={routes.LANDING}> {name} </Link></li>
    <li><Link to={routes.HOME}>Journal</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>
  </nav>
  </div>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>{name}</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;
