const cardholder = document.querySelector('.cardholder');
const inputHolder = document.querySelector('#cardholder-name');

const inputNumber = document.querySelector('#card-number');
const cardNumber = document.querySelector('.card-number');

const inputCVC = document.querySelector('#cvc');
const cardCVC = document.querySelector('.card-cvc');

function updateName() {
    if (inputHolder.value === '')
        cardholder.innerHTML = 'Jane Appleseed';
    else
        cardholder.innerHTML = inputHolder.value;
}

function updateNumber(length, input, field) {
    let num = input.value.split('');
    while (num.length < length) {
        num.push('0');
    }
    if(length == 16) {
        for (let i = 0; i < num.length; i++) {
            if (i % 5 == 0) {
                num.splice(i, 0, ' ');
            }
        }
    }
    let output = num.join('');
    if (output === '') {
        if(length == 16)
            field.innerHTML = '0000 0000 0000 0000';
        else if(length == 3) {
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

inputNumber.addEventListener('input', () => {
    updateNumber(16, inputNumber, cardNumber);
});

inputCVC.addEventListener('input', () => {
    updateNumber(3, inputCVC, cardCVC);
});

updateName();
updateNumber(16, inputNumber, cardNumber);
updateNumber(3, inputCVC, cardCVC);