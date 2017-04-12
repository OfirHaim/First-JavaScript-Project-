//wait to all element upload
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    // const imgEl = document.querySelector('#dan')

    var btn = document.querySelector('#foo')
    btn.addEventListener("click", function () {

        console.log('loggin')
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorMessage)
        });
    })

    var provider = new firebase.auth.FacebookAuthProvider();
    window.p = provider

    firebase.auth().onAuthStateChanged(function (user) {
        const userImg = document.querySelector('#userImg')

        if (user) {
            console.log("the user is sing in")

            const { displayName, photoURL, email } = user
            // console.log(displayName, photoURL, email)

            //show the profile image
            userImg.setAttribute('src', photoURL)

            // imgEl.style.display = 'block'

            const database = firebase.database().ref('Facebook_users')
            database.set({
                name: displayName,
                photo: photoURL,
                email: email
            })
            // $("#div1").show();
            $('#dan').attr('<img src="/IMG/dan.jpg"/>');
            
        }
        else {
            // No user is signed in.
            console.log('no login')
           
            // hide the profile picture
            userImg.setAttribute('src', '')
        }
    });
});

//logout function
var logout = document.querySelector('#logout')
logout.addEventListener("click", function () {
    firebase.auth().signOut().then(function () {
        console.log("logout")
       
        //remove the img when the user click on logout
          $("#dan").remove();
          console.log("מח'תי")
    
}).catch(function (error) {
        console.log("error", error)
    });
});
