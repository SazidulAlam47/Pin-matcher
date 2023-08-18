//disable text selection
document.addEventListener('selectstart', function(event){
    event.preventDefault();
});  

//variables
const randomBtn = document.getElementById('generate-btn');
const randomDisplay = document.getElementById('generate-display');

const allNumberBtn = document.getElementById('calc-body');
const inputDisplay = document.getElementById('input-display');

const matchNotify = document.getElementById('pin-match');
const notMatchNotify = document.getElementById('pin-not-match');

const tryCount = document.getElementById('try');

// random number generation
randomBtn.addEventListener('click', function(){
    let randomNumber = parseInt(Math.random()*10000);
    randomNumber = String(randomNumber);
    //add 0 if number is less than 4 digit
    while (randomNumber.length <4) {
        randomNumber = '0' + randomNumber;
    }
    randomDisplay.value = randomNumber;
    //reset other value
    inputDisplay.value = '';
    matchNotify.style.display = 'none';
    notMatchNotify.style.display = 'none';
});

//input section
let submitIsPressed = false;

allNumberBtn.addEventListener('click', function(event){
    let press = event.target.innerText;
    console.log(event.target);
    if (press.length > 1) {
        return;
    }
    if(submitIsPressed){
        inputDisplay.value = '';
        matchNotify.style.display = 'none';
        notMatchNotify.style.display = 'none';
    }
    if(press == 'C'){
        inputDisplay.value = '';
        matchNotify.style.display = 'none';
        notMatchNotify.style.display = 'none';
        if(submitIsPressed) randomDisplay.value = '';
    }
    else if(press == '<'){
        inputDisplay.value = inputDisplay.value.slice(0, -1);
    }
    else{
        inputDisplay.value = inputDisplay.value + press;
    }
    submitIsPressed = false;
});

//submit or match section
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){
    if(randomDisplay.value == inputDisplay.value){
        matchNotify.style.display = 'block';
    }
    else{
        notMatchNotify.style.display = 'block';
        tryCount.innerText = parseInt(tryCount.innerText) - 1;
        if(tryCount.innerText == 0){
            submitBtn.disabled = true;
        }
    }
    submitIsPressed = true;
});