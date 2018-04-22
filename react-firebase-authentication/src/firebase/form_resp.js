import { form_resp } from './firebase';

export const createResponse = (mood, time, writing_style) =>
  form_resp.push({mood, time, writing_style});

export const getResponse = () =>
    form_resp.on("value", function(snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
