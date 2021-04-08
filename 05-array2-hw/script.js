// 1. function returns random numbers
function getRandomArray(length, min, max) {
  let randomArray = [];

  for (let i = 0; i < length; i++) {
    randomArray.push(Math.round(Math.random() * (max - min) + min));
  }

  return randomArray;
};

// 2. function searches mode of numbers
function getMode(...numbers) {
  const numArray = numbers.filter(number => Number.isInteger(number));
  const sortedArray = numArray.sort((a, b) => a - b);
  let nums = {};

  sortedArray.forEach(elem => {
    if (nums[elem] === undefined) {
      nums[elem] = 0;
    }
    nums[elem] += 1;
  });

  const tempArr = Object.entries(nums);
  let maxValue = tempArr[0][1];
  let arrayMode = tempArr[0][0];
  tempArr.forEach(elem => {
    if (elem[1] > maxValue) {
      maxValue = elem[1];
      arrayMode = elem[0];
    }
  });

  return arrayMode;
}

// 3. function counts arithmetic mean
function getAverage(...numbers) {
  const numArray = numbers.filter(number => Number.isInteger(number));
  const average = numArray.reduce((acc, currElem) => {
    return acc + currElem;
  }) / numArray.length;

  return average;
};

// 4. function counts median
function getMedian(...numbers) {
  const numArray = numbers.filter(number => Number.isInteger(number));
  const sortedArray = numArray.sort((a, b) => a - b);
  let median = sortedArray[(sortedArray.length - 1) / 2];

  if (sortedArray.length % 2 === 0) {
    median = (sortedArray[((sortedArray.length - 1) - 1) / 2] + sortedArray[((sortedArray.length - 1) + 1) / 2]) / 2;
  };

  return median;
};

// 5. function filters even numbers
function filterEvenNumbers(...numbers) {
  return numbers.filter(num => num % 2 !== 0);
};

// 6. function counts only numbers bigger than 0
function countPositiveNumbers(...numbers) {
  const positiveNums = numbers.filter(elem => elem > 0);
  return positiveNums.length;
};

// 7. function filters array and returns only numbers which divide on 5
function getDividedByFive(...numbers) {
  return numbers.filter(num => num % 5 === 0);
};

// 8. function replaces bad words
function replaceBadWords(string) {
  const wordsArr = string.split(' ');
  const badWords = ['fuck', 'shit'];

  const editArr = wordsArr.map(word => {
    for (const badWord of badWords) {
      if (word.includes(badWord)) {
        return word.replace(badWord, '*'.repeat(badWord.length));
      }
    }
    return word;
  });

  const editString = editArr.join(' ');

  return editString;
};

// 9. function separates word by every 3 chars
function divideByThree(word) {
  let result = [];

  if (word.length <= 3) {
    result.push(word);
    return result;
  };

  let tempValue = '';
  for (let i = 0; i < word.length; i++) {
    tempValue += word[i];
    if (tempValue.length === 3) {
      result.push(tempValue);
      tempValue = '';
    }
  };

  if (tempValue !== '') {
    result.push(tempValue);
  };

  return result;
};

document.writeln(`<b>Function 1:</b> function returns 10 random numbers from 0 to 100  => <i>${getRandomArray(10, 0 , 100)}</i> <br>`);

document.writeln(`<b>Function 2:</b> function searches mode of numbers from (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)  => 
<i>${getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i> <br>`);

document.writeln(`<b>Function 3:</b> function counts arithmetic mean of numbers from (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)   =>
<i>${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i> <br>`);

document.writeln(`<b>Function 4:</b> <br> function counts median of numbers from (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)   =>
<i>${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i> <br>
median of numbers from (1, 2, 3, 4)   => <i>${getMedian(1, 2, 3, 4)}</i> <br>
median of numbers from (1, 2, 3, 4, 5)   => <i>${getMedian(1, 2, 3, 4, 5)}</i> <br>`);

document.writeln(`<b>Function 5:</b> function filters even numbers from (1, 2, 3, 4, 5, 6)   =>
<i>${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</i> <br>`);

document.writeln(`<b>Function 6:</b> function counts only numbers bigger than 0 from (1, -2, 3, -4, -5, 6)   =>
<i>${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</i> <br>`);

document.writeln(`<b>Function 7:</b> function filters array and returns only numbers which divide on 5 
from (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)   =>
<i>${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i> <br>`);

document.writeln(`<b>Function 8:</b> function replaces bad words from sentence "Are you fucking kidding? Holy shit! It's bullshit!"   =>
<i>${replaceBadWords("Are you fucking kidding? Holy shit! It's bullshit!")}</i> <br>`);

document.writeln(`<b>Function 9:</b> <br> function separates word "Commander" by every 3 chars   =>
<i>${divideByThree("Commander")}</i> <br>
word "live"   => <i>${divideByThree("live")}</i> <br>
word "big"   => <i>${divideByThree("big")}</i> <br>`);

document.writeln(`<b>Function 10:</b> I'm so sad. I don't have any idea how to do this task :(`);

// duplicates results in console
console.log('Function 1 =>', getRandomArray(10, 0, 100));
console.log('Function 2 =>', getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('Function 3 =>', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('Function 4.1 =>', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('Function 4.2 =>', getMedian(1, 2, 3, 4));
console.log('Function 4.3 =>', getMedian(1, 2, 3, 4, 5));
console.log('Function 5 =>', filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log('Function 6 =>', countPositiveNumbers(1, -2, 3, -4, -5, 6));
console.log('Function 7 =>', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('Function 8 =>', replaceBadWords("Are you fucking kidding? Holy shit! It's bullshit!"));
console.log('Function 9.1 =>', divideByThree("Commander"));
console.log('Function 9.2 =>', divideByThree("live"));
console.log('Function 9.3 =>', divideByThree("big"));