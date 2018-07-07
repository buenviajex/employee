
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script>
 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyBBmOUNVockyxYgB23QKolz2m6ONWylDSM",
   authDomain: "edm-july7class.firebaseapp.com",
   databaseURL: "https://edm-july7class.firebaseio.com",
   projectId: "edm-july7class",
   storageBucket: "edm-july7class.appspot.com",
   messagingSenderId: "294828908161"
 };
 firebase.initializeApp(config);
</script>

firebase.initializeApp(config);


var database = firebase.database();
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
connectedRef.on("value", function(snap) {
  if (snap.val()) {
    var con = connectionsRef.push(true);
    con.onDisconnect().remove();
  }
});