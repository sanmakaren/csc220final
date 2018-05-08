import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { form} from 'semantic-ui-react';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import { form_resp } from '../../firebase';
import * as firebase from 'firebase'

/**
 * Questionnaire Component, contains form UI when users submit save the values.
 */
class Questionnaire extends Component {

  constructor () {
    super();
    //States to track Form answers
    this.state = {
      mood:'happy',
      time: 5,
      writing_style: 'question-based',
      userUID: ''
     };

    this.handleMoodChange = this.handleMoodChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleWritingChange = this.handleWritingChange.bind(this);
  }
  // Functions to save values from form.
  handleMoodChange (evt) {
  this.setState({ mood: evt.target.value });
  }
  handleTimeChange (evt) {
  this.setState({ time: evt.target.value });
  }
  handleWritingChange (evt) {
  this.setState({ writing_style: evt.target.value });
  }
  /**
   * When the page loads save the UserID of currentUSER
   * Will be used later to save response for specific user.
   */
  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        //console.log('other mount :)', user.uid); // undefined
        this.setState({userUID: user.uid});
        //console.log(this.state.userUID, 'help');
      }
    });
  }
  /**
  * Form UI
  */
  render () {
    return (
      <div>

      <Navigation/>
      <div className="ui horizontal divider">Questionnaire</div>

      <form>
      <b><label> Select Mood: </label> </b>
      <select value={this.state.mood} onChange={this.handleMoodChange} className="ui dropdown" id="select">
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="neutral">Neutral</option>
      </select>
      </form>

      <form>
      <b>  <label> Select Time: </label> </b>
        <select value={this.state.time} onChange={this.handleTimeChange} className="ui dropdown" id="select">
          <option value = {5} > 5 min </option>
          <option value = {10} >10 min</option>
          <option value = {15} > 15 min </option>
          <option value = {20} > 20 min </option>
        </select>
        </form>

        <form>
        <b> <label>Select Writing Style: </label> </b>
        <select value={this.state.writing_style} onChange={this.handleWritingChange} className="ui dropdown" id="select">
          <option value = "question-based">question based</option>
          <option value = "freewriting"> freewriting</option>

        </select>
        </form>
        <br />

        <Link className="ui primary basic button" onClick={() => { form_resp.entryResponse(this.state.mood, this.state.time, this.state.writing_style, this.state.userUID)} } to={routes.WriteEntry}> Submit </Link>
        </div>
    );
  }
}

export default Questionnaire;
