// // fonction to get random number 
// // function rand(max) { 
// //     return Math.floor(Math.random() * max)
// // }
// // function changeColor() {
// //     var col = document.getElementById("changecolor");
// //     const color = `rgb(${rand(256)},${rand(256)},${rand(256)})`
// //     console.log({color})
// //     col.style.backgroundColor =  color
// // }

// // document.addEventListener("DOMContentLoaded", function (event) {
//   document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
 
 
//   var btn = document.querySelector('#foo')
//   btn.addEventListener("click", function () {
    
//     console.log('loggin')
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       var token = result.credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       // ...
//     }).catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       // ...
//       console.log(errorMessage)
//     });
//   })

//   // Initialize Firebase
//   // var config = {
//   //   apiKey: "AIzaSyB9NgmNvhNwX-SQWVzdp_s26i9APZQCEUk",
//   //   authDomain: "ofir-javascript.firebaseapp.com",
//   //   databaseURL: "https://ofir-javascript.firebaseio.com",
//   //   storageBucket: "ofir-javascript.appspot.com",
//   //   messagingSenderId: "619283900405"
//   // };
//   // firebase.initializeApp(config);

//   // const database = firebase.database().ref('name')
//   // database.set({
//   //   name: 'ofir'
//   // })

//   var provider = new firebase.auth.FacebookAuthProvider();
//   window.p = provider
 
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//       console.log('no login')
//     }
//   });
//   });