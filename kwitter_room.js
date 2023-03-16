

//Agrega TUS ENLACES DE FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyCww-Z03wOoKyf60fwXk18bi4C51FhhKXA",
  authDomain: "salasredes-c6e7a.firebaseapp.com",
  databaseURL: "https://salasredes-c6e7a-default-rtdb.firebaseio.com",
  projectId: "salasredes-c6e7a",
  storageBucket: "salasredes-c6e7a.appspot.com",
  messagingSenderId: "642618385437",
  appId: "1:642618385437:web:51f4b6b19101284c76d2f4"
};

firebase.initializeApp(firebaseConfig);




user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location.replace("kwitter_page.html");

}



function getRoom() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;



      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


    });
  });
}

//Cambiar Get Data por Get Room

getRoom();




function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}

//agregar funcion Logout
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}