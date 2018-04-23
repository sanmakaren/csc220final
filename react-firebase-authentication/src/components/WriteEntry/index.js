import React from 'react';
import './style.css';
import Navigation from '../Navigation';
import data from  '../../prompts.json';
import { auth, db, form_resp} from '../../firebase';
import * as firebase from 'firebase';
import ReactCountdownClock from 'react-countdown-clock';
import { form, Button } from 'semantic-ui-react';



class WriteEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      seconds: 0,
      mood: '',
      writing_style: '',
      select: 0,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }


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
      const ref = firebase.database().ref('/form_resp');
      ref.off();
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
                         size={100}/>

          <center>

              <label> Essay:  </label>

              <textarea
               rows="4"
               cols="100"
               value={this.state.value}
               onChange={this.handleChange} />

              <input type="submit" value="Submit" />

          </center>
        </form>

      </div>

    );
  }
}
export default WriteEntry;
