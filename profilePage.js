$('#psw').on("keyup", function() {
    var password = $('#psw').val();
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    
    if (password.match(lowerCaseLetters)) {                          // Test if the value of password contains a lower case later
        $('#letter').removeClass("invalid").addClass("valid");      // change from class invalid to valid
    } else {
        $('#letter').removeClass("valid").addClass("invalid");      // change from class valid to invalid
    }
    
    if (password.match(upperCaseLetters)) {                         // Test if the value of password contains a upper case later
        $('#capital').removeClass("invalid").addClass("valid");     // change from class invalid to valid
    } else {
        $('#capital').removeClass("valid").addClass("invalid");     // change from class valid to invalid
    }
    
    if (password.match(numbers)) {                                  // Test if the value of password contains a number
        $('#number').removeClass("invalid").addClass("valid");      // change from class invalid to valid
    } else {
        $('#number').removeClass("valid").addClass("invalid");      // change from class valid to invalid
    }
    
    if (password.length >= 8) {                                     // Test if the length of password is longer than 8
        $('#length').removeClass("invalid").addClass("valid");      // change from class invalid to valid
    } else {
        $('#length').removeClass("valid").addClass("invalid");      // change from class valid to invalid
    }
});
$('#psw').on("focus", function() {
    $("#message").css("display", "block"); //display the div with id message to screen when the cursor is in password input
});
$('#psw').on("blur", function() {
    $("#message").css("display", "none");  //display the div with id message out of the screen when the cursor is out password input
});
$("#submit").click( function() {
    var newData = {                        //Put all the values of the form inputs in object
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
    localStorage.setItem("FirstName", Data.firstName);          //Store all the values of the inputs stored in our object inside the local storage
    localStorage.setItem("lastName", Data.lastName);
    localStorage.setItem("password", Data.password);
    localStorage.setItem("email", Data.email);
    localStorage.setItem("mobileNumber", Data.mobileNumber);
    localStorage.setItem("country", Data.country);
    localStorage.setItem("area", Data.area);
    localStorage.setItem("stateRegion", Data.stateRegion);
    localStorage.setItem("postCode", Data.postCode);
}

