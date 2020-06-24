enterBtn("user")
enterBtn("pass")

function enterBtn(idName) {
    document.getElementById(idName).addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("login-btn").click();
        }
    });
}
function validateUser() {
    if (document.getElementById("user").value == "admin") {
        if (document.getElementById("pass").value == "123abc") {
            window.location.href = '/home'
        } 
    }
    wrongPass()
}
function wrongPass() {
    document.getElementById("login-msg").innerHTML = "Invalid login or password. Please try again."
}