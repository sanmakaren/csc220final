import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { form, Button } from 'semantic-ui-react';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import WriteEntry from '../WriteEntry';
import { auth, db } from '../../firebase';


const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  mood:'',
  time: 0,
  writing_style: ''

};


class Questionnaire extends Component {

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;


    //More
  }

  render() {

    return(
      <div>
      <div>
      <Navigation />
        <div class="ui horizontal divider">Questionnaire</div>
        <form class="ui form segment">
        <div class="two fields">

        <div class="field">
          <label>How are you feeling today?</label>
          <select class="ui dropdown" name="feeling">
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Neutral"> Neutral </option>
            <option value="na">{"Can't describe it"}</option>
          </select>
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>How long do you want to write?</label>
           <select class="ui dropdown" name="time">
            <option value="five"> 5 minutes</option>
            <option value="ten"> 10 minutes</option>
            <option value="fifteen"> 15 minutes </option>
            <option value="twenty"> 20 minutes </option>
            <option value="thirty">30 minutes </option>
          </select>
        </div>

      </div>
      <div class="two fields">
        <div class="field">
        <label>Writing Style</label>
        <select name="Free_Writing" multiple="" class="ui fluid dropdown"  >
        <option value="Free_Writing">Free Write</option>
        <option value="Question-based"> Question-Based</option>
        </select>
        </div>
      </div>
      <Button> <Link to={routes.WriteEntry}> Submit </Link></Button>

      </form>
      </div>

      </div>
    );
  }




}




export default Questionnaire;
