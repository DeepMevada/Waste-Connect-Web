var firebaseConfig = {
  apiKey: "AIzaSyC4ZP0TjrRXABF1fr0dWpwxRw_atdboxhE",
  authDomain: "waste-connect-wc8.firebaseapp.com",
  databaseURL: "https://waste-connect-wc8.firebaseio.com",
  projectId: "waste-connect-wc8",
  storageBucket: "waste-connect-wc8.appspot.com",
  messagingSenderId: "562983987984",
  appId: "1:562983987984:web:35362f31873db3442a9395",
  measurementId: "G-C5G2ZHJZZJ",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

var db = firebase.firestore();
function signin() {
  var Email = document.getElementById("email");
  var Pass = document.getElementById("password");
  var dpass;
  var docRef = db.collection("Admin").doc(email.value);
  docRef.get().then(function (doc) {
    if (doc.exists) {
      dpass = doc.data().password;
      if (dpass == Pass.value) {
        firebase.auth().signInWithEmailAndPassword(Email.value, Pass.value);
        alert("Successfully Logged-in");
        window.location = "main.html";
      } else {
        alert("Check Email and Password first");
      }
    } else {
      console.log("No Document Exist....");
    }
  });
}
