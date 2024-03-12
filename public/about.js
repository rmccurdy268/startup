function getQuote(){
    fetch(`https://api.api-ninjas.com/v1/quotes?category=success`)
        .then((response) => response.json())
        .then((data)=>{
            const containerEl = document.querySelector(".inspirationBox");
            const quoteEl = document.createElement('.inspirationText')
            quoteEl.classList.add('quote');
            const authorEl = document.createElement('.authorText');
            authorEl.classList.add('author');
            quoteEl.textContent = data.content;
            authorEl.textContent = data.author;

            containerEl.appendChild(quoteEl);
            containerEl.appendChild(authorEl);
        });
    
}

getQuote();