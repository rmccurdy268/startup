const rhodricMessages = document.querySelector('.my-messages');
const jarrettMessages = document.querySelector('.jarrett-mesasges');
const chatInputForm = document.querySelector('.form-for-input');
const chatInput = document.querySelector('.chat-input');

const sendMessage = (e)=>{
    e.preventDefault();
    const message = {
        sender:'',
        text: chatInput.value,
    }
}