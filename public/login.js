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
    var tag = document.createElement("p");
    var text = ((endpoint === '/auth/login')?document.createTextNode("Given credentials do not match database"):document.createTextNode("user already exists"));
    tag.appendChild(text);
    var element = document.getElementById("errorResponse");
    element.appendChild(tag);
  }
}

