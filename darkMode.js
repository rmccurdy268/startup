function darkModeCheck(){
    const prefersDarkMode = window.matchMedia('prefers-color-scheme: dark').matches;
    localStorage.setItem("darkMode", prefersDarkMode);
}

function darkMode(){
    let element = document.body;
    element.className = "dark-mode";
}

function lightMode(){
    let element = document.body;
    element.className = "light-mode";
}