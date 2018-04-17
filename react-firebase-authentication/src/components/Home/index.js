import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

class HomePage extends Component {

  render() {

    return (
      <div>
        <button><Link to={routes.WriteEntry}>Click</Link>
        </button>

        <button> <Link to= {routes.Questionnaire}>Form</Link> </button>

      </div>
    );
  }
}




export default HomePage;
