const input = document.querySelector("textarea");
const send = document.querySelector("#send");
const chat = document.querySelector("#chat-window");
const reset = document.querySelector("#reset");
const host = window.location.host;
let time = "";


//Get current time
function getCurrTime() {
    let current = new Date();
    let currentTime = current.toLocaleTimeString();
    currentTime = currentTime.substring(0, currentTime.indexOf(":", 3));

    return currentTime;
}


//Sending textarea input value as GET param to obtain response
async function response(str) {
    const answer = await fetch(`https://${host}/${str}`)
        .then(res => res.json())
        .catch(err => err)
    return answer;
}

//Create new div for user input
function addUserMsg(input) {
    time = getCurrTime();
    let userMsg = document.createElement("p");
    userMsg.innerHTML = `<b>You:</b> ${input}<br><span style="font-size:0.8rem">${time}</span>`;
    userMsg.setAttribute("id", "user-chat");
    return userMsg;
}

//Create new div for bot repsonse
async function addBotMsg(input) {
    time = getCurrTime();

    let msg = await response(input)
    let botMsg = document.createElement("div");
    botMsg.innerHTML = `<b>Patrick:</b> ${msg.answers[0].answer}<br><span style="font-size:0.8rem">${time}</span>`;
    botMsg.setAttribute("id", "bot-chat");

    return botMsg;
}

//Add user input followed by bot response to chat window
send.addEventListener("click", async () => {

    if (input.value) {
        let inputVal = input.value;
        let userMsg = addUserMsg(inputVal);
        let botMsg = await addBotMsg(inputVal);
        chat.prepend(userMsg);
        setTimeout(() => chat.prepend(botMsg), 1150);
        input.value = "";
    }
})

//Click send button message when pressing enter in text area
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        send.click();
    }
});


//Clear chat window
reset.addEventListener("click", () => setTimeout(() => chat.innerHTML = "", 800))

