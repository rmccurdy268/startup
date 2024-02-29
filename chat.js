const allMessages = document.querySelector('.messages');
const rhodricMessages = document.querySelector('.my-messages');
const jarrettMessages = document.querySelector('.jarrett-mesasges');
const chatInputForm = document.querySelector('.form-for-input');
const chatInput = document.querySelector('.chat-input');

let defaultSender = 'Rhodric'
const setSender = (name) =>{
    defaultSender = name;
}

const sendMessage = (e)=>{
    e.preventDefault();
    const message = {
        sender: defaultSender,
        text: chatInput.value,
    }
    allMessages.innerHTML += chatMessage(message);
    chatInputForm.reset();
}

chatInputForm.addEventListener('submit', sendMessage);

const chatMessage = (message) => `
<div class="message ${message.sender === 'Rhodric' ? 'my-messages' : 'jarrett-messages'}">
    <div class="message-sender">${message.sender}</div>
    <div class="dm-message-text">${message.text}</div>
</div>
`



