import React from 'react';
import './style.css';
import Navigation from '../Navigation';
import data from  '../../prompts.json';
import { auth, db, form_resp } from '../../firebase';




const hel = form_resp.getResponse();

const number = Math.floor(Math.random() *data.length)

class CountDownTimer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 61 };
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
      value: ''
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





  render() {
    return (

      <div>

      <Navigation />

       <Welcome name = "sara" />


       <CountDownTimer/>

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


      </div>

    );
  }
}
export default WriteEntry;
