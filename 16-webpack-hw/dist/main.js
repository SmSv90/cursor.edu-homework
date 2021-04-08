/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../03-functions-hw/script.js":
/*!************************************!*\
  !*** ../03-functions-hw/script.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeWork03\": () => (/* binding */ homeWork03)\n/* harmony export */ });\n// функція яка отримує будь-яке число та виводить найбільшу цифру в цьому числі\r\n\r\nfunction getMaxDigit(number) {\r\n  const arr = number.toString().split('');\r\n  return Math.max(...arr);\r\n}\r\n\r\n// функція, яка визначає ступінь числа\r\n\r\nfunction getDegree(number, power) {\r\n  let numInDegree = 1;\r\n  for (let i = 1; i <= power; i++) {\r\n    numInDegree *= number;\r\n  }\r\n  return numInDegree;\r\n}\r\n\r\n// функція, яка форматує ім'я, роблячи першу букву великою\r\n\r\nfunction getFormatName(name) {\r\n  const formatName = name.charAt(0).toUpperCase() + name.substr(1, name.length-1).toLowerCase();\r\n  return formatName;\r\n}\r\n\r\n// функція, яка вираховує суму, що залишається після оплати податку\r\n\r\nfunction geWithoutTax (sum, tax) {\r\n  const sumWithoutTax = sum - sum*(tax/100);\r\n  return sumWithoutTax;\r\n}\r\n\r\n// функція, яка повертає випадкове ціле число в діапазоні від N до M\r\n\r\nfunction getRandomNumber(N, M) {\r\n  const randomNumber = Math.floor(Math.random() * (M - N + 1) ) + N;\r\n  return randomNumber;\r\n}\r\n\r\n// функція, яка рахує скільки разів певна буква повторюється в слові\r\n\r\nfunction countLetter(letter, word) {\r\n  const wordLowerCase = word.toLowerCase();\r\n  let counter = 0;\r\n  for (let i = 0; i < wordLowerCase.length; i++) {\r\n    if (letter === wordLowerCase[i]) {\r\n      counter++;\r\n    }\r\n  }\r\n  return counter;\r\n}\r\n\r\n//функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку\r\n\r\nfunction convertCurrency(currency) {\r\n  currency = currency.toUpperCase();\r\n  const currencyRatio = 28;\r\n  if (currency.endsWith('$')) {\r\n    return parseInt(currency.slice(0, currency.length)) * currencyRatio + ' грн.';\r\n  };\r\n  if (currency.endsWith('UAH')) {\r\n    return parseInt(currency.slice(0, currency.length)) / currencyRatio + '$';\r\n  };\r\n  return \"you choose incorrect currency\";\r\n}\r\n\r\n//функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.\r\n\r\nfunction getRandomPassword(passLength = 8) {\r\n  return Math.trunc((Math.random() * (1 - 0.1) + 0.1) * (10 ** passLength));\r\n}\r\n\r\n// функція, яка видаляє всі вказані букви з речення\r\n\r\nfunction deleteLetters(letter, word) {\r\n  const wordLowerCase = word.toLowerCase();\r\n  let wordWithoutLetter = '';\r\n  for (let i = 0; i < wordLowerCase.length; i++) {\r\n    if (letter !== wordLowerCase[i]) {\r\n      wordWithoutLetter += wordLowerCase[i];\r\n    }\r\n  }\r\n  return wordWithoutLetter;\r\n}\r\n\r\n// функція, яка перевіряє, чи є слово паліндромом\r\n\r\nfunction isPalyndrom(word) {\r\n  word = word.replace(/ /g, '').toLowerCase();\r\n  for (let i = 0; i < word.length / 2; i++) {\r\n    if (word[i] !== word[word.length - 1 - i]) {\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n}\r\n\r\n// функція, яка видалить з речення букви, які зустрічаються більше 1 разу\r\n\r\nfunction deleteDuplicateLetter(sentence) {\r\n  const sentenceLowerCase = sentence.toLowerCase();\r\n  let sentenceWithoutDublicate = '';\r\n  for (let i = 0; i < sentenceLowerCase.length; i++) {\r\n    if (sentenceLowerCase.indexOf(sentenceLowerCase[i]) === sentenceLowerCase.lastIndexOf(sentenceLowerCase[i])) {\r\n      sentenceWithoutDublicate += sentenceLowerCase[i]\r\n    }\r\n  }\r\n  return sentenceWithoutDublicate;\r\n}\r\n\r\nconst homeWork03 = {\r\n  getMaxDigit,\r\n  getDegree,\r\n  getFormatName,\r\n  geWithoutTax,\r\n  getRandomNumber,\r\n  countLetter,\r\n  convertCurrency,\r\n  getRandomPassword,\r\n  deleteLetters,\r\n  isPalyndrom,\r\n  deleteDuplicateLetter\r\n}\r\n\r\ndocument.writeln(`<b>Function 1:</b> the most digit of number \"5687\" is => ${getMaxDigit(5687)} <br>`);\r\ndocument.writeln(`<b>Function 2:</b> the degree \"3\" of number \"5\" is => ${getDegree(5, 3)} <br>`);\r\ndocument.writeln(`<b>Function 3:</b> the formatted version of name \"sVIaTosLaV\" is => ${getFormatName(\"sVIaTosLaV\")} <br>`);\r\ndocument.writeln(`<b>Function 4:</b> salary 1000 without tax 19.5% is => ${geWithoutTax (1000, 19.5)} <br>`);\r\ndocument.writeln(`<b>Function 5:</b> random number from \"1\" to \"100\" is => ${getRandomNumber(1, 100)} <br>`);\r\ndocument.writeln(`<b>Function 6:</b> quantity letters \"а\" in word \"Асталавіста\" is => ${countLetter(\"а\", \"Асталавіста\")} <br>`);\r\ndocument.writeln(`<b>Function 7:</b> <br>\r\n                  conversion 2800 UAH to dollars (ratio = 28:1) is => ${convertCurrency('2800uah')} || <br>\r\n                  conversion 100$ to hryvnias (ratio = 1:28) is => ${convertCurrency('100$')} || <br>\r\n                  conversion 100EUR to hryvnias is => ${convertCurrency('100eur')} <br>`);\r\ndocument.writeln(`<b>Function 8:</b> <br>\r\n                  random \"4\" digit numeric password is => ${getRandomPassword(4)} || <br>\r\n                  random \"default\" digit numeric password is => ${getRandomPassword()} <br>`);\r\ndocument.writeln(`<b>Function 9:</b> when letter \"b\" has deleted from word \"blablabla\" => ${deleteLetters('b', \"blablabla\")} <br>`);\r\ndocument.writeln(`<b>Function 10:</b> <br>\r\n                  is word \"мадам\" polyndrom? => ${isPalyndrom(\"мадам\")} ||<br>\r\n                  is word \"кокос\" polyndrom? => ${isPalyndrom(\"кокос\")} || <br>\r\n                  is sentence \"Я несу гусеня\" polyndrom? => ${isPalyndrom(\"Я несу гусеня\")} <br>`);\r\ndocument.writeln(`<b>Function 11:</b> when repeat char has deleted from sentence \"Бісквіт був дуже ніжним\" => \r\n                  ${deleteDuplicateLetter(\"Бісквіт був дуже ніжним\")} <br>`);\n\n//# sourceURL=webpack://16-webpack-hw/../03-functions-hw/script.js?");

