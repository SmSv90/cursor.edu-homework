/* 
Домашнє завдання по темі Масиви
(!) Домашні завдання потрібно здавати у вигляді сторінки на GITPAGES. Відео про те, як здавати ДЗ

У цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір)

Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2


Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"
Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]
Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]
*/

// function which returns random numbers
function getRandomArray(length, min, max) {
  let randomArray = [];
  
  for (let i = 0; i < length; i++) {
    randomArray.push( Math.round(Math.random() * (max - min) + min) );
  }

  return randomArray;
};

// NOT WORK
function getMode(...numbers) {
  
}

// function counts arithmetic mean
function getAverage(...numbers) {
  const numArray = numbers.filter( number => Number.isInteger(number) );
  const average = numArray.reduce( (acc, currElem) => {
    return acc + currElem;
  }) / numArray.length;

  return average;
};

// function counts median
function getMedian(...numbers) {
  const numArray = numbers.filter( number => Number.isInteger(number) );
  const sortedArray = numArray.sort( (a, b) => a - b);
  let median = sortedArray[(sortedArray.length-1) / 2];

  if (sortedArray.length % 2 === 0) {
    median = (sortedArray[((sortedArray.length - 1) -1) / 2] + sortedArray[((sortedArray.length-1) + 1) / 2]) / 2;
  };

  return median;
};

// function filters even numbers
function filterEvenNumbers(...numbers) {
  return numbers.filter(num => num % 2 !== 0);
};

// function counts only numbers bigger than 0
function countPositiveNumbers(...numbers) {
  const sumPositiveNum = numbers.filter(elem => elem > 0);
  return sumPositiveNum.length;
}

// console.log(getRandomArray(10, 0 , 100));
// console.log(getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(getMedian(1, 2));
// console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(getMedian(1, 2, 3, 4, 5));
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
