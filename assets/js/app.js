
let item = 10;
let secret = 1 + Math.floor(Math.random() * 100);


function guessNumber(){

    let number = +userNumber.value;
    console.log(number, secret);

    if(item == 0){
        helpText.innerHTML = 'Попытки закончились!';
        round.innerHTML = 0;
        return;
    }

    if(number > secret){
        helpText.innerHTML = `Загаданное число меньше, чем ${number}`;
        round.innerHTML = item;
    } else if(number < secret){
        helpText.innerHTML = `Загаданное число больше, чем ${number}`;
        round.innerHTML = item;
    } else {
        helpText.innerHTML = `Вы угадали! Это действительно число ${secret}`;
        round.innerHTML = item;
    }

    item--;
        
}