/***/ }),

/***/ "../04-array-hw/script.js":
/*!********************************!*\
  !*** ../04-array-hw/script.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeWork04\": () => (/* binding */ homeWork04)\n/* harmony export */ });\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\r\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\r\nconst marks = [4, 5, 5, 3, 4, 5];\r\n\r\nconst pairs = getPairs(students),\r\n      pairsTheme = getPairsTheme(students, themes),\r\n      studentMark = getStudentMark(students, marks),\r\n      pairsMark = getPairsMark(students, themes);      \r\n\r\n\r\nfunction getPairs(students) {\r\n  let femaleStudents = [],\r\n      maleStudents = [],\r\n      pairs = [];\r\n\r\n  for (const name of students) {\r\n    if (name.charAt(name.length - 1) === \"а\") {\r\n      femaleStudents.push(name);\r\n    } else {\r\n      maleStudents.push(name);\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < students.length / 2; i++) {\r\n    pairs.push([femaleStudents[i], maleStudents[i]]);\r\n  }\r\n\r\n  return pairs;\r\n};\r\n\r\nfunction getPairsTheme(students, themes) {\r\n  let pairsTheme = [];\r\n  const array = getPairs(students);\r\n\r\n  for (let i = 0; i < array.length; i++) {\r\n    pairsTheme.push([array[i].join(' і '), themes[i]]);\r\n  }\r\n\r\n  return pairsTheme;\r\n};\r\n\r\nfunction getStudentMark(students, marks) {\r\n  let studentMark = [];\r\n\r\n  for (let i = 0; i < students.length; i++) {\r\n    studentMark.push([students[i], marks[i]]);\r\n  }\r\n  return studentMark;\r\n};\r\n\r\nfunction getPairsMark(students, themes) {\r\n  const minMark = 1,\r\n        maxMark = 5;\r\n\r\n  let pairsMarks = getPairsTheme(students, themes);\r\n  const len = pairsMarks.length;\r\n  \r\n  for (let i = 0; i < len; i++) {\r\n    pairsMarks[i].push(Math.round(Math.random()*(maxMark - minMark) + minMark));\r\n  }\r\n  \r\n  return pairsMarks;\r\n};\r\n\r\nconst homeWork04 = {\r\n  getPairs,\r\n  getPairsTheme,\r\n  getStudentMark,\r\n  getPairsMark,\r\n  students,\r\n  marks,\r\n  themes\r\n}\r\n\r\nconsole.log(`Array of student's pairs:`);\r\nconsole.log(pairs);\r\nconsole.log(`Array of student's pairs with theme:`);\r\nconsole.log(pairsTheme);\r\nconsole.log(`Array of student's marks:`);\r\nconsole.log(studentMark);\r\nconsole.log(`Array of student's pairs with theme and mark:`);\r\nconsole.log(pairsMark);\r\n\n\n//# sourceURL=webpack://16-webpack-hw/../04-array-hw/script.js?");

/***/ }),

