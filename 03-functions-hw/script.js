// функція яка отримує будь-яке число та виводить найбільшу цифру в цьому числі

function getMaxDigit(number) {
  const arr = number.toString().split('');
  return Math.max(...arr);
}

// функція, яка визначає ступінь числа

function getDegree(number, power) {
  let numInDegree = 1;
  for (let i = 1; i <= power; i++) {
    numInDegree *= number;
  }
  return numInDegree;
}

// функція, яка форматує ім'я, роблячи першу букву великою

function getFormatName(name) {
  const formatName = name.charAt(0).toUpperCase() + name.substr(1, name.length-1).toLowerCase();
  return formatName;
}

// функція, яка вираховує суму, що залишається після оплати податку

function geWithoutTax (sum, tax) {
  const sumWithoutTax = sum - sum*(tax/100);
  return sumWithoutTax;
}

// функція, яка повертає випадкове ціле число в діапазоні від N до M

function getRandomNumber(N, M) {
  const randomNumber = Math.floor(Math.random() * (M - N + 1) ) + N;
  return randomNumber;
}

// функція, яка рахує скільки разів певна буква повторюється в слові

function countLetter(letter, word) {
  const wordLowerCase = word.toLowerCase();
  let counter = 0;
  for (let i = 0; i < wordLowerCase.length; i++) {
    if (letter === wordLowerCase[i]) {
      counter++;
    }
  }
  return counter;
}

//функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку

function convertCurrency(currency) {
  currency = currency.toUpperCase();
  const currencyRatio = 28;
  if (currency.endsWith('$')) {
    return parseInt(currency.slice(0, currency.length)) * currencyRatio + ' грн.';
  };
  if (currency.endsWith('UAH')) {
    return parseInt(currency.slice(0, currency.length)) / currencyRatio + '$';
  };
  return "you choose incorrect currency";
}

//функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

function getRandomPassword(passLength = 8) {
  return Math.trunc((Math.random() * (1 - 0.1) + 0.1) * (10 ** passLength));
}

// функція, яка видаляє всі вказані букви з речення

function deleteLetters(letter, word) {
  const wordLowerCase = word.toLowerCase();
  let wordWithoutLetter = '';
  for (let i = 0; i < wordLowerCase.length; i++) {
    if (letter !== wordLowerCase[i]) {
      wordWithoutLetter += wordLowerCase[i];
    }
  }
  return wordWithoutLetter;
}

// функція, яка перевіряє, чи є слово паліндромом

function isPalyndrom(word) {
  word = word.replace(/ /g, '').toLowerCase();
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// функція, яка видалить з речення букви, які зустрічаються більше 1 разу

function deleteDuplicateLetter(sentence) {
  const sentenceLowerCase = sentence.toLowerCase();
  let sentenceWithoutDublicate = '';
  for (let i = 0; i < sentenceLowerCase.length; i++) {
    if (sentenceLowerCase.indexOf(sentenceLowerCase[i]) === sentenceLowerCase.lastIndexOf(sentenceLowerCase[i])) {
      sentenceWithoutDublicate += sentenceLowerCase[i]
    }
  }
  return sentenceWithoutDublicate;
}

document.writeln(`<b>Function 1:</b> the most digit of number "5687" is => ${getMaxDigit(5687)} <br>`);
document.writeln(`<b>Function 2:</b> the degree "3" of number "5" is => ${getDegree(5, 3)} <br>`);
document.writeln(`<b>Function 3:</b> the formatted version of name "sVIaTosLaV" is => ${getFormatName("sVIaTosLaV")} <br>`);
document.writeln(`<b>Function 4:</b> salary 1000 without tax 19.5% is => ${geWithoutTax (1000, 19.5)} <br>`);
document.writeln(`<b>Function 5:</b> random number from "1" to "100" is => ${getRandomNumber(1, 100)} <br>`);
document.writeln(`<b>Function 6:</b> quantity letters "а" in word "Асталавіста" is => ${countLetter("а", "Асталавіста")} <br>`);
document.writeln(`<b>Function 7:</b> <br>
                  conversion 2800 UAH to dollars (ratio = 28:1) is => ${convertCurrency('2800uah')} || <br>
                  conversion 100$ to hryvnias (ratio = 1:28) is => ${convertCurrency('100$')} || <br>
                  conversion 100EUR to hryvnias is => ${convertCurrency('100eur')} <br>`);
document.writeln(`<b>Function 8:</b> <br>
                  random "4" digit numeric password is => ${getRandomPassword(4)} || <br>
                  random "default" digit numeric password is => ${getRandomPassword()} <br>`);
document.writeln(`<b>Function 9:</b> when letter "b" has deleted from word "blablabla" => ${deleteLetters('b', "blablabla")} <br>`);
document.writeln(`<b>Function 10:</b> <br>
                  is word "мадам" polyndrom? => ${isPalyndrom("мадам")} ||<br>
                  is word "кокос" polyndrom? => ${isPalyndrom("кокос")} || <br>
                  is sentence "Я несу гусеня" polyndrom? => ${isPalyndrom("Я несу гусеня")} <br>`);
document.writeln(`<b>Function 11:</b> when repeat char has deleted from sentence "Бісквіт був дуже ніжним" => 
                  ${deleteDuplicateLetter("Бісквіт був дуже ніжним")} <br>`);