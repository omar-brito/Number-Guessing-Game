const min = document.querySelector('.min');
const max = document.querySelector('.max');
const submit = document.querySelector('#submit');
const inputValue = document.getElementById('number');
const message = document.getElementById('messageOutPut');
const form =  document.getElementById('form');

let minNum = 1,
    maxNum = 10,
    winningNum = Math.floor(Math.random() * 11), //random number between 1-10
    guessLeft = 4;


min.textContent = minNum;
max.textContent = maxNum;


submit.addEventListener('click', displayResult);



function displayResult() {

    let guess = parseInt(inputValue.value);
    
    //Check inputvalue 
    //console.log(guess);

    if(isNaN(guess) || guess < minNum || guess > maxNum) {
        //if statements checks for empty input. 
        //console.log('Please enter a number');
        
        messageList('Please enter a number between 1 and 10', `red`);
        
    } else {
           guessLeft -= 1;

            if(guess === winningNum) {
        
               messageList('YOU WON!', `green`);
               inputHTML();
            }
              else if(guessLeft >= 1) {
           
                messageList(`Keep Trying! You have ${guessLeft} guesses left`, `blue`);
              }
              else {
                messageList(`Sorry,you lost`, `red`);
                inputHTML();
              }

         }

         inputValue.value = '';

}

function messageList(msg, colors) {
    message.textContent = msg;
    message.style.color = colors;
}

function inputHTML() {
  submit.innerHTML = 'Play Again';
  submit.className += 'play-again';
}

form.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }

});



