let item = 10;
let secret = 1 + Math.floor(Math.random() * 100);

let isFail = false;


function guessNumber(){

    if(isFail == true){
        return;
    }

    let number = +userNumber.value;

    console.log(number, secret);

    if(item == 1) {
        helpText.innerHTML = `Попытки закончились! Правильный ответ: ${secret} `;
        round.innerHTML = 0;
        return;
    } else {
        userNumber.innerHTML = `${number}`;
    }

    item--;
    
    if(number == secret){
        helpText.innerHTML = `Вы угадали! Это действительно число ${secret}`;
        isFail = true;
    } else if(number < secret){
        helpText.innerHTML = `Загаданное число больше, чем ${number}`;
        round.innerHTML = item;
    } else {
        helpText.innerHTML = `Загаданное число меньше, чем ${number}`;
        round.innerHTML = item;
    }

    
    console.log(item);
}

