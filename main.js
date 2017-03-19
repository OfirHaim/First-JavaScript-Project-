// // fonction to get random number 
// function rand(max) { 
//     return Math.floor(Math.random() * max)
// }
// function changeColor() {
//     var col = document.getElementById("changecolor");
//     const color = `rgb(${rand(256)},${rand(256)},${rand(256)})`
//     console.log({color})
//     col.style.backgroundColor =  color
// }
  
  // Initialize Firebase

  
  var config = {
    apiKey: "AIzaSyB9NgmNvhNwX-SQWVzdp_s26i9APZQCEUk",
    authDomain: "ofir-javascript.firebaseapp.com",
    databaseURL: "https://ofir-javascript.firebaseio.com",
    storageBucket: "ofir-javascript.appspot.com",
    messagingSenderId: "619283900405"
  };
  firebase.initializeApp(config);

  const database = firebase.database().ref('name')
  database.set({
    name: 'ofir' 
  })
  document.getElementById('console')

