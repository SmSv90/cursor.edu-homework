const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// a little user interaction
let studentId, word;

do {
  studentId = +prompt("Select student's index from 0 to 2. Or enter cancel to show default values");
  word = prompt("Enter your word. Or enter cancel to show default value");

  if (studentId === null) {
    studentId = 0;
  };

  if (!Number.isInteger(studentId) || (studentId < 0 || studentId > 2)) {
    alert("You entered incorrect student's index")
  };

  if (word === null || word === '') {
    word = "example";
  };  

} while (!Number.isInteger(studentId) || (studentId < 0 || studentId > 2));


// Function 1: returns student's list of subjects 
function getSubjects(student) {
  const arraySubjects = Object.keys(student.subjects).map( subject => {
    return (subject.charAt(0).toUpperCase() + subject.slice(1)).replace('_', ' ');
  });

  return arraySubjects;
};

// Function 2: returns student's average mark of all subjects
function getAverageMark(student) {
  const arrayMarks = Object.values(student.subjects).flat();
  const averageMark = arrayMarks.reduce( (total, mark) => {
    return total + mark;
  }) / arrayMarks.length;

  return averageMark.toFixed(2);
};

// Function 3: returns student's info (course, name, average mark)
function  getStudentInfo(student) {
  const averageMark = getAverageMark(student);

  return {"course": student.course, "name": student.name, averageMark};
};

// Function 4: returns student's names in alphabetical order
function getStudentsNames(students) {
  const studentNames = students.map( student => student.name );

  return studentNames.sort();
};

// Function 5: returns the best average mark's student
function getBestStudent(students) {
  let arrMarks = [];
  for (let i = 0; i < students.length; i++) {
    arrMarks.push( getAverageMark(students[i]) );
  };

  const maxMark = Math.max(...arrMarks).toFixed(2);
  const index = arrMarks.indexOf(maxMark);

  return students[index].name;
};

// Function 6: returns object where letters are keys and amount of letters are values
function calculateWordLetters(word) {
  const arrayLetters = word.split('');
  let objLetters = {};

  arrayLetters.forEach(letter => {
    if(objLetters[letter] === undefined) {
      objLetters[letter] = 0;
    }
      objLetters[letter] += 1;
  });
  return objLetters;
};

console.log(`Array of students: `, students);
console.log(`Subjects of student ${students[studentId].name} are: `, getSubjects(students[studentId]));
console.log(`Average subjects mark of student ${students[studentId].name} is: `, getAverageMark(students[studentId]));
console.log(`Information of student index# ${studentId} is: `, getStudentInfo(students[studentId]));
console.log(`Alphabetical order of student's names are: `, getStudentsNames(students));
console.log(`The best student is `, getBestStudent(students));
console.log(`Word "${word}" consists of these letters: `, calculateWordLetters(word));