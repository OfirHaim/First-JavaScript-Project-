// fonction to get random number 
function rand(max) { 
    return Math.floor(Math.random() * max)
}
function changeColor() {
    var col = document.getElementById("changecolor");
    const color = `rgb(${rand(256)},${rand(256)},${rand(256)})`
    console.log({color})
    col.style.backgroundColor =  color
}
function hello(){
    alert ("hello word")
}
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9NgmNvhNwX-SQWVzdp_s26i9APZQCEUk",
    authDomain: "ofir-javascript.firebaseapp.com",
    databaseURL: "https://ofir-javascript.firebaseio.com",
    storageBucket: "ofir-javascript.appspot.com",
    messagingSenderId: "619283900405"
  };
  firebase.initializeApp(config);

  var database = firebase.database()
  var fruitRef = database.ref('fruit')
  var result = fruitRef.set({
    name:'ofir'
  });
document.getElementById('console').innerHTML ='result:'+result;