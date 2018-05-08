import React from 'react';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import './style.css';

/**
 * Past Entries Components displays all the entries that a user has written.
 * Reference to the databases and save json object in key variable
 * Loop through JSON object and print each entry
 */
class PastEntries extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    userID: "",
    entries: [],
  };
}

componentDidMount() {
  /**
   * Reference database and save JSON object in Key variable
   */
  const self = this; // rename this bc of scoping issues.
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
// Remove reference from database
componentWillUnmount() {
  const refEntry = firebase.database().ref('/entry');
  refEntry.off();
}
 // Render entries retrieved from database
 render() {
   const displayEntries = this.state.entries.map((entry) =>
    <p> {entry}</p>
  );
  // Conditional rendering. Render "No Entries" when database empty else display entries
  const noEntry = <i> <h3>No entries! <Link to={routes.Questionnaire}> Start writing today</Link> </h3> </i>

   return (

     <div>
     <Navigation />
     <div className="ui horizontal divider">Past Entries</div>
     <br/>

      <center> <b>{this.state.entries.length === 0 ? noEntry : displayEntries }</b> </center>

     </div>

   );

 }


}
export default PastEntries;
