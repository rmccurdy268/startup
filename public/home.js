function getAccountName(){
    return localStorage.getItem("userName");
}

const playerNameEl = document.querySelector(".player-name");
playerNameEl.textContent = this.getAccountName();

function logout() {
    localStorage.removeItem('userName');
    fetch(`/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  } 