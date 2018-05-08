import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

/**
 * Navigation Bar -- Check if User is signed in. If yes, display specific navbar options.
 */
const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

  /**
   * Navigation Bar -- USER is SIGNED IN
   */
const name = "Let's Talk"
const NavigationAuth = () =>
<div id="navigation" className="Navigation">
 <nav>
  <ul>
    <li><Link to={routes.HomePageLayout}> {name} </Link></li>
    <li><Link to={routes.Questionnaire}>Journal</Link></li>
    <li><Link to={routes.PastEntries}>Past Entries</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <SignOutButton />

  </ul>
  </nav>

  </div>

  /**
   * Navigation Bar -- USER is NOT SIGNED IN 
   */

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.HomePageLayout}>{name}</Link></li>
    {/* Render One page and not another*/}
  </ul>

export default Navigation;