/***/ "../05-array2-hw/script.js":
/*!*********************************!*\
  !*** ../05-array2-hw/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeWork05\": () => (/* binding */ homeWork05)\n/* harmony export */ });\n// 1. function returns random numbers\r\nfunction getRandomArray(length, min, max) {\r\n  let randomArray = [];\r\n  \r\n  for (let i = 0; i < length; i++) {\r\n    randomArray.push( Math.round(Math.random() * (max - min) + min) );\r\n  }\r\n\r\n  return randomArray;\r\n};\r\n\r\n// 2. function searches mode of numbers\r\nfunction getMode(...numbers) {\r\n  const numArray = numbers.filter(number => Number.isInteger(number));\r\n  const sortedArray = numArray.sort( (a, b) => a - b );\r\n  let nums = {};\r\n\r\n  sortedArray.forEach( elem => {\r\n    if(nums[elem] === undefined) {\r\n      nums[elem] = 0;\r\n    }\r\n    nums[elem] += 1;\r\n  });\r\n\r\n  const tempArr = Object.entries(nums);\r\n  let maxValue = tempArr[0][1];\r\n  let arrayMode = tempArr[0][0];\r\n  tempArr.forEach(elem=> {\r\n    if (elem[1] > maxValue) {\r\n      maxValue = elem[1];\r\n      arrayMode = elem[0];\r\n    }\r\n  });\r\n\r\n  return arrayMode;\r\n}\r\n\r\n// 3. function counts arithmetic mean\r\nfunction getAverage(...numbers) {\r\n  const numArray = numbers.filter(number => Number.isInteger(number));\r\n  const average = numArray.reduce( (acc, currElem) => {\r\n    return acc + currElem;\r\n  }) / numArray.length;\r\n\r\n  return average;\r\n};\r\n\r\n// 4. function counts median\r\nfunction getMedian(...numbers) {\r\n  const numArray = numbers.filter(number => Number.isInteger(number));\r\n  const sortedArray = numArray.sort( (a, b) => a - b );\r\n  let median = sortedArray[(sortedArray.length-1) / 2];\r\n\r\n  if (sortedArray.length % 2 === 0) {\r\n    median = ( sortedArray[((sortedArray.length - 1) -1) / 2] + sortedArray[((sortedArray.length-1) + 1) / 2] ) / 2;\r\n  };\r\n\r\n  return median;\r\n};\r\n\r\n// 5. function filters even numbers\r\nfunction filterEvenNumbers(...numbers) {\r\n  return numbers.filter(num => num % 2 !== 0);\r\n};\r\n\r\n// 6. function counts only numbers bigger than 0\r\nfunction countPositiveNumbers(...numbers) {\r\n  const positiveNums = numbers.filter(elem => elem > 0);\r\n  return positiveNums.length;\r\n};\r\n\r\n// 7. function filters array and returns only numbers which divide on 5\r\nfunction getDividedByFive(...numbers) {\r\n  return numbers.filter( num => num % 5 === 0);\r\n};\r\n\r\n// 8. function replaces bad words\r\nfunction replaceBadWords(string) {\r\n  const wordsArr = string.split(' ');\r\n  const badWords = ['fuck', 'shit'];\r\n \r\n  const editArr = wordsArr.map(word => {\r\n    for (const badWord of badWords) {\r\n      if (word.includes(badWord)) {\r\n        return word.replace(badWord, '*'.repeat(badWord.length));\r\n      }  \r\n    }\r\n    return word;\r\n  });\r\n\r\n  const editString = editArr.join(' ');\r\n\r\n  return editString;\r\n};\r\n\r\n// 9. function separates word by every 3 chars\r\nfunction divideByThree(word) {\r\n  let result = [];\r\n\r\n  if (word.length <= 3) {\r\n    result.push(word);\r\n    return result;\r\n  };\r\n\r\n  let tempValue = '';\r\n  for (let i = 0; i < word.length; i++) {\r\n    tempValue += word[i];\r\n    if (tempValue.length === 3) {\r\n      result.push(tempValue);\r\n      tempValue = '';\r\n    }\r\n  };\r\n\r\n  if (tempValue !== '') {\r\n    result.push(tempValue);\r\n  };\r\n\r\n  return result;\r\n};\r\n\r\ndocument.writeln(`<b>Function 1:</b> function returns 10 random numbers from 0 to 100  => <i>${getRandomArray(10, 0 , 100)}</i> <br>`);\r\n\r\ndocument.writeln(`<b>Function 2:</b> function searches mode of numbers from (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)  => \r\n<i>${getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i> <br>` );\r\n\r\ndocument.writeln(`<b>Function 3:</b> function counts arithmetic mean of numbers from (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)   =>\r\n<i>${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i> <br>`);\r\n\r\ndocument.writeln(`<b>Function 4:</b> <br> function counts median of numbers from (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)   =>\r\n<i>${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i> <br>\r\nmedian of numbers from (1, 2, 3, 4)   => <i>${getMedian(1, 2, 3, 4)}</i> <br>\r\nmedian of numbers from (1, 2, 3, 4, 5)   => <i>${getMedian(1, 2, 3, 4, 5)}</i> <br>`);\r\n\r\ndocument.writeln(`<b>Function 5:</b> function filters even numbers from (1, 2, 3, 4, 5, 6)   =>\r\n<i>${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</i> <br>`);\r\n\r\ndocument.writeln(`<b>Function 6:</b> function counts only numbers bigger than 0 from (1, -2, 3, -4, -5, 6)   =>\r\n<i>${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</i> <br>`);\r\n\r\ndocument.writeln(`<b>Function 7:</b> function filters array and returns only numbers which divide on 5 \r\nfrom (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)   =>\r\n<i>${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i> <br>`);\r\n\r\ndocument.writeln(`<b>Function 8:</b> function replaces bad words from sentence \"Are you fucking kidding? Holy shit! It's bullshit!\"   =>\r\n<i>${replaceBadWords(\"Are you fucking kidding? Holy shit! It's bullshit!\")}</i> <br>`);\r\n\r\ndocument.writeln(`<b>Function 9:</b> <br> function separates word \"Commander\" by every 3 chars   =>\r\n<i>${divideByThree(\"Commander\")}</i> <br>\r\nword \"live\"   => <i>${divideByThree(\"live\")}</i> <br>\r\nword \"big\"   => <i>${divideByThree(\"big\")}</i> <br>`);\r\n\r\ndocument.writeln(`<b>Function 10:</b> I'm so sad. I don't have any idea how to do this task :(`);\r\n\r\n// duplicates results in console\r\nconsole.log('Function 1 =>',getRandomArray(10, 0 , 100));\r\nconsole.log('Function 2 =>', getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\r\nconsole.log('Function 3 =>', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\r\nconsole.log('Function 4.1 =>', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\r\nconsole.log('Function 4.2 =>', getMedian(1, 2, 3, 4));\r\nconsole.log('Function 4.3 =>', getMedian(1, 2, 3, 4, 5));\r\nconsole.log('Function 5 =>', filterEvenNumbers(1, 2, 3, 4, 5, 6));\r\nconsole.log('Function 6 =>', countPositiveNumbers(1, -2, 3, -4, -5, 6));\r\nconsole.log('Function 7 =>', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\r\nconsole.log('Function 8 =>', replaceBadWords(\"Are you fucking kidding? Holy shit! It's bullshit!\"));\r\nconsole.log('Function 9.1 =>', divideByThree(\"Commander\"));\r\nconsole.log('Function 9.2 =>', divideByThree(\"live\"));\r\nconsole.log('Function 9.3 =>', divideByThree(\"big\"));\r\n\r\nconst homeWork05 = {\r\n  getRandomArray,\r\n  getMode,\r\n  getAverage,\r\n  getMedian,\r\n  filterEvenNumbers,\r\n  countPositiveNumbers,\r\n  getDividedByFive,\r\n  replaceBadWords,\r\n  divideByThree\r\n}\r\n\n\n//# sourceURL=webpack://16-webpack-hw/../05-array2-hw/script.js?");

