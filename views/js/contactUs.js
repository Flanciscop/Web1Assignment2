$(document).ready(function submit() {
    // Get value on button click and show alert
    $("#myBtn").click(function() {
        var x = $("#inputName").val();
        var y = $("#inputEmail").val();
        var z = $("#inputSubject").val();
        var m = $("#inputMessage").val();
        if (x == "") {
            alert("Please enter your name!!!");
        } else if (y == "") {
            alert("Please enter your email!! ");
        } else if (z == "") {
            alert("Please do not leave the subject blank!!!");
        } else if (m == "") {
            alert("Please leave us some message before sending the form!!!");
        } else {
            alert("Thank you " + x + ", we will get in touch soon.");
        }
    });
});

function navigation() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}