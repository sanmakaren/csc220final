import React from 'react';
import { auth } from '../../firebase';

const SignOutButton = () =>
  <button id="left_but"
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>




export default SignOutButton;
