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
var f = 0;

function signup() {
  var Email = document.getElementById("email");
  var Pass = document.getElementById("password");
  var repass = document.getElementById("repassword");
  if (Pass.value == repass.value) {
    const newuser = firebase
      .auth()
      .createUserWithEmailAndPassword(Email.value, Pass.value);
    alert("Account Created Successfully");
    f = 1;
  } else {
    alert("Password Mismatch");
    document.getElementById("password").reset();
    document.getElementById("repassword").reset();
  }

  if (f == 1) {
    db.collection("Admin")
      .doc(Email.value)
      .set({
        name: document.getElementById("uname").value,
        address: document.getElementById("Address").value,
        mobile: document.getElementById("mobile").value,
        password: Pass.value,
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    console.log("Data entered Successfully");
  }
}
