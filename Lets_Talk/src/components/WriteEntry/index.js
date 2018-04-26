import React from 'react';
import './style.css';
import Navigation from '../Navigation';
import data from  '../../prompts.json';
import * as firebase from 'firebase';
import ReactCountdownClock from 'react-countdown-clock';
import { form} from 'semantic-ui-react';
import { entry_resp } from '../../firebase';

//User's Questionnaire responses create the entry page
class WriteEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      seconds: 0,
      mood: '',
      writing_style: '',
      select: 0,
        userID: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);

  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleDate(){

      const date = new Date();
      //Save the time the journal entry was written.
      const monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
      ];

      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      return  day + ' ' + monthNames[monthIndex] + ' ' + year;

  }

  handleSubmit(event) {

      // Save Entry in firebase
      const date = this.handleDate();

      const entry = "Your mood was: " + this.state.mood +  "\n" +
          "Your question was: " + data[this.state.select]["prompt"] + "\n" +
          "Today is: " + date + "\n" +
          "Your response: " + this.state.value;


    entry_resp.createResponse(entry, this.state.userID );

    this.setState({value: ''});

    event.preventDefault();

  }

  // Take response from Questionnaire and display
  componentDidMount() {

    const self = this;

    const ref = firebase.database().ref('/form_resp');
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          ref.on("value", function(snapshot) {

            const snap = snapshot.val();
            const key = Object.keys(snapshot.val());

            let fbasetime = 0;
            let fbasemood = '';
            let fbasestyle = '';

            for (let i = 0; i < key.length; i++) {
              if(snap[key[i]].userUID === user.uid){
                fbasetime = snap[key[i]].time * 60;
                fbasemood = snap[key[i]].mood;
                fbasestyle = snap[key[i]].writing_style;
              }
            }

            self.setState({mood: fbasemood});
            self.setState({writing_style: fbasestyle});
            self.setState({seconds: fbasetime});
            self.setState({userID: user.uid });

            if (fbasestyle === 'question-based'){
            let question_number = [];
              for (let i = 0; i < data.length; i++) {
                if (data[i]["mood"] === fbasemood ) {
                  question_number.push(i);

                }
              }
              self.setState({select: question_number[Math.floor(Math.random() * question_number.length)]})
            }

          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });

        }
      });
    }

    componentWillUnmount() {
      const refForm = firebase.database().ref('/form_resp');
      refForm.off();

      const refEntry = firebase.database().ref('/entry');
      refEntry.off();
    }


  render() {

    return (

      <div>

        <Navigation />

        <div class="ui horizontal divider">Writing Entry </div>

        <form onSubmit={this.handleSubmit}>

          <h1> {data[this.state.select]["prompt"]}</h1>
          <ReactCountdownClock seconds={this.state.seconds}
                             color="#abcdef"
                             alpha={0.9}
                             size={90}/>
          <br/>
          <center>

              <textarea
               rows="25"
               cols="60"
               value={this.state.value}
               onChange={this.handleChange} />


              <center> <input type="submit" value="Submit" /> </center>

          </center>
        </form>

      </div>

    );
  }
}
export default WriteEntry;
