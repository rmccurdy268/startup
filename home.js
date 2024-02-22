function getAccountName(){
    return localStorage.getItem("userName");
}

const playerNameEl = document.querySelector(".player-name");
playerNameEl.textContent = this.getAccountName();