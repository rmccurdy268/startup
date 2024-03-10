const allMessages = document.querySelector('.messages');
const rhodricMessages = document.querySelector('.my-messages');
const jarrettMessages = document.querySelector('.jarrett-mesasges');
const chatInputForm = document.querySelector('.form-for-input');
const chatInput = document.querySelector('.chat-input');

let defaultSender = localStorage.getItem("userName");
const setSender = (name) =>{
    defaultSender = name;
}

const sendMessage = (e)=>{
    e.preventDefault();
    setSender(localStorage.getItem("userName"));
    const message = {
        sender: defaultSender,
        text: chatInput.value,
    }
    allMessages.innerHTML += chatMessage(message);
    chatInputForm.reset();
    if(message.sender === localStorage.getItem("userName")){
        automatedResponse();
    }
}

chatInputForm.addEventListener('submit', sendMessage);

const chatMessage = (message) => `
<div class="message ${message.sender === localStorage.getItem("userName") ? 'my-messages' : 'jarrett-messages'}">
    <div class="message-sender">${message.sender}</div>
    <div class="dm-message-text">${message.text}</div>
</div>
`

const automatedResponse = ()=>{
    setSender("Jarrett");
    setTimeout(()=>{
        const message = {
            sender: defaultSender,
            text: "Thanks for reaching out! I have been feeling lonely. This is an automated response."
        }
        allMessages.innerHTML += chatMessage(message);
    },1000);
}

