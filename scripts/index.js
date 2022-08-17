const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkboxInput = document.getElementById('checkbox');
let button = document.getElementById('btn');

function isEmpty() {
    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username != '' && password != '' && checkboxInput.checked == true) {
        button.removeAttribute('disabled');
        button.style.backgroundColor = '#F3CB4A';
    }
}

function getInputValue() {
    let username = usernameInput.value;
    let password = passwordInput.value;
    let obj = {}
    obj.username = username;
    obj.password = password
    console.log(obj)
}
