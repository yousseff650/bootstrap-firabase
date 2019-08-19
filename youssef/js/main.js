//partie declaratioin variable 
var txt = document.getElementById("texte");
var select = document.getElementById("selector");
var selector = document.getElementById("typeTexte")

// chnagement de style : bold 
function changeBold() {
    event.preventDefault();
    if (txt.style.fontWeight == "bold") {
        return txt.style.fontWeight = "normal";
    }
    txt.style.fontWeight = "bold";
}

//chnagement de style : italic
function changeItalic() {
    event.preventDefault();
    if (txt.style.fontStyle == "italic") {
        return txt.style.fontStyle = "normal";
    }
    txt.style.fontStyle = "italic";
}

//  fonction pour changer la couleur 
function colorChange() {
    event.preventDefault();
    if (txt.style.color == "red") {
        return txt.style.color = "black";
    }
    txt.style.color = "red";
}

//souligner mon paragraphe 
function souligner() {
    event.preventDefault();
    if (txt.style.textDecoration == "underline") {
        return txt.style.textDecoration = "none";
    }
    txt.style.textDecoration = "underline";
}


//fonction changement du font-size  
function changeFontSise() {
    txt.style.fontSize = select.value;
}
//fonction changement du type du text 
function typeTexte() {
    txt.style.fontFamily = document.getElementById("type").value;
}

$(".course1 button").css("opacity", "0");

// $(".course1").hover(function(){
//     $(".course1 button").css("opacity","1");

// },function(){
//     $(".course1 button").css("opacity","0");

// })
$(".course1").mouseenter(function () {
    $(".course1 button").css("opacity", "1");

})
$(".course1").mouseleave(function () {
    $(".course1 button").css("opacity", "0");
})

$(".open").on("click", function(){
    $(".popup, .popup-content").addClass("active");
    });

    $(".close, .popup").on("click", function(){
        $(".popup, .popup-content").removeClass("active");
        });

       $(".course1").click(function(){
        $("#fade").modal({
            fadeDuration: 100
          });
        })
        
        $(".course2").click(function(){
            $("#fade").modal({
                fadeDuration: 100
              });
            })

            $(".course3").click(function(){
                $("#fade").modal({
                    fadeDuration: 100
                  });
                })

$(".course2 button").css("opacity", "0");
$(".course2").mouseenter(function () {
    $(".course2 button").css("opacity", "1");
})
$(".course2").mouseleave(function () {  
    $(".course2 button").css("opacity", "0");
})
$(".course3 button").css("opacity", "0");
$(".course3").mouseenter(function () {
    $(".course3 button").css("opacity", "1");

})
$(".course3").mouseleave(function () {
    $(".course3 button").css("opacity", "0");
})
$(".course6 button").css("opacity", "0");
$(".course6").mouseenter(function () {
    $(".course6 button").css("opacity", "1");

})
$(".course6").mouseleave(function () {
    $(".course6 button").css("opacity", "0");
})
$(".course7 button").css("opacity", "0");
$(".course7").mouseenter(function () {
    $(".course7 button").css("opacity", "1");

})
$(".course7").mouseleave(function () {
    $(".course7 button").css("opacity", "0");
})
$(".course8 button").css("opacity", "0");
$(".course8").mouseenter(function () {
    $(".course8 button").css("opacity", "1");

})
$(".course8").mouseleave(function () {
    $(".course8 button").css("opacity", "0");
})
$(".course9 button").css("opacity", "0");
$(".course9").mouseenter(function () {
    $(".course9 button").css("opacity", "1");

})
$(".course9").mouseleave(function () {
    $(".course9 button").css("opacity", "0");
});

$(".course10 button").css("opacity", "0");
$(".course10").mouseenter(function () {
    $(".course10 button").css("opacity", "1");

});
$(".course10").mouseleave(function () {
    $(".course10 button").css("opacity", "0");
})
$(".course11 button").css("opacity", "0");
$(".course11").mouseenter(function () {
    $(".course11 button").css("opacity", "1");

})
$(".course11").mouseleave(function () {
    $(".course11 button").css("opacity", "0");
});

var firebaseConfig = {
    apiKey: "AIzaSyAwXakDi3lOgb5Nv4z0zrnG5p5W123ZYIo",
    authDomain: "workshop-81d41.firebaseapp.com",
    databaseURL: "https://workshop-81d41.firebaseio.com",
    projectId: "workshop-81d41",
    storageBucket: "",
    messagingSenderId: "573723698110",
    appId: "1:573723698110:web:70831b8ffa5ee51e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // setting a base for data base
  var messageRef=firebase.database().ref("contact");

  function submitF(){
      event.preventDefault();
    
      var name=document.getElementById("name").value;
      var EmailAddress=document.getElementById("EmailAddress").value;
      var phoneNumber =document.getElementById("phoneNumber").value;
      savemessage(name,EmailAddress,phoneNumber);
  }
  function savemessage(name,EmailAddress,phoneNumber){
      var newmessagreRef=messageRef.push();
      newmessagreRef.set({
          name:name,
          EmailAddress:EmailAddress,
          phoneNumber:phoneNumber,
      });

  }