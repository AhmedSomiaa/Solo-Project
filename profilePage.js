var firstName = $('#firstName').val();
var lastName = $('#lastName').val();
var password = $('#psw').val();
var mobileNumber = $('#mobileNumber').val();
var postCode = $("#postCode").val();
var area = $('#area').val();
var email = $('#email').val();
var country = $("#country").val();
var stateRegion = $("#stateRegion").val()
$("#form").on("submit", function {
    event.preventDefault();
    if (isEmpty()) {

    }
})
function isEmpty(){
    if (firstName === "" || lastName === "" || mobileNumber === "" || postCode === "" || area === "" || email === "" || country === "" ||) {
        alert('Please fill out all required fields');
    }
}
$('#psw').on("focus", function() {
    $("#message").css("display", "block");
});
$('#psw').on("blur", function() {
    $("#message").css("display", "none");
});
$('#psw').on("keyup", function() {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (password.match(lowerCaseLetters)) {
        $('#letter').removeClass("invalid").addClass("valid");
    }
    else {
        $('#letter').removeClass("valid").addClass("invalid");
    }
    if (password.match(upperCaseLetters)) {
        $('#capital').removeClass("invalid").addClass("valid");
    }
    else {
        $('#capital').removeClass("valid").addClass("invalid");
    }
    if (password.match(numbers)) {
        $('#number').removeClass("invalid").addClass("valid");
    }
    else {
        $('#number').removeClass("valid").addClass("invalid");
    }
    if (password.length >= 8) {
        $('#length').removeClass("invalid").addClass("valid");
    }
    else {
        $('#length').removeClass("valid").addClass("invalid");
    }   
})
/*function validPassword () {
    
}