/***/ }),

/***/ "../06-objects-hw/script.js":
/*!**********************************!*\
  !*** ../06-objects-hw/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeWork06\": () => (/* binding */ homeWork06)\n/* harmony export */ });\nconst students = [{\r\n  name: \"Tanya\",\r\n  course: 3,\r\n  subjects: {\r\n    math: [4, 4, 3, 4],\r\n    algorithms: [3, 3, 3, 4, 4, 4],\r\n    data_science: [5, 5, 3, 4]\r\n  }\r\n}, {\r\n  name: \"Victor\",\r\n  course: 4,\r\n  subjects: {\r\n    physics: [5, 5, 5, 3],\r\n    economics: [2, 3, 3, 3, 3, 5],\r\n    geometry: [5, 5, 2, 3, 5]\r\n  }\r\n}, {\r\n  name: \"Anton\",\r\n  course: 2,\r\n  subjects: {\r\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n    english: [5, 3],\r\n    cosmology: [5, 5, 5, 5]\r\n  }\r\n}];\r\n\r\n// a little user interaction\r\nlet studentId, word;\r\n\r\ndo {\r\n  studentId = +prompt(\"Select student's index from 0 to 2. Or enter cancel to show default values\");\r\n  word = prompt(\"Enter your word. Or enter cancel to show default value\");\r\n\r\n  if (studentId === null) {\r\n    studentId = 0;\r\n  };\r\n\r\n  if (!Number.isInteger(studentId) || (studentId < 0 || studentId > 2)) {\r\n    alert(\"You entered incorrect student's index\")\r\n  };\r\n\r\n  if (word === null || word === '') {\r\n    word = \"example\";\r\n  };\r\n\r\n} while (!Number.isInteger(studentId) || (studentId < 0 || studentId > 2));\r\n\r\n\r\n// Function 1: returns student's list of subjects \r\nfunction getSubjects(student) {\r\n  const arraySubjects = Object.keys(student.subjects).map(subject => {\r\n    return (subject.charAt(0).toUpperCase() + subject.slice(1)).replace('_', ' ');\r\n  });\r\n\r\n  return arraySubjects;\r\n};\r\n\r\n// Function 2: returns student's average mark of all subjects\r\nfunction getAverageMark(student) {\r\n  const arrayMarks = Object.values(student.subjects).flat();\r\n  const averageMark = arrayMarks.reduce((total, mark) => {\r\n    return total + mark;\r\n  }) / arrayMarks.length;\r\n\r\n  return averageMark.toFixed(2);\r\n};\r\n\r\n// Function 3: returns student's info (course, name, average mark)\r\nfunction getStudentInfo(student) {\r\n  const averageMark = getAverageMark(student);\r\n\r\n  return {\r\n    course: student.course,\r\n    name: student.name,\r\n    averageMark\r\n  };\r\n};\r\n\r\n// Function 4: returns student's names in alphabetical order\r\nfunction getStudentsNames(students) {\r\n  return students.map(student => student.name).sort();\r\n};\r\n\r\n// Function 5: returns the best average mark's student\r\nfunction getBestStudent(students) {\r\n  let arrMarks = [];\r\n  for (let i = 0; i < students.length; i++) {\r\n    arrMarks.push(getAverageMark(students[i]));\r\n  };\r\n\r\n  const maxMark = Math.max(...arrMarks).toFixed(2);\r\n  const index = arrMarks.indexOf(maxMark);\r\n\r\n  return students[index].name;\r\n};\r\n\r\n// Function 6: returns object where letters are keys and amount of letters are values\r\nfunction calculateWordLetters(word) {\r\n  const arrayLetters = word.split('');\r\n  let objLetters = {};\r\n\r\n  arrayLetters.forEach(letter => {\r\n    if (objLetters[letter] === undefined) {\r\n      objLetters[letter] = 0;\r\n    }\r\n    objLetters[letter] += 1;\r\n  });\r\n  return objLetters;\r\n};\r\n\r\nconst homeWork06 = {\r\n  getSubjects,\r\n  getAverageMark,\r\n  getStudentInfo,\r\n  getStudentsNames,\r\n  getBestStudent,\r\n  calculateWordLetters,\r\n  students\r\n}\r\n\r\nconsole.log(`Array of students: `, students);\r\nconsole.log(`Subjects of student ${students[studentId].name} are: `, getSubjects(students[studentId]));\r\nconsole.log(`Average subjects mark of student ${students[studentId].name} is: `, getAverageMark(students[studentId]));\r\nconsole.log(`Information of student index# ${studentId} is: `, getStudentInfo(students[studentId]));\r\nconsole.log(`Alphabetical order of student's names are: `, getStudentsNames(students));\r\nconsole.log(`The best student is `, getBestStudent(students));\r\nconsole.log(`Word \"${word}\" consists of these letters: `, calculateWordLetters(word));\n\n//# sourceURL=webpack://16-webpack-hw/../06-objects-hw/script.js?");

/***/ }),

