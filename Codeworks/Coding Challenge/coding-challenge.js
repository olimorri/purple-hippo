
const answerArr = ["Hello, what's your name?", "Nice to meet you, I'm Cathy.", "How are you doing today?", "I'm sorry, but I've got to go now. Let's speak again soon?", "Goodbye!"];

const userMessage = [];

const objDiv = document.getElementById("message-container");

const date = new Date();

function userMessageFlow(){

    let lastMessage = document.getElementById("message-input").value;
    userMessage.push(lastMessage);
    document.getElementById("message-input").value = "";
    let newUserPElement = document.createElement("p");
    newUserPElement.innerHTML = lastMessage;
    document.getElementById("message-container").appendChild(newUserPElement);
    newUserPElement.className = "userbubble";
    objDiv.scrollTop = objDiv.scrollHeight;
    addTimestamp();

};

/* ^^ This function dicates how the message is sent and displayed in
the "message-container" <div>. In this function I create a new <p>
element and append it onto the end of the "message-container" <div>, giving
the visual of the message 'appearing'. Alongside this I reset the input area 
value to the default, add the timestamp, add the correct class to the element and auto scroll.  */


function botMessageFlow(){
    let count = userMessage.length;
    let newBotPElement = document.createElement("p");

    if (userMessage.length < 6){
        newBotPElement.innerHTML = answerArr[count-1];
        document.getElementById("message-container").appendChild(newBotPElement);
        newBotPElement.className = "cathybubble";
        objDiv.scrollTop = objDiv.scrollHeight;
        addBotTimestamp();
    };
    
};

/* ^^ This function is similar to userMessageFlow, but is slightly different as it auto sends
messages from answerArr. This function only displays a value if the userMessage.length is < 6.
This is because I wanted to create a definite end to the conversation instead of returning
'undefined' values when all answers had been used.*/

function botFinalMessage(){

    if(userMessage.length >= 6){
        let newBotPElement = document.createElement("p");
        newBotPElement.innerHTML = "Cathy is offline!";
        document.getElementById("message-container").appendChild(newBotPElement);
        newBotPElement.className = "cathylastmessage";
        objDiv.scrollTop = objDiv.scrollHeight

        $("#online-status").css(
            'background-color', 'red'
            );
    };
};

/* ^^ This function is similar to botMessageFlow, but only displays after a certain threshold.
The function displays an 'offline' message and also changes the online indicator to red - using
jQuery. */

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
};

/* ^^ Function is used to add '0' to timestamp if needed */

function addTimestamp(){
    let newDate = new Date();
    let newTimestamp = document.createElement("p");
    let hours = addZero(newDate.getHours());
    let minutes = addZero(newDate.getMinutes());
    let seconds = addZero(newDate.getSeconds());
    newTimestamp.innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("message-container").appendChild(newTimestamp);
    newTimestamp.id = "usertime";
    objDiv.scrollTop = objDiv.scrollHeight;  
};

function addBotTimestamp(){
    let newBotDate = new Date();
    let newTimestamp = document.createElement("p");
    let hours = addZero(newBotDate.getHours());
    let minutes = addZero(newBotDate.getMinutes());
    let seconds = addZero(newBotDate.getSeconds());
    newTimestamp.innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("message-container").appendChild(newTimestamp);
    newTimestamp.id = "bottime";
    objDiv.scrollTop = objDiv.scrollHeight;
    
};

/* ^^ Both of these functions set the timestamps for the bot and the user. In order to make sure
the timestamp reflects the time the message was sent, I re-initialise Date() each time. */

$("#message-input").keypress(function(e){
    if (e.which == 13){
        $("#send-button").click();
    }
});

/* ^^ This jQuery function is used to make sure that pressing ENTER or RETURN is treated the
same as clicking the 'send' button. */

$('#send-button').click(function() {
    $("#online-status").css(
        'background-color', 'lime'
        );
});  

/* ^^ Once the button is clicked, or the ENTER/RETURN key is pressed, I have used jQuery
to set the online status indicator to green - to indicate that Cathy is online.*/

function messageFlow(){

    userMessageFlow();
    setTimeout(botMessageFlow, 1000);
    botFinalMessage()
    
};

/* ^^ This function and the functions within it control the chat experience and sequences.
Coded in vanilla JS. */