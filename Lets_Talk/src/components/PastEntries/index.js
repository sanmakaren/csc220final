import React from 'react';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';


const PastEntries = () =>
<div>
<Navigation />
<div className="ui horizontal divider">Past Entries</div>
<br/>
<center> <i> <h3>No entries! <Link to={routes.Questionnaire}> Start writing today</Link> </h3> </i>



</center>

</div>

export default PastEntries;
