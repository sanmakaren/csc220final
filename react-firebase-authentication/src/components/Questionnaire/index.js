import React from 'react';
import { form, Button } from 'semantic-ui-react';

const Questionnaire = () =>
<div>
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
  <select name="skills" multiple="" class="ui fluid dropdown">
  <option value="Free Writing">Free Write</option>
  <option value="Question-based"> Question-Based</option>
  </select>
  </div>
</div>
<Button primary>Submit</Button>


</form>

</div>


export default Questionnaire;
