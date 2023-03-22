const changeThemeBtn = document.getElementById('change-theme');

function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

//Carregar preferência de tema do usuário
function loadTheme(){
    const darkMode = localStorage.getItem("dark");

    if(darkMode){
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode();

    //Salvar light ou dark mode - LocalStorage
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
})


