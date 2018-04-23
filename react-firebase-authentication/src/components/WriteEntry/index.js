import React from 'react';
import './style.css';
import Navigation from '../Navigation';
import data from  '../../prompts.json';
import { auth, db, form_resp} from '../../firebase';
import * as firebase from 'firebase';
import ReactCountdownClock from 'react-countdown-clock';

const number = Math.floor(Math.random() *data.length)

class CountDownTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
     seconds: 989 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

  }



  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    //this.setState({ time: timeLeftVar });

    const ref = firebase.database().ref('/form_resp');
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          ref.on("value", function(snapshot) {
            const snap = snapshot.val();
            var key = Object.keys(snapshot.val());

            for (let i = 0; i < key.length; i++) {
              if(snap[key[i]].userUID == user.uid){
                console.log(snap[key[i]].time * 60);

                if (snap[key[i]].time != null){
                  console.log('not null')
                  //this.state.seconds = snap[key[i]].time * 60;
                  //console.log(this.secondsToTime(snap[key[i]].time * 60));
                  //this.setState({time: this.secondsToTime(this.state.seconds)});
                }




              }
            }

          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });

        }
      });

      this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return(
      <div>
        {/*<button onClick={this.startTimer}>Start</button>*/}

        {this.startTimer()}

        <h1>m: {this.state.time.m} s: {this.state.time.s}</h1>
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class WriteEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userUID: '',
      time: 60
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

    const ref = firebase.database().ref('/form_resp');
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          ref.on("value", function(snapshot) {
            const snap = snapshot.val();
            var key = Object.keys(snapshot.val());

            for (let i = 0; i < key.length; i++) {
              if(snap[key[i]].userUID == user.uid){
                console.log(snap[key[i]].mood, snap[key[i]].time, snap[key[i]].writing_style);
                // this.state.time = snap[key[i]].time * 60;
              }
            }

          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });

        }
      });

  }




  render() {
    return (

      <div>

      <Navigation />

       <Welcome name = "sara" />


      <form onSubmit={this.handleSubmit}>

      <h1> {data[number]["prompt"]}</h1>
      <center>
        <label>
          Essay:
    <textarea rows="4" cols="100" value={this.state.value} onChange={this.handleChange}  name="textarea" />
        </label>
        <input type="submit" value="Submit" />

        </center>
      </form>

      <ReactCountdownClock seconds={this.state.time}
                     color="#000"
                     alpha={0.9}
                     size={100} />

      </div>

    );
  }
}
export default WriteEntry;
