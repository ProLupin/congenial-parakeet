var firebaseConfig = {
      apiKey: "AIzaSyDqJnrXd-g-guwZrIHQ9BTHtEa1ckaQ29A",
      authDomain: "kwitter-13b30.firebaseapp.com",
      databaseURL: "https://kwitter-13b30-default-rtdb.firebaseio.com",
      projectId: "kwitter-13b30",
      storageBucket: "kwitter-13b30.appspot.com",
      messagingSenderId: "876929489387",
      appId: "1:876929489387:web:1145a2310a6f8ecde861ae"
    };
    
   
   firebase.initializeApp(firebaseConfig);
   var room_name=localStorage.getItem("room_name");
   var user_name=localStorage.getItem("user_name");
   function send(){
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
