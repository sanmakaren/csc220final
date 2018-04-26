import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

import * as routes from '../../constants/routes';

class HomePage extends Component {

  render() {

    return (
      <div>
        <Navigation />
        <button><Link to={routes.WriteEntry}>Click</Link>
        </button>
        <button> <Link to= {routes.Questionnaire}>Form</Link> </button>

      </div>
    );
  }
}




export default HomePage;