/***/ "../07-closures-hw/script.js":
/*!***********************************!*\
  !*** ../07-closures-hw/script.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeWork07\": () => (/* binding */ homeWork07)\n/* harmony export */ });\nconst ukraine = {\r\n  tax: 0.195,\r\n  middleSalary: 1789,\r\n  vacancies: 11476\r\n};\r\nconst latvia = {\r\n  tax: 0.25,\r\n  middleSalary: 1586,\r\n  vacancies: 3921\r\n};\r\nconst litva = {\r\n  tax: 0.15,\r\n  middleSalary: 1509,\r\n  vacancies: 1114\r\n};\r\n\r\n// Function 1: counts tax in country\r\nfunction getMyTaxes(salary) {\r\n  return this.tax * salary;\r\n}\r\n\r\n// Function 2: counts average tax in country\r\nfunction getMiddleTaxes() {\r\n  return this.tax * this.middleSalary;\r\n}\r\n\r\n// Function 3: counts average tax all specialists in country\r\nfunction getTotalTaxes() {\r\n  return this.tax * this.middleSalary * this.vacancies;\r\n}\r\n\r\n// Function 4: makes object {salary:, taxes:, profit:}\r\nfunction getMySalary(country) {\r\n  const minSalary = 1500,\r\n    maxSalary = 2000;\r\n  const salary = Math.trunc(Math.random() * (maxSalary - minSalary) + minSalary);\r\n  const taxes = Math.round(country.tax * salary);\r\n  const profit = salary - taxes;\r\n  const obj = {\r\n    salary,\r\n    taxes,\r\n    profit,\r\n  };\r\n  console.log(obj);\r\n  setTimeout(() => getMySalary(country), 10000);\r\n}\r\n\r\nconst homeWork07 = {\r\n  ukraine,\r\n  latvia,\r\n  litva,\r\n  getMyTaxes,\r\n  getMiddleTaxes,\r\n  getTotalTaxes,\r\n  getMySalary\r\n}\r\n\r\nconsole.log('Function 1: It is a tax in Latvia: ', getMyTaxes.call(latvia, 1000));\r\nconsole.log('Function 1: It is a tax in Litva: ', getMyTaxes.call(litva, 1000));\r\nconsole.log('Function 1: It is a tax in Ukraine: ', getMyTaxes.call(ukraine, 1000));\r\n\r\nconsole.log('Function 2: It is an average tax in Latvia: ', getMiddleTaxes.call(latvia));\r\nconsole.log('Function 2: It is an average tax in Litva: ', getMiddleTaxes.call(litva));\r\nconsole.log('Function 2: It is an average tax in Ukraine: ', getMiddleTaxes.call(ukraine));\r\n\r\nconsole.log('Function 3: It is an average tax all specialists in Latvia: ', getTotalTaxes.call(latvia));\r\nconsole.log('Function 3: It is an average tax all specialists in Litva: ', getTotalTaxes.call(litva));\r\nconsole.log('Function 3: It is an average tax all specialists in Ukraine: ', getTotalTaxes.call(ukraine));\r\n\r\nconsole.log('Function 4: There are salary objects in Latvia, Litva, Ukraine:')\r\ngetMySalary(latvia);\r\ngetMySalary(litva);\r\ngetMySalary(ukraine);\n\n//# sourceURL=webpack://16-webpack-hw/../07-closures-hw/script.js?");

