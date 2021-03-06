import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { form} from 'semantic-ui-react';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import { form_resp } from '../../firebase';
import * as firebase from 'firebase'




class Questionnaire extends Component {

  constructor () {
    super();


    this.state = {
      mood:'happy',
      time: 5,
      writing_style: 'question-based',
      userUID: ''
     };

    this.handleMoodChange = this.handleMoodChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleWritingChange = this.handleWritingChange.bind(this);
    //this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleMoodChange (evt) {
  this.setState({ mood: evt.target.value });

  }


  handleTimeChange (evt) {
  this.setState({ time: evt.target.value });
  }

  handleWritingChange (evt) {
  this.setState({ writing_style: evt.target.value });
  }



  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        //console.log('other mount :)', user.uid); // undefined
        this.setState({userUID: user.uid});
        //console.log(this.state.userUID, 'help');
      }
    });
  }


  render () {
    return (
      <div>

      <Navigation/>
      <div class="ui horizontal divider">Questionnaire</div>


      <form>
      <b> <label>MOOD </label> </b>
      <select value={this.state.mood} onChange={this.handleMoodChange}  class="ui dropdown" id="select">
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="neutral">Neutral</option>
      </select>
      </form>



        <form>
        <b> <label>TIME </label> </b>
        <select value={this.state.time} onChange={this.handleTimeChange}  class="ui dropdown" id="select">
          <option value = {5} > 5 min </option>
          <option value = {10} >10 min</option>
          <option value = {15} > 15 min </option>
          <option value = {20} > 20 min </option>
        </select>
        </form>

        <form>
        <b> <label>WRITING STYLE </label> </b>
        <select value={this.state.writing_style} onChange={this.handleWritingChange}   class="ui dropdown" id="select">
          <option value = "question-based">question based</option>
          <option value = "freewriting"> freewriting</option>

        </select>
        </form>
        <br />

        <Link class="ui primary basic button" onClick={() => { form_resp.createResponse(this.state.mood, this.state.time, this.state.writing_style, this.state.userUID)} } to={routes.WriteEntry}> Submit </Link>
        </div>
    );
  }
}

export default Questionnaire;
