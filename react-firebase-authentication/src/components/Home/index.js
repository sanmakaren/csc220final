import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

      </div>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
