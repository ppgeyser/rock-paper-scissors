// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCsldtHwaBA2oilsHADtkpgD0ngferxXkY",
    authDomain: "train-schedule-840bf.firebaseapp.com",
    databaseURL: "https://train-schedule-840bf.firebaseio.com/",
    projectId: "train-schedule-840bf",
    storageBucket: "",
    messagingSenderId: "258461138286",
    appId: "1:258461138286:web:1e797cffa15bdc7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database.
var database = firebase.database();

 //Submit button on click
  //cancel default behavior so that page doesn't reset

  //grab values from each of the input fields

    //Make vars for train name, destination, and frequency

    //Use moment.js to calcuate train's next arrival and minutes away
    //make vars for these values

    //set all 5 of these vars in firebase

  //print all train schedule table data using firebase