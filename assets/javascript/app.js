$(document).ready(function () {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsldtHwaBA2oilsHADtkpgD0ngferxXkY",
    authDomain: "train-schedule-840bf.firebaseapp.com",
    databaseURL: "https://train-schedule-840bf.firebaseio.com",
    projectId: "train-schedule-840bf",
    storageBucket: "",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create a variable to reference the database.
  var database = firebase.database();

  var name = "";
  var destination = "";
  var frequency = 0;
  var firstTrainTime = "";
  var minsAway = 0;
  var nextArrival = "";

  //Submit button on click
  $("#submit").on("click", function () {

    console.log("I've been clicked!");

    $("tbody").empty();

    // grab values from each of the input fields
    name = $("#trainName").val().trim();
    destination = $("#trainDestination").val().trim();
    frequency = $("#trainFrequency").val().trim();
    firstTrainTime = $("#trainTime").val().trim();

    console.log(name);
    console.log(destination);
    console.log(frequency);
    console.log(firstTrainTime);

    //set all 4 of these vars in firebase
    database.ref().push({
      name: name,
      destination: destination,
      frequency: frequency,
      firstTrainTime: firstTrainTime
    })

    $("#trainName").val("")
    $("#trainDestination").val("")
    $("#trainFrequency").val("")
    $("#trainTime").val("")
  });

  updateSchedule();

  //Set interval to 60 secs and run update schedule for all trains in firebase
  function updateSchedule() {
    setInterval(function () {

      $("tbody").empty();

      firebase.database().ref().on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          printSchedule(childSnapshot);
        });
      });

    }, 1000);
  }

  //Pull from firebase and use momentjs to calculate next arrival and minutes away
  function printSchedule(childSnapshot) {

    //Use moment.js to calcuate train's next arrival and minutes away
    firstTrainTime = childSnapshot.val().firstTrainTime

    // First Time Converted to MomentJS
    var firstTrainMomentJS = moment(firstTrainTime, "HH:mm").subtract(1, "years");

    // Current Time
    var currentTime = moment();

    // Difference between the times
    var timeDiff = moment().diff(moment(firstTrainMomentJS), "minutes");

    // Time apart (remainder)
    var remainder = timeDiff % childSnapshot.val().frequency;

    // Minute Until Train
    minsAway = childSnapshot.val().frequency - remainder;

    // Next Train
    nextArrival = moment().add(minsAway, "minutes");
    nextArrival = moment(nextArrival).format("h:mm a")

    $("tbody").append(
      "<tr>" +
      "<td>" + childSnapshot.val().name + "</td>" +
      "<td>" + childSnapshot.val().destination + "</td>" +
      "<td>" + childSnapshot.val().frequency + "</td>" +
      "<td>" + nextArrival + "</td>" +
      "<td>" + minsAway + "</td>" +
      "</tr>"
    )
  }

})