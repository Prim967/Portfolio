/* Birthday Guesser*/
const button = document.querySelector('button');
let h4 = document.querySelector('h4');

let date1 = new Date('1996-09-09');

button.addEventListener('click', () => {
    const dateInput = document.getElementById('birthday').value;

    let date2 = new Date(dateInput);
    
    if(isNaN(date2.getTime())){
        h4.innerHTML = "This is not a date. Please enter a valid date"
    }
    else {
    if (date1.getTime() === date2.getTime()){
        h4.innerHTML = 'You have won!';
    }
    else {
        h4.innerHTML = 'Try again!';
    }
    }
});

/*Hint events */

const hint1 = document.getElementById('hint1')
const hint2 = document.getElementById('hint2')
const hint3 = document.getElementById('hint3')
let displayHint1 = document.getElementById('display-hint1')
let displayHint2 = document.getElementById('display-hint2')
let displayHint3 = document.getElementById('display-hint3')

hint1.addEventListener('click', () => {
    displayHint1.innerHTML = "The Summer Olympics were held in Atlanta, USA, during this year."
}
);

hint2.addEventListener('click', () => {
    displayHint2.innerHTML = "I'm a Virgo, so think late summer, early autumn."
}
);

hint3.addEventListener('click', () => {
    displayHint3.innerHTML = "My birthday falls in the first half of September."
}
);

