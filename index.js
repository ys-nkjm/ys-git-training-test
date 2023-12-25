function fizzBuzz() {
  const val = document.getElementById('input-max-number').value;
  const maxNumber = parseInt(val, 10);

  if(typeof maxNumber !== 'number') {
    console.log('入力内容は数値にしてください。')
    return;
  }

  for(let i = 1; i <= maxNumber; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    else if (i % 5 === 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const buttonElem = document.getElementById('button');
  buttonElem.addEventListener('click', fizzBuzz, false);
})