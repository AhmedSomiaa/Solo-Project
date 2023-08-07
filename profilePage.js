var firstName = $('#firstName').val();
var lastName = $('#lastName').val();
var mobileNumber = $('#mobileNumber').val();
var postCode = $("#postCode").val();
var area = $('#area').val();
var email = $('#email').val();
var country = $("#country").val();
var stateRegion = $("#stateRegion").val()
$("#form").on("submit", function {
    return isEmpty();
})
function isEmpty(){
    if (firstName === "" || lastName === "" || mobileNumber === "" || postCode === "" || area === "" || email === "" || country === "" ||) {
        event.preventDefault();
        alert('Please fill out all required fields');
    }
}