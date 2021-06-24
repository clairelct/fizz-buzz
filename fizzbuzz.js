// [Algo] FIZZBUZZ

// Display numbers between 1 and N by following the rules:

// if number can be divided by 3: display Fizz ;
// if number can be divided by 5: display Buzz ;
// if number can be divided by 3 AND 5 : display FizzBuzz ;
// else: display the number.

//*********************************************************

// Generate a random integer each time displayMessage() is called.
const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const displayMessage = (num) => {
  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      return num + " est divisible par 3 et par 5 !";
      break;
    case num % 3 === 0:
      return num + " est divisible par 3.";
      break;
    case num % 5 === 0:
      return num + " est divisible par 5.";
      break;
    default:
      return num + " n'est divisible ni par 3 ni par 5 :-(";
      break;
  }
};

console.log(displayMessage(randomInt(1, 1000)));
