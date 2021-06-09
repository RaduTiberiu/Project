document.getElementById('user-error').style.display = 'none';
document.getElementById('pass-error').style.display = 'none';

let userInput = document.getElementById('user');
let passInput = document.getElementById('pass');
let button = document.getElementById('btn');

button.disabled = true;
if(button.disabled) button.style.backgroundColor = '#38383894';


userInput.addEventListener('blur', function(){
    if(userInput.value.length < 6) {
            userInput.style.borderColor = 'red';
            button.disabled = true;
            document.getElementById('user-error').style.display = 'inline';
        };
    if(userInput.value.length >= 6) {
            userInput.style.borderColor = '#2e2e2e';
            button.disabled = false;
            document.getElementById('user-error').style.display = 'none'};
});

passInput.addEventListener('blur', function(){
    if(passInput.value.length < 8) {
            passInput.style.borderColor = 'red';
            button.disabled = true;
            document.getElementById('pass-error').style.display = 'inline';
        };
    if(passInput.value.length >= 8) {
            passInput.style.borderColor = '#2e2e2e';
            button.disabled = false;
            button.style.backgroundColor = '#134826';
            document.getElementById('pass-error').style.display = 'none'};
});