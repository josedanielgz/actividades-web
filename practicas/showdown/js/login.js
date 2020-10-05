//Referencia:
//https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1
const loginForm = document.getElementById("login");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("login-failed");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "1234") {
        alert("Ingreso exitoso");
        //Referencia: https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
        location.replace("main.html");
    } else {
        //El block lo tomé de puro empirismo, pendiente consultar el por qué funciona
        //de verdad
        loginErrorMsg.style.display = "block";
        //Referencia: https://www.sitepoint.com/delay-sleep-pause-wait/
        setTimeout(() => {  loginErrorMsg.style.display = "none";  }, 2500);
    }
})