/***/ }),

/***/ "../08-classes-hw/script.js":
/*!**********************************!*\
  !*** ../08-classes-hw/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeWork08\": () => (/* binding */ homeWork08)\n/* harmony export */ });\nclass Student {\r\n  constructor(university, course, fullName) {\r\n    this.university = university;\r\n    this.course = course;\r\n    this.fullName = fullName;\r\n    this.studentMarks = [5, 4, 4, 5];\r\n    this.isStudent = true;\r\n  }\r\n\r\n  getInfo() {\r\n    return `Student at course #${this.course} at ${this.university}, ${this.fullName}`;\r\n  }\r\n\r\n  get marks() {\r\n    return this.isStudent ? this.studentMarks : null;\r\n  }\r\n\r\n  set marks(mark) {\r\n    if (this.isStudent) {\r\n      this.studentMarks.push(mark);\r\n    }\r\n  }\r\n\r\n  getAverageMark() {\r\n    return this.studentMarks.reduce((total, mark) => total + mark) / this.studentMarks.length;\r\n  }\r\n\r\n  dismiss() {\r\n    this.isStudent = false;\r\n  }\r\n\r\n  recover() {\r\n    this.isStudent = true;\r\n  }\r\n};\r\n\r\nclass BudgetStudent extends Student {\r\n  constructor(university, course, fullName, studentMarks, isStudent) {\r\n    super(university, course, fullName, studentMarks, isStudent);\r\n    setInterval(() => this.getScholarship(), 30000);\r\n  }\r\n\r\n  getScholarship() {\r\n    if (!this.isStudent) {\r\n      console.log(`Are you crazy?!`);\r\n    } else if (this.getAverageMark() < 4) {\r\n      console.log(`Go away! You can't get scholarship`);\r\n    } else {\r\n      console.log(`You got 1400 UAH of scholarship`);\r\n    }\r\n  }\r\n};\r\n\r\nconst john = new Student(\"Univercity of Oxford\", 2, \"John Doe\");\r\nconst jane = new BudgetStudent(\"Univercity of Oxford\", 1, \"Jane Doe\");\r\n\r\nconst homeWork08 = {\r\n  john,\r\n  jane\r\n}\r\n\r\nconsole.log(`Student's info: `, john.getInfo());\r\nconsole.log(`${john.fullName}'s marks:`, john.marks);\r\njohn.marks = 5;\r\nconsole.log(`${john.fullName}'s marks when he has got mark \"5\" :`, john.marks);\r\nconsole.log(`${john.fullName}'s average mark:`, john.getAverageMark());\r\njohn.dismiss();\r\nconsole.log(`${john.fullName}'s marks when he has been kicked out from university  :`, john.marks);\r\njohn.recover();\r\nconsole.log(`${john.fullName}'s marks when he has been recovered at university:`, john.marks);\r\n\r\nconsole.log(`Info about budget's student: `, jane.getInfo());\r\nconsole.log(`${jane.fullName}'s marks:`, jane.marks);\r\njane.marks = 1;\r\nconsole.log(`${jane.fullName}'s marks when she has got a few  bad marks :`, jane.marks);\r\nconsole.log(`When ${jane.fullName} had asked about scholarship, she heard:`);\r\njane.getScholarship();\r\njane.marks = 5;\r\nconsole.log(`${jane.fullName}'s marks when she has got a few  good marks :`, jane.marks);\r\nconsole.log(`When ${jane.fullName} had asked about scholarship again, she heard:`);\r\njane.getScholarship();\r\njane.dismiss();\r\nconsole.log(`When ${jane.fullName} had been kicked out from university and asked about scholarship, she heard:`);\r\njane.getScholarship();\n\n//# sourceURL=webpack://16-webpack-hw/../08-classes-hw/script.js?");

/***/ }),

