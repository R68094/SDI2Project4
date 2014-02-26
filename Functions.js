//alert("JavaScript works!");
// Timothy Binney
// SDI Project 4
// Function Calls
// Term 1402


var emailInfo;
var emailConfirmation;
var phoneReturn;
var myPhone = "123-456-7890";
var urlValidation;
var urlReturn;
var myUrl = "https://gmail.com";

// String Phone Confirm
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


//String Email Confirm
var emailInfo = function(emailAddress){
    if (emailAddress.indexOf("@") === -1) {
    }if (emailAddress.indexOf(".") === -1) {
        return false;
    }else
    return true;
    
    
};

var emailConfirmation = emailInfo("tjbinney@fullsail.edu");
if (emailConfirmation === false) {
    console.log("BOO")
}
if (emailConfirmation === true) {
    console.log("YAY WE WIN")
}

// String Url Confirm
var urlReturn = function(urlName){
    var testUrl = urlName.substr (0,5);
        if (testUrl === "https") {
            return true;
}
        else
            return false;

};


var urlValidation = urlReturn(myUrl);
    if (urlValidation === true) {
        console.log("yay we got a real website!")
    }
    else
        console.log("not a url");





