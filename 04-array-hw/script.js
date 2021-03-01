const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const pairs = getPairs(students),
      pairsTheme = getPairsTheme(students, themes),
      studentMark = getStudentMark(students, marks),
      pairsMark = getPairsMark(students, themes);      


function getPairs(students) {
  let femaleStudents = [],
      maleStudents = [],
      pairs = [];

  for (const name of students) {
    if (name.charAt(name.length - 1) === "а") {
      femaleStudents.push(name);
    } else {
      maleStudents.push(name);
    }
  }

  for (let i = 0; i < students.length / 2; i++) {
    pairs.push([femaleStudents[i], maleStudents[i]]);
  }

  return pairs;
};

function getPairsTheme(students, themes) {
  let pairsTheme = [];
  const array = getPairs(students);

  for (let i = 0; i < array.length; i++) {
    pairsTheme.push([array[i].join(' і '), themes[i]]);
  }

  return pairsTheme;
};

function getStudentMark(students, marks) {
  let studentMark = [];

  for (let i = 0; i < students.length; i++) {
    studentMark.push([students[i], marks[i]]);
  }
  return studentMark;
};

function getPairsMark(students, themes) {
  const minMark = 1,
        maxMark = 5;

  let pairsMarks = getPairsTheme(students, themes);
  const len = pairsMarks.length;
  
  for (let i = 0; i < len; i++) {
    pairsMarks[i].push(Math.round(Math.random()*(maxMark - minMark) + minMark));
  }
  
  return pairsMarks;
};

console.log(`Array of student's pairs:`);
console.log(pairs);
console.log(`Array of student's pairs with theme:`);
console.log(pairsTheme);
console.log(`Array of student's marks:`);
console.log(studentMark);
console.log(`Array of student's pairs with theme and mark:`);
console.log(pairsMark);
