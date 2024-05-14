/**
 * takes random integer between 1 and 10
 * user to guess a number
 * if input is same as random number, display good work
 * otherwise not matched
 */


var randomNum = Math.floor(Math.random()*10 + 1)
var number = prompt("enter a number between 1 and 10");

if(number > 10 || number < 1){
    alert('number should be between 1 and 10')
}

if(number === random){
    console.log ("Good work")
}else {
    console.log("Not matched")
}
