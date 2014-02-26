//alert("JavaScript works!");
// Timothy Binney
// SDI Project 4
// Function Calls
// Term 1402


var emailInfo;
var emailConfirmation;
var phoneReturn;
var myPhone = "123-456-7890";


// String 1
var phoneReturn = function(phoneNumber) {
    phoneNumber.length
    if (phoneNumber.length === 12){}
    if (phoneNumber.charAt(3) === "-") {}
    if (phoneNumber.charAt(7) === "-") {
    return true;

}
    else
return false;
};
    
    
    
var phoneValidation = phoneReturn(myPhone)
if (phoneValidation === true) {
    console.log("We got us a phone number! Hooray!")
} else
console.log("Please enter a correct phone number!")
