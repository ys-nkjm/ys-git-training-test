function outputText(message) {
  const unOrderListElem = document.getElementById('list');

  let newListItemElem = document.createElement('li');
  newListItemElem.textContent = message;

  unOrderListElem.appendChild(newListItemElem);
}

function fizzBuzz() {
  const val = document.getElementById('input-max-number').value;
  const maxNumber = parseInt(val, 10);

  if(typeof maxNumber !== 'number') {
    console.log('入力内容は数値にしてください。')
    return;
  }

  for(let i = 1; i <= maxNumber; i++) {
    if (i % 15 === 0) {
      outputText('FizzBuzz');
      console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
      outputText('Fizz');
      console.log('Fizz');
    }
    else if (i % 5 === 0) {
      outputText('Buzz');
      console.log('Buzz')
    }
    else {
      outputText(String(i));
      console.log(i)
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const buttonElem = document.getElementById('button');
  buttonElem.addEventListener('click', fizzBuzz, false);
})
