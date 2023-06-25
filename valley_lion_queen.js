// Speak Up!
// JavaScript File

// Variables
var message = '';
var userName = '';
var flag = true;

//Functions

// Welcome Message
// This function is used to welcome the user to the program
function welcomeMessage(){
	console.log("Welcome to Speak Up! \nThis program will ask you to type in a message and it will repeat your message back to you. \nLet's get started!");
}

//Get Name
// This function is used to get the user's name
function getName(){
	userName = prompt("What is your name?");
	console.log("Nice to meet you " + userName);
}

// Get Message
// This function is used to get the user's message
function getMessage(){
	message = prompt("Type in your message:");
	console.log("You said: " + message);
}

// Repeat Message
// This function is used to repeat the user's message back to them
function repeatMessage(){
	console.log("You said: " + message);
}

// Speak Up
// This is the main function of the program. 
// It calls all of the other functions and is used to control the program
function speakUp(){
	welcomeMessage();
	getName();
	while(flag){
		getMessage();
		repeatMessage();
		flag = confirm("Do you want to type another message?");
	}
	console.log("Thank you for using Speak Up! Goodbye " + userName);
}

// Call main function
speakUp();