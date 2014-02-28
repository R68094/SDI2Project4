//alert("JavaScript works!");
// Timothy Binney
// SDI Project 4
// Function Calls
// Term 1402

// Global Variables
var emailInfo;
var phoneReturn;
var myPhone = "123-456-7890";
var urlReturn;
var myUrl = "https://gmail.com";
var numberString = "239";
var stringToNumber;
var roundFunction;
var myDecimal = 10.4567889;
var fixedDecimal = 2;
var dateFunction;
var measured;
var myDay = new Date(1994, 6, 20);
var myBirth = new Date(1992, 2, 11);

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

// Number Parse
var stringToNumber = function(numberParsed) {
    var convertString = parseInt(numberParsed)
    
    return (convertString);    

};

var parsingString = stringToNumber(numberString);

if (parsingString === 239) {
    console.log("Oh ya we are parsing numbers!") 
} else
    console.log("Failed to parse the number!");
    


// Round Decimal Points Function
var roundFunction = function(decimalUsed,decimalFixed){
    var newNumber = decimalUsed;
    var numberOfDecimals = decimalFixed;
        newNumber = newNumber.toFixed(numberOfDecimals);
    return newNumber;
      
}


roundFunctionCall = roundFunction(myDecimal,fixedDecimal);

console.log(roundFunctionCall);


// Difference Between Dates

 var dateFunction = function(currentDate,myBDay,days){
        var firstDate = currentDate;
        var secondDate = myBDay;
        var millSeconds = firstDate - secondDate;
        var diffDays = (millSeconds / 86400000);
        return diffDays;
          
 }

var callDateFunction = dateFunction(myDay, myBirth, measured);


console.log(callDateFunction);