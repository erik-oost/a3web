function erikcontactbutton() {
    document.getElementById("erikemail").innerHTML = "erik@ourcompany.ca";
}
function lucycontactbutton() {
    document.getElementById("lucyemail").innerHTML = "lucy@ourcompany.ca";
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