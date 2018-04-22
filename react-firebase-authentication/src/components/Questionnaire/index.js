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
      mood:'',
      time: 199,
      writing_style: ''
     };

    this.handleMoodChange = this.handleTimeChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleWritingChange = this.handleWritingChange.bind(this)
  }

  handleMoodChange (evt) {
  this.setState({ mood: evt.target.value });
  console.log(evt.target.value);

  }


  handleTimeChange (evt) {
  this.setState({ time: evt.target.value });
  console.log(evt.target.value);
  }

  handleWritingChange (evt) {
  this.setState({ writing_style: evt.target.value });
  }


  render () {
    return (
      <form>
        <label>mood</label>
        <select value={this.state.mood} onChange={this.handleMoodChange}>
          <option name="happy"> Happy</option>
          <option name="sad">Sad</option>
          <option name = "neutral"> Neutral </option>
          <option name = "na"> Cant </option>
        </select>

        <label>time</label>
        <select value={this.state.time} onChange={this.handleTimeChange}>
          <option name="five"> 5</option>
          <option name="ten">10</option>
          <option name = "fifteen"> 15 </option>
          <option name = "twenty"> 20 </option>
        </select>

        <label>writing</label>
        <select value={this.state.writing_style} onChange={this.handleWritingChange}>
          <option name="free"> free</option>
          <option name="question">question-based</option>
        </select>

        <button type="submit" onClick={() => { form_resp.createResponse(this.state.mood, this.state.time, this.state.writing_style); } }>Submit</button>


      </form>
    );
  }
}

export default Questionnaire;
