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
var myArray = [1,2,3,4,5,6,7,8,9,10];
var arrayFunction;
var arrayFunctionCall;
var lowerCaseString = "i wish i could fly!";
var upperCaseFunction;
var roundFunction;
var myDecimal = 10.4567889;
var fixedDecimal = 2;

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











// Uppercase String


var upperCaseFunction = function(stringUsed){
    var newString = stringUsed.toUpperCase();
    console.log(newString);
    if (newString === "I Wish I Could Fly!") {
        console.log("Uppercasing!")
    }
    else
    console.log("Not doing what i'm suppose to!")
    
   return newString;
}
console.log(upperCaseFunction);

var callUpperCaseFunction = upperCaseFunction(lowerCaseString);


















// Greatest Value Array
var arrayFunction = function(value, index, array){
    var arrayReturn = false;
    if (value > 3) {
        arrayReturn = true;
    }
    return arrayReturn;
    
    if (myArray.some(arrayFunction)) {
        var arrayResult = myArray.filter(arrayFunction);
        alert("these are greater then 3: " + arrayResult);
    }
};
    

var arrayFunctionCall = arrayFunction(value1, index , myArray);



