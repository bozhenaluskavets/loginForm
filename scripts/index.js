const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkboxInput = document.getElementById('checkbox');
const button = document.getElementById('btn');
const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const form = document.getElementById('form');
const defaultStyles = signIn.classList.add('active');

usernameInput.addEventListener('keyup', isEmpty);
passwordInput.addEventListener('keyup', isEmpty);
checkboxInput.addEventListener('keyup', isEmpty);
checkboxInput.addEventListener('click', isEmpty);

signIn.addEventListener('click', () => {
    signIn.classList.add('active');
    signUp.classList.remove('active');
    form.reset();
    isEmpty();
})

signUp.addEventListener('click', () => {
    signUp.classList.add('active');
    signIn.classList.remove('active');
    form.reset();
    isEmpty();
})

function isEmpty() {
    let username = usernameInput.value;
    let password = passwordInput.value;

    const isDisabled = !(username?.length && password?.length && checkboxInput.checked);
    button.disabled = isDisabled;
}

function getInputValue() {
    let username = usernameInput.value;
    let password = passwordInput.value;
    let obj = {};
    obj.username = username;
    obj.password = password;
    console.log(obj);
}