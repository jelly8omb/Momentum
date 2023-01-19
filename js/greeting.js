const nameBox = document.getElementById("name");
const nameButton = document.getElementById("subname");
const myName = document.getElementById("myName");
const login = document.getElementById("login-form");
const formBox = document.getElementById("form");

console.log(login);

const loginForm = (event) => {
    event.preventDefault();
    login.classList.add("hidden");
    userName = nameBox.value;
    localStorage.setItem("userName", userName);
    painting(userName);
}
const saveUsername = localStorage.getItem("userName");

const painting = (userName) => {
    myName.innerText = userName;
    myName.classList.remove("hidden");
}

if(saveUsername === null){
    nameButton.addEventListener("click", loginForm);
}else{
    painting(saveUsername);
    login.classList.add("hidden");
}


