import React from 'react';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';


const SignOutButton = ({ history }) =>
 <button id="left_but"
    type="button"
    onClick={auth.doSignOut}

  >
    <Link to={routes.HomePageLayout}> Sign out </Link>
  </button>




export default SignOutButton;
