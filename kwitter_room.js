
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBX3UKTAs5u6z-rRxW7ULbM7cK3m0DYFzM",
      authDomain: "redsocial-f7a97.firebaseapp.com",
      databaseURL: "https://redsocial-f7a97-default-rtdb.firebaseio.com",
      projectId: "redsocial-f7a97",
      storageBucket: "redsocial-f7a97.appspot.com",
      messagingSenderId: "403476939164",
      appId: "1:403476939164:web:2874121eb296500ff0c859"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "¡ Hooola " + user_name + " !";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
      console.log("nombre_sala")
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Finaliza el código
      });});}
getData();

function redirecToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}