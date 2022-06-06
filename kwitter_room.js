var firebaseConfig = {
      apiKey: "AIzaSyBcQex4KZxhhT1jrNDwdHqukCdq5xRHukw",
      authDomain: "kwitter-e401f.firebaseapp.com",
      databaseURL: "https://kwitter-e401f-default-rtdb.firebaseio.com",
      projectId: "kwitter-e401f",
      storageBucket: "kwitter-e401f.appspot.com",
      messagingSenderId: "595413499597",
      appId: "1:595413499597:web:1a81e49c73ac571899f384",
      measurementId: "G-0C474WW64J"
    };
    
   
  firebase.initializeApp(firebaseConfig);
   
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom(){

room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onlick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;  
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}