/***/ "../10-dom-hw/script.js":
/*!******************************!*\
  !*** ../10-dom-hw/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeWork10\": () => (/* binding */ homeWork10)\n/* harmony export */ });\nconst blockCSSList = 'height: 50px; width: 50px',\r\n  wrapperCSSList = 'display: flex; flex-wrap: wrap; width: 250px; height: 250px; border: 1px solid black; margin-top: 10px;',\r\n  wrapperBlockLimit = 25;\r\n\r\nfunction getRandomColor() {\r\n  const red = Math.trunc(Math.random() * 255);\r\n  const green = Math.trunc(Math.random() * 255);\r\n  const blue = Math.trunc(Math.random() * 255);\r\n\r\n  return `rgb(${red}, ${green}, ${blue})`;\r\n}\r\n\r\nfunction generateBlocks() {\r\n  const wrapper = document.createElement('div');\r\n  wrapper.style.cssText = wrapperCSSList;\r\n  wrapper.setAttribute('id', 'wrapper');\r\n  document.body.append(wrapper);\r\n\r\n  for (let i = 0; i < wrapperBlockLimit; i++) {\r\n    const block = document.createElement('div');\r\n    block.style.cssText = blockCSSList;\r\n    block.style.backgroundColor = getRandomColor();\r\n    wrapper.append(block);\r\n  }\r\n\r\n  document.querySelector('#generateBlocks').disabled = true;\r\n}\r\n\r\nfunction generateBlocksInterval() {\r\n  document.querySelector('#generateBlocksInterval').disabled = true;\r\n  setInterval(() => {\r\n    if (!document.querySelector('#wrapper')) {\r\n      generateBlocks();\r\n    }\r\n    document.querySelector('#wrapper').remove();\r\n    generateBlocks();\r\n  }, 1000);\r\n}\r\n\r\nfunction resetPage() {\r\n  document.location.reload();\r\n}\r\n\r\nconst homeWork10 = {\r\n  blockCSSList,\r\n  wrapperCSSList,\r\n  wrapperBlockLimit,\r\n  getRandomColor,\r\n  generateBlocks,\r\n  generateBlocksInterval\r\n}\n\n//# sourceURL=webpack://16-webpack-hw/../10-dom-hw/script.js?");

/***/ }),

/***/ "../11-events-hw/audio/bellTone.mp3":
/*!******************************************!*\
  !*** ../11-events-hw/audio/bellTone.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"06e2efe132566343b767.mp3\";\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/audio/bellTone.mp3?");

/***/ }),

/***/ "../11-events-hw/audio/bongo.mp3":
/*!***************************************!*\
  !*** ../11-events-hw/audio/bongo.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b0c3ad6cc1d9f91c77b8.mp3\";\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/audio/bongo.mp3?");

/***/ }),

/***/ "../11-events-hw/audio/electricBass.mp3":
/*!**********************************************!*\
  !*** ../11-events-hw/audio/electricBass.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8feb2276f485b4222678.mp3\";\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/audio/electricBass.mp3?");

/***/ }),

/***/ "../11-events-hw/audio/fanfare.mp3":
/*!*****************************************!*\
  !*** ../11-events-hw/audio/fanfare.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3f4862be485ab9e5bc8a.mp3\";\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/audio/fanfare.mp3?");

/***/ }),

/***/ "../11-events-hw/audio/piano.mp3":
/*!***************************************!*\
  !*** ../11-events-hw/audio/piano.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0a0665c34fb355f0801a.mp3\";\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/audio/piano.mp3?");

/***/ }),

/***/ "../11-events-hw/audio/scratchGramophone.mp3":
/*!***************************************************!*\
  !*** ../11-events-hw/audio/scratchGramophone.mp3 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a76144dfe903f077d8e1.mp3\";\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/audio/scratchGramophone.mp3?");

/***/ }),

/***/ "../11-events-hw/script.js":
/*!*********************************!*\
  !*** ../11-events-hw/script.js ***!
  \*********************************/
/***/ (() => {

eval("// play sound when pressed key on keyboard\r\nwindow.addEventListener('keydown', function (e) {\r\n  const audio = document.querySelector(`audio[data-key=\"${e.code}\"]`);\r\n  const key = document.querySelector(`button[data-key=\"${e.code}\"]`);\r\n\r\n  if (!audio) return;\r\n  audio.currentTime = 0.2;\r\n  audio.play();\r\n\r\n  key.classList.add('playing');\r\n  setTimeout(() => {\r\n    key.classList.remove('playing');\r\n  }, 1500);\r\n});\r\n\r\n// additional interaction. play sound when click key by mouse\r\nwindow.addEventListener('click', function (e) {\r\n  const key = e.target.closest('button');\r\n\r\n  if (!key) return;\r\n\r\n  const dataKey = key.getAttribute('data-key');\r\n  const audio = document.querySelector(`audio[data-key=\"${dataKey}\"]`);\r\n\r\n  if (!audio) return;\r\n  audio.currentTime = 0.2;\r\n  audio.play();\r\n\r\n  key.classList.add('playing');\r\n  setTimeout(() => {\r\n    key.classList.remove('playing');\r\n  }, 1500);\r\n})\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/script.js?");

/***/ }),

/***/ "../13-ajax-hw/assets/icons/robot.png":
/*!********************************************!*\
  !*** ../13-ajax-hw/assets/icons/robot.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/24590371550dfd78a137e698951f2c46.png\");\n\n//# sourceURL=webpack://16-webpack-hw/../13-ajax-hw/assets/icons/robot.png?");

/***/ }),

