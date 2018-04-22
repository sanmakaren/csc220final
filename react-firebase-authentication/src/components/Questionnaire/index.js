import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { form, Button } from 'semantic-ui-react';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import WriteEntry from '../WriteEntry';
import { auth, db, form_resp } from '../../firebase';


//form_resp.createResponse('bdslfkjsdlak;j', 50, "heyydflsa;k");


class Questionnaire extends Component {

  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      gender: ''

    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEmailChange (evt) {
    this.setState({ email: evt.target.value });
    console.log(evt.target.value)
  }

  handlePasswordChange (evt) {
    this.setState({ password: evt.target.value });
  }

  handleChange(e) {
    this.setState({ gender: e.target.value });
    console.log(e.target.value)
  }

  render () {
    return (
      <form>

        <label>Email</label>
        <input type="text" name="email" onChange={this.handleEmailChange} />

        <label>Password</label>
        <input type="password" name="password" onChange={this.handlePasswordChange} />

        <label>carr :)</label>
        <select value={this.state.gender} onChange={this.handleChange}>
          <option name="male"> Male</option>
          <option name="female">Female</option>
        </select>

      </form>
    );
  }
}

export default Questionnaire;
