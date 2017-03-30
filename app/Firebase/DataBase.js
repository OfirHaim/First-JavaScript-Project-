var database = firebase.database();

function writeUserData(username, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: user.displayname,
        email: user.email,
        profile_picture: user.photoURL
    });
}