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
      mood:'happy',
      time: 5,
      writing_style: 'question-based'
     };

    this.handleMoodChange = this.handleMoodChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleWritingChange = this.handleWritingChange.bind(this)
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


  render () {
    return (
      <div>


      <form>
      <label>sad car</label>
      <select value={this.state.mood} onChange={this.handleMoodChange} >
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="neutral">Neutral</option>
      </select>
      </form>



        <form>
        <label>time</label>
        <select value={this.state.time} onChange={this.handleTimeChange}>
          <option value = {5} > 5 min </option>
          <option value = {10} >10 min</option>
          <option value = {15} > 15 min </option>
          <option value = {20} > 20 min </option>
        </select>
        </form>

        <form>
        <label>writing</label>
        <select value={this.state.writing_style} onChange={this.handleWritingChange}>
          <option value = "question-based">question based</option>
          <option value = "freewriting"> freewriting</option>

        </select>
        </form>

        
        <Link onClick={() => { form_resp.createResponse(this.state.mood, this.state.time, this.state.writing_style)} } to={routes.WriteEntry}> Submit </Link>
        </div>
    );
  }
}

export default Questionnaire;
