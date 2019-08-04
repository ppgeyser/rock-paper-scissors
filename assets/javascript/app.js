// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAv-gQAsrvqsR4TJYS7rMFZbYb_gzrSdqk",
    authDomain: "fir-intro-81eaf.firebaseapp.com",
    databaseURL: "https://fir-intro-81eaf.firebaseio.com",
    projectId: "fir-intro-81eaf",
    storageBucket: "",
    messagingSenderId: "641109107416",
    appId: "1:641109107416:web:c7cf52dd80084057"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database.
var database = firebase.database();