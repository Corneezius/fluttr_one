// Initialize Firebase
var config = {
  apiKey: "AIzaSyDm-Xx4dmgwxplO9xqOikUWSCVfBw0nChE",
  authDomain: "fluttr1-1b62b.firebaseapp.com",
  databaseURL: "https://fluttr1-1b62b.firebaseio.com",
  projectId: "fluttr1-1b62b",
  storageBucket: "fluttr1-1b62b.appspot.com",
  messagingSenderId: "507931504645"
};
firebase.initializeApp(config);


var signupBtn = document.getElementById('submit');
var signupForm = document.getElementById('signup-form');
var signupSuccess = document.getElementById('signup-success');
var signupError = document.getElementById('signup-error');

var onSignupComplete = function(error) {
  var userEmail = document.getElementById('email').value;

  signupError.innerHTML = '';
  signupSuccess.innerHTML = '';
  if (userEmail.includes("@")) {
    signupSuccess.innerHTML = 'Thanks for signing up!';
  } else {
    document.getElementById("email").value = "";
    signupError.innerHTML = 'Please make sure you have entered e-mail correctly.';
    return false;
  }
  document.getElementById("email").value = "";
};

var form = document.getElementById("signup-form");

function handleForm(event) {
  // prevent page reload
  event.preventDefault();
  var userEmail = document.getElementById('email').value;
  var myFirebaseRef = firebase.database().ref();
  myFirebaseRef.push({
    email: userEmail,
  }, onSignupComplete);
  return false;
}

form.addEventListener('submit', handleForm);