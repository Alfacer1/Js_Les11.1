// // Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 10; i <= 30; i += 0.5) {
    console.log(i);
  }


  
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * 27;
    console.log(`${dollars} доларів = ${uah} гривень`);
  }



// // Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const N = 10;

for (let i = 1; i <= 100; i++) {
  const square = i * i;
  console.log(square <= N ? i : '');
}


// // Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const number = 13;

let isPrime = true;
if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(`${number} є простим числом: ${isPrime}`);
  


// // Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const number = 27;

let power = 0;
let result = 1;

while (result < number) {
  result *= 3;
  power = (result === number) ? power + 1 : power;
}

const isPowerOfThree = result === number;

console.log(isPowerOfThree);