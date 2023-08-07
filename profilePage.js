var firstName = $('#firstName').val();
var lastName = $('#lastName').val();
var password = $('#psw').val();
var mobileNumber = $('#mobileNumber').val();
var postCode = $("#postCode").val();
var area = $('#area').val();
var email = $('#email').val();
var country = $("#country").val();
var stateRegion = $("#stateRegion").val()
$('#password').on("keyup", function() {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    
    if (password.match(lowerCaseLetters)) {
        $('#letter').removeClass("invalid").addClass("valid");
    } else {
        $('#letter').removeClass("valid").addClass("invalid");
    }
    
    if (password.match(upperCaseLetters)) {
        $('#capital').removeClass("invalid").addClass("valid");
    } else {
        $('#capital').removeClass("valid").addClass("invalid");
    }
    
    if (password.match(numbers)) {
        $('#number').removeClass("invalid").addClass("valid");
    } else {
        $('#number').removeClass("valid").addClass("invalid");
    }
    
    if (password.length >= 8) {
        $('#length').removeClass("invalid").addClass("valid");
    } else {
        $('#length').removeClass("valid").addClass("invalid");
    }
});
$('#psw').on("focus", function() {
    $("#message").css("display", "block");
});
$('#psw').on("blur", function() {
    $("#message").css("display", "none");
});
$("#submit").click( function() {
    var newData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        password: $('#psw').val(),
        mobileNumber: $('#mobileNumber').val(),
        postCode: $("#postCode").val(),
        area: $('#area').val(),
        email: $('#email').val(),
        country: $("#country").val(),
        stateRegion: $("#stateRegion").val()
    }
    saveData(newData);
})
function saveData(Data) {
    localStorage.setItem("FirstName", Data.firstName);
    localStorage.setItem("lastName", Data.lastName);
    localStorage.setItem("password", Data.password);
    localStorage.setItem("email", Data.email);
    localStorage.setItem("mobileNumber", Data.mobileNumber);
    localStorage.setItem("country", Data.country);
    localStorage.setItem("area", Data.area);
    localStorage.setItem("stateRegion", Data.stateRegion);
    localStorage.setItem("postCode", Data.postCode);
}

