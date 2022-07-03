const firebaseConfig = {
    apiKey: "AIzaSyC1gjqi975qG4uPVn3-NNm-qXDH29paM2c",
    authDomain: "kwitter-project-83495.firebaseapp.com",
    projectId: "kwitter-project-83495",
    storageBucket: "kwitter-project-83495.appspot.com",
    messagingSenderId: "393518419043",
    appId: "1:393518419043:web:a849824c9650a1ba7cbc56"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    username = localStorage.getItem("Username");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();