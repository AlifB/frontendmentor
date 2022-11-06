const cardholder = document.querySelector('.cardholder');
const inputHolder = document.querySelector('#cardholder-name');

const inputNumber = document.querySelector('#card-number');
const cardNumber = document.querySelector('.card-number');

const inputCVC = document.querySelector('#cvc');
const cardCVC = document.querySelector('.card-cvc');

const inputsCardExp = document.querySelectorAll('.exp-input');
const cardExp = document.querySelector('.exp-date');

function updateName() {
    if (inputHolder.value === '')
        cardholder.innerHTML = 'Jane Appleseed';
    else
        cardholder.innerHTML = inputHolder.value;
}

function addSpaces(string) {
    let value = string.replaceAll(' ', '').split('');
    let spaces = 0;
        for (let i = 0; i < value.length - spaces; i++) {
            if (i % 4 == 0 && i != 0) {
                value.splice(i + spaces, 0, ' ');
                spaces++;
            }
        }
    return value.join('');
}

function updateNumber(length, input, field) {
    let num = input.value.replaceAll(' ', '').split('');
    while (num.length < length) {
        num.push('0');
    }
    let output = num.join('');
    output = addSpaces(output);
    if (output === '') {
        if (length == 16) {
            field.innerHTML = '0000 0000 0000 0000';
        } else if (length == 3) {
            field.innerHTML = '000';
        }
        else {
            field.innerHTML = '';
            console.error('No placeholder for length ', length);
        }
    } else {
        field.innerHTML = output;
    }
}

inputHolder.addEventListener('input', () => {
    updateName();
});

inputNumber.addEventListener('input', (event) => {
    updateNumber(16, inputNumber, cardNumber);
    inputNumber.value = addSpaces(inputNumber.value);
});

inputCVC.addEventListener('input', () => {
    updateNumber(3, inputCVC, cardCVC);
});

inputsCardExp.forEach((elem) => {
    elem.addEventListener('input', () => {
        let month = inputsCardExp[0].value;
        if(month.length < 2) month = '0' + month;
        let year = inputsCardExp[1].value;
        if(year.length < 2) year = '0' + year;
        cardExp.innerHTML = (month === '' ? '00' : month) + '/' + (year === '' ? '00' : year);
    });
});

updateName();
updateNumber(16, inputNumber, cardNumber);
updateNumber(3, inputCVC, cardCVC);

document.forms['card-detais'].addEventListener('submit', (event) => {
    event.preventDefault();
});