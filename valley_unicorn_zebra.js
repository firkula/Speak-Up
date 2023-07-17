//Speak Up

//Create a function called 'speakUp'
function speakUp() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, convert the input to uppercase
        let speakUp = input.toUpperCase();

        //Alert the user with their response in all-caps
        alert(speakUp);
    }
}

//Call the function
speakUp();

//Create a function called 'sayItLoud'
function sayItLoud() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, convert the input to uppercase
        let sayItLoud = input.toUpperCase();
        //Add ! to the end of the input
        sayItLoud += '!';

        //Alert the user with their response in all-caps and with an exclamation point
        alert(sayItLoud);
    }
}

//Call the function
sayItLoud();

//Create a function called 'whisperItSoftly'
function whisperItSoftly() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, convert the input to lowercase
        let whisperItSoftly = input.toLowerCase();
        //Add '...' to the end of the input
        whisperItSoftly += '...';

        //Alert the user with their response in all-lowercase and with ellipses
        alert(whisperItSoftly);
    }
}

//Call the function
whisperItSoftly();

//Create a function called 'smileIt'
function smileIt() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, add a smiley emoji to the end of the input
        let smileIt = input + '\u{1F60A}';

        //Alert the user with their response with a smiling emoji
        alert(smileIt);
    }
}

//Call the function
smileIt();

//Create a function called 'yellIt'
function yellIt() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, convert the input to uppercase
        let yellIt = input.toUpperCase();
        //Add '!!!' to the end of the input
        yellIt += '!!!';

        //Alert the user with their response in all-caps with multiple exclamation marks
        alert(yellIt);
    }
}

//Call the function
yellIt();

//Create a function called 'addLaughter'
function addLaughter() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, add a laughing emoji to the end of the input
        let addLaughter = input + '\u{1F604}';

        //Alert the user with their response with a laughing emoji
        alert(addLaughter);
    }
}

//Call the function
addLaughter();

//Create a function called 'speakUpForMe'
function speakUpForMe() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, convert the input to uppercase
        let speakUpForMe = input.toUpperCase();
        //Add '!!!' to the end of the input
        speakUpForMe += '!!!';

        //Alert the user with their response in all-caps with multiple exclamation marks
        alert(speakUpForMe);
    }
}

//Call the function
speakUpForMe();

//Create a function called 'mumbleIt'
function mumbleIt() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, convert the input to lowercase
        let mumbleIt = input.toLowerCase();
        //Add '...' to the end of the input
        mumbleIt += '...';

        //Alert the user with their response in all-lowercase and with ellipses
        alert(mumbleIt);
    }
}

//Call the function
mumbleIt();

//Create a function called 'beConfident'
function beConfident() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, convert the input to uppercase
        let beConfident = input.toUpperCase();
        //Add '!' to the end of the input
        beConfident += '!';

        //Alert the user with their response in all-caps and with an exclamation point
        alert(beConfident);
    }
}

//Call the function
beConfident();

//Create a function called 'stutterIt'
function stutterIt() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, add 'um' before each word
        let stutterIt = input.replace(/\b\w/g, function (letter) { return 'um' + letter});

        //Alert the user with their response with 'um' inserted before each word
        alert(stutterIt);
    }
}

//Call the function
stutterIt();

//Create a function called 'repeatIt'
function repeatIt() {
    //Allow user to enter text
    let input = prompt("What do you want to say?");

    //Check if input is null or empty
    if (input === null || input === '') {
        //If so, alert user
        alert('Please enter a valid input');
    } else {
        //If not, repeat the input twice
        let repeatIt = input + ' ' + input;

        //Alert the user with their response repeated
        alert(repeatIt);
    }
}

//Call the function
repeatIt();