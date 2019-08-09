$(document).ready(function () {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsldtHwaBA2oilsHADtkpgD0ngferxXkY",
    authDomain: "train-schedule-840bf.firebaseapp.com",
    databaseURL: "https://train-schedule-840bf.firebaseio.com",
    projectId: "train-schedule-840bf",
    storageBucket: "",
    messagingSenderId: "258461138286",
    appId: "1:258461138286:web:1e797cffa15bdc7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Create a variable to reference the database.
  var database = firebase.database();
  
  var name = "";
  var destination = "";
  var frequency = 0;
  var nextArrival = "";
  var minsAway = 0;
  var firstTrainTime = "";
  
  
  //Submit button on click
  $("#submit").on("click", function () {
  
    console.log("I've been clicked!");
    
    // grab values from each of the input fields
    name = $("#trainName").val().trim();
    destination = $("#trainDestination").val().trim();
    frequency = $("#trainFrequency").val().trim();
  
    firstTrainTime = $("#trainTime").val().trim();
  
    console.log(name);
    console.log(destination);
    console.log(frequency);
    console.log(firstTrainTime);
  
    //Use moment.js to calcuate train's next arrival and minutes away
    
    // First Time Converted to MomentJS
    var firstTrainMomentJS = moment(firstTrainTime, "HH:mm")
    console.log(firstTrainMomentJS);

    // Current Time
    var currentTime = moment();
    console.log("Time Right Now: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var timeDiff = moment().diff(moment(firstTrainMomentJS), "minutes");
    console.log("Time Difference: " + timeDiff);

    // Time apart (remainder)
    var remainder = timeDiff % frequency;
    console.log("timeDiff % frequency: " + remainder);

    // Minute Until Train
    minsAway = frequency - remainder;
    console.log("Minutes Away: " + minsAway);

    // Next Train
    nextArrival = moment().add(minsAway, "minutes");
    console.log("Next arrival: " + moment(nextArrival).format("hh:mm"));

    //set all 5 of these vars in firebase
  
    //print all train schedule table data using firebase
  
  })

})