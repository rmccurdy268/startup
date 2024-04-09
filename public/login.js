async function login() {
    process('/auth/login');
  }

async function register(){
  process('/auth/create');
}

async function process(endpoint){
  const nameEl = document.querySelector("#username")?.value;
  const passwordEl = document.querySelector("#password")?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: nameEl, password: passwordEl }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.ok) {
    localStorage.setItem('userName', nameEl);
    window.location.href = 'home.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}