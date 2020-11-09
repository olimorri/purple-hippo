
const answerArr = ["Hello", "My name is Cathy, what's your name?", "Nice to meet you!", "I am a chatbot", "Goodbye!"];

const userMessage = [];

const firstMessage = answerArr[0];

// This displays the first automated message

    function displayHello(){
        document.getElementById('first-message').innerHTML = firstMessage;
    };

    displayHello();

    document.getElementById("message-input").addEventListener("keydown", function(e) {
        if (e.keyCode == 13) { messageFlow(); }
    }, false);

    function messageFlow(){
        
            let lastMessage = document.getElementById("message-input").value;
            userMessage.push(lastMessage);
            document.getElementById("message-input").value = "";
            let newUserPElement = document.createElement("p");
            newUserPElement.innerHTML = lastMessage;
            document.getElementById("message-container").appendChild(newUserPElement);
            newUserPElement.className = "userbubble";
            var objDiv = document.getElementById("message-container");
            objDiv.scrollTop = objDiv.scrollHeight;
            let count = userMessage.length;
            let newBotPElement = document.createElement("p");
            newBotPElement.innerHTML = answerArr[count];
            document.getElementById("message-container").appendChild(newBotPElement);
            newBotPElement.className = "cathybubble";
            objDiv.scrollTop = objDiv.scrollHeight;

           
        };

/* This function controls the message flow and is triggered when the'send' button or 
enter key are pressed. In the first instance I initialise the lastMessage
variable with the text from the textarea. Following this, I have set the text area to return to empty.
Next, a new <p> element is created to include the value of lastMessage and appended onto
the end of the div element. This gives the impression of the message being delivered
below (as with all chat apps). Finally, I use this process again for the bot's message,
using the length of userMessage to ensure that the correct message is sent. */
    
///////////////////////////////////////////////////////



/* CHANGE THIS TO VANILLA JS?

 var answerArr = ["Hello", "My name is Oliver, what's your name?", "Nice to meet you!"];

            var userMessage = [];

            var lastMessage;

            

            /* This works 
            $('#message-container').addClass('userbubble'); */
/*
            setTimeout(function() {
                    }, 2000);

            /* Could make the messages an*/
           
/*
            $(function(){

                $("#message-container").html(answerArr[0]);

                $("#send-button").click(function(){

                    lastMessage = $("#message-input").val();

                    userMessage.push(lastMessage);
                    $("#message-input").val("");
                    var prevState = $("#message-container").html();
                    let count = userMessage.length;

                    //need to find a way to sort this out
                    setTimeout(1);
                    $("#message-container").html(prevState + "<br>" + lastMessage + "<br>" + answerArr[count]);
                    $("#message-container").animate({ scrollTop: $(document).height() }, 1);



                });

                $("#message-input").keypress(function(e){
                if (e.which == 13){
                    $("#send-button").click();
                    }
                });    

            });

            console.log(lastMessage)



                

           

            console.log(userMessage);


*/


