class Student {
  constructor(university, course, fullName, studentMarks = [5, 4, 4, 5]) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.studentMarks = studentMarks;
  }

  getInfo() {
    return `Student at course #${this.course} at ${this.university}, ${this.fullName}`;
  }

  get marks() {
    return this.studentMarks;
  }

  set marks(mark) {
    if (this.studentMarks !== null) {
      this.studentMarks.push(mark);
    }
  }

  getAverageMark() {
    return this.studentMarks.reduce((total, mark) => total + mark) / this.studentMarks.length;
  }

  dismiss() {
    this.studentMarks = null;
  }

  recover() {
    if (this.studentMarks === null) {
      this.studentMarks = [];
    }
  }
};

class BudgetStudent extends Student {
  constructor(university, course, fullName, studentMarks) {
    super(university, course, fullName, studentMarks);
    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if (this.studentMarks === null || this.getAverageMark() < 4) {
      console.log(`Go away! You can't get scholarship`);
    } else {
      console.log(`You got 1400 UAH of scholarship`);
    }
  }
};

const john = new Student("Univercity of Oxford", 2, "John Doe");
const jane = new BudgetStudent("Univercity of Oxford", 1, "Jane Doe", [4, 4, 3, 4]);

console.log(`Student's info: `, john.getInfo());
console.log(`${john.fullName}'s marks:`, john.marks);
john.marks = 5;
console.log(`${john.fullName}'s marks when he has got mark "5" :`, john.marks);
console.log(`${john.fullName}'s average mark:`, john.getAverageMark());
john.dismiss();
console.log(`${john.fullName}'s marks when he has been kicked out from university  :`, john.marks);
john.recover();
john.marks = 5;
john.marks = 4;
console.log(`${john.fullName}'s marks when he had been recovered at university and he has got a few marks :`, john.marks);

console.log(`Info about budget's student: `, jane.getInfo());
console.log(`${jane.fullName}'s marks:`, jane.marks);
console.log(`When ${jane.fullName} had asked about scholarship, she heard:`);
jane.getScholarship();
jane.marks = 5;
jane.marks = 5;
console.log(`${jane.fullName}'s marks when she has got a few  good marks :`, jane.marks);
console.log(`When ${jane.fullName} had asked about scholarship again, she heard:`);
jane.getScholarship();