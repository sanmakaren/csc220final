import React from 'react';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import './style.css';


class PastEntries extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    userID: "",
    entries: [],
  };
}

componentDidMount() {

  const self = this;

  const ref = firebase.database().ref('/entry');
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        ref.on("value", function(snapshot) {

          const snap = snapshot.val();
          const key = Object.keys(snapshot.val());


          for (let i = 0; i < key.length; i++) {
            if(snap[key[i]].userUID === user.uid){
              const temp = self.state.entries;
              temp.push(snap[key[i]].entry);
              self.setState({entries: temp});

            }
            console.log(self.state.entries);
          }
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });

      }
    });
    console.log(self.state.entries)

  }


componentWillUnmount() {
  const refEntry = firebase.database().ref('/entry');
  refEntry.off();
}



 render() {
   const displayEntries = this.state.entries.map((entry) =>
    <p> {entry}</p>
  );

   return (

     <div>
     <Navigation />
     <div className="ui horizontal divider">Past Entries</div>
     <br/>
     <center> <i> <h3>No entries! <Link to={routes.Questionnaire}> Start writing today</Link> </h3> </i>
     {displayEntries}
     </center>


     </div>





   );

 }


}



export default PastEntries;