/***/ "../11-events-hw/index.html":
/*!**********************************!*\
  !*** ../11-events-hw/index.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../16-webpack-hw/node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./main.css */ \"../11-events-hw/main.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./audio/bellTone.mp3 */ \"../11-events-hw/audio/bellTone.mp3\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./audio/bongo.mp3 */ \"../11-events-hw/audio/bongo.mp3\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./audio/electricBass.mp3 */ \"../11-events-hw/audio/electricBass.mp3\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./audio/fanfare.mp3 */ \"../11-events-hw/audio/fanfare.mp3\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./audio/piano.mp3 */ \"../11-events-hw/audio/piano.mp3\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./audio/scratchGramophone.mp3 */ \"../11-events-hw/audio/scratchGramophone.mp3\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./script.js */ \"../11-events-hw/script.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _16_webpack_hw_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  <title>Events</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <div class=\\\"wrapper\\\">\\r\\n    <h2>Press key on US keyboard or click on key by mouse</h2>\\r\\n    <button data-key=\\\"KeyQ\\\">\\r\\n      <div class=\\\"title\\\">Q</div>\\r\\n      <div class=\\\"descr\\\">bell tone</div>\\r\\n    </button>\\r\\n    <button data-key=\\\"KeyW\\\">\\r\\n      <div class=\\\"title\\\">W</div>\\r\\n      <div class=\\\"descr\\\">bongo</div>\\r\\n    </button>\\r\\n    <button data-key=\\\"KeyE\\\">\\r\\n      <div class=\\\"title\\\">E</div>\\r\\n      <div class=\\\"descr\\\">electric bass</div>\\r\\n    </button>\\r\\n    <button data-key=\\\"KeyR\\\">\\r\\n      <div class=\\\"title\\\">R</div>\\r\\n      <div class=\\\"descr\\\">fanfare</div>\\r\\n    </button>\\r\\n    <button data-key=\\\"KeyT\\\">\\r\\n      <div class=\\\"title\\\">T</div>\\r\\n      <div class=\\\"descr\\\">piano</div>\\r\\n    </button>\\r\\n    <button data-key=\\\"KeyY\\\">\\r\\n      <div class=\\\"title\\\">Y</div>\\r\\n      <div class=\\\"descr\\\">scratch</div>\\r\\n    </button>\\r\\n  </div>\\r\\n\\r\\n  <audio data-key=\\\"KeyQ\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></audio>\\r\\n  <audio data-key=\\\"KeyW\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"></audio>\\r\\n  <audio data-key=\\\"KeyE\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"></audio>\\r\\n  <audio data-key=\\\"KeyR\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"></audio>\\r\\n  <audio data-key=\\\"KeyT\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\"></audio>\\r\\n  <audio data-key=\\\"KeyY\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\"></audio>\\r\\n\\r\\n  <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\"></script>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://16-webpack-hw/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../11-events-hw/main.css":
/*!********************************!*\
  !*** ../11-events-hw/main.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://16-webpack-hw/../11-events-hw/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _03_functions_hw_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../03-functions-hw/script */ \"../03-functions-hw/script.js\");\n/* harmony import */ var _04_array_hw_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../04-array-hw/script */ \"../04-array-hw/script.js\");\n/* harmony import */ var _05_array2_hw_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../05-array2-hw/script */ \"../05-array2-hw/script.js\");\n/* harmony import */ var _06_objects_hw_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../06-objects-hw/script */ \"../06-objects-hw/script.js\");\n/* harmony import */ var _07_closures_hw_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../07-closures-hw/script */ \"../07-closures-hw/script.js\");\n/* harmony import */ var _08_classes_hw_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../08-classes-hw/script */ \"../08-classes-hw/script.js\");\n/* harmony import */ var _10_dom_hw_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../10-dom-hw/script */ \"../10-dom-hw/script.js\");\n/* harmony import */ var _11_events_hw_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../11-events-hw/script */ \"../11-events-hw/script.js\");\n/* harmony import */ var _11_events_hw_script__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_11_events_hw_script__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _11_events_hw_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../11-events-hw/main.css */ \"../11-events-hw/main.css\");\n/* harmony import */ var _13_ajax_hw_assets_icons_robot_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../13-ajax-hw/assets/icons/robot.png */ \"../13-ajax-hw/assets/icons/robot.png\");\n/* harmony import */ var _11_events_hw_index_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../11-events-hw/index.html */ \"../11-events-hw/index.html\");\n// import { homeWork01 } from \"../../01-variables-hw/script\";\r\n// import { homeWork02 } from \"../../02-loops-hw/script\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(_03_functions_hw_script__WEBPACK_IMPORTED_MODULE_0__.homeWork03.getFormatName(\"sVIaTosLaV\"));\r\nconsole.log(_04_array_hw_script__WEBPACK_IMPORTED_MODULE_1__.homeWork04.getStudentMark(_04_array_hw_script__WEBPACK_IMPORTED_MODULE_1__.homeWork04.students, _04_array_hw_script__WEBPACK_IMPORTED_MODULE_1__.homeWork04.marks));\r\nconsole.log(_05_array2_hw_script__WEBPACK_IMPORTED_MODULE_2__.homeWork05.getRandomArray(3, 0, 10));\r\nconsole.log(_06_objects_hw_script__WEBPACK_IMPORTED_MODULE_3__.homeWork06.getAverageMark(_06_objects_hw_script__WEBPACK_IMPORTED_MODULE_3__.homeWork06.students[0]));\r\nconsole.log(_07_closures_hw_script__WEBPACK_IMPORTED_MODULE_4__.homeWork07.getMiddleTaxes.call(_07_closures_hw_script__WEBPACK_IMPORTED_MODULE_4__.homeWork07.latvia));\r\nconsole.log(_08_classes_hw_script__WEBPACK_IMPORTED_MODULE_5__.homeWork08.john.getInfo());\r\nconsole.log(_10_dom_hw_script__WEBPACK_IMPORTED_MODULE_6__.homeWork10.generateBlocks());\n\n//# sourceURL=webpack://16-webpack-hw/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;