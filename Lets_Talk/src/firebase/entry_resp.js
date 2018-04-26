import {entry_resp} from './firebase';

export const createResponse = (entry, userUID) =>
    entry_resp.push({entry, userUID});

export const getResponse = () =>
    entry_resp.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });