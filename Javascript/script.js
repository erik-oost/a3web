// Main javascript: Lucy Lin
function erikcontactbutton() {
    document.getElementById("erikemail").innerHTML = "erik@elconsulting.ca";
}
function lucycontactbutton() {
    document.getElementById("lucyemail").innerHTML = "lucy@elconsulting.ca";
}
$(document).ready(function(){
    $("button1").click(function(){
        $("#phonenumber").fadeIn(1500);
    });
});
$(document).ready(function(){
    $("button2").click(function(){
        $("#email").fadeIn(1500);
    });
});
$(document).ready(function(){
    $("button3").click(function(){
        $("#facebookurl").fadeIn(1500);
    });
});

// Mobile menu javascript: Erik Oosterbaan
function mobilemenu() {
    var x = document.getElementById("menu");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}