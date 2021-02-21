let numberN, numberM, isEvenSkip;
let sum = 0;

do {
  numberN = prompt("Введіть ціле число N");
  numberM = prompt("Введіть ціле число M");
  isEvenSkip = confirm("Бажаєте пропускати парні числа?");

  if (numberN !== null && numberM !== null) {
    numberN = +numberN;
    numberM = +numberM;
  };
  if (!Number.isInteger(numberN) || !Number.isInteger(numberM)) {
    alert("Ви вказали невірні значення чисел");
  } else if (numberN >= numberM) {
    alert("Число M повинно бути більшим за число N");
  };
} while (!Number.isInteger(numberN) || !Number.isInteger(numberM) || (numberN >= numberM));

for (let i = numberN; i <= numberM; i++) {
  if (isEvenSkip) {
    if (i % 2 !== 0) {
      sum += i;
    }
  } else {
    sum += i;
  }
};

alert(`Сума чисел становить: ${sum}`);

