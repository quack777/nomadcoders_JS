const logInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function  onLoginBtnClick() {
  const value = logInput.value;
  if(value === ""){
    console.log("Please write you name");
}

loginButton.addEventListener("click", onLoginBtnClick);