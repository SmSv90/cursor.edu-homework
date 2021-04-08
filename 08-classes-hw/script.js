class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.studentMarks = [5, 4, 4, 5];
    this.isStudent = true;
  }

  getInfo() {
    return `Student at course #${this.course} at ${this.university}, ${this.fullName}`;
  }

  get marks() {
    return this.isStudent ? this.studentMarks : null;
  }

  set marks(mark) {
    if (this.isStudent) {
      this.studentMarks.push(mark);
    }
  }

  getAverageMark() {
    return this.studentMarks.reduce((total, mark) => total + mark) / this.studentMarks.length;
  }

  dismiss() {
    this.isStudent = false;
  }

  recover() {
    this.isStudent = true;
  }
};

class BudgetStudent extends Student {
  constructor(university, course, fullName, studentMarks, isStudent) {
    super(university, course, fullName, studentMarks, isStudent);
    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if (!this.isStudent) {
      console.log(`Are you crazy?!`);
    } else if (this.getAverageMark() < 4) {
      console.log(`Go away! You can't get scholarship`);
    } else {
      console.log(`You got 1400 UAH of scholarship`);
    }
  }
};

const john = new Student("Univercity of Oxford", 2, "John Doe");
const jane = new BudgetStudent("Univercity of Oxford", 1, "Jane Doe");

export const homeWork08 = {
  john,
  jane
}

console.log(`Student's info: `, john.getInfo());
console.log(`${john.fullName}'s marks:`, john.marks);
john.marks = 5;
console.log(`${john.fullName}'s marks when he has got mark "5" :`, john.marks);
console.log(`${john.fullName}'s average mark:`, john.getAverageMark());
john.dismiss();
console.log(`${john.fullName}'s marks when he has been kicked out from university  :`, john.marks);
john.recover();
console.log(`${john.fullName}'s marks when he has been recovered at university:`, john.marks);

console.log(`Info about budget's student: `, jane.getInfo());
console.log(`${jane.fullName}'s marks:`, jane.marks);
jane.marks = 1;
console.log(`${jane.fullName}'s marks when she has got a few  bad marks :`, jane.marks);
console.log(`When ${jane.fullName} had asked about scholarship, she heard:`);
jane.getScholarship();
jane.marks = 5;
console.log(`${jane.fullName}'s marks when she has got a few  good marks :`, jane.marks);
console.log(`When ${jane.fullName} had asked about scholarship again, she heard:`);
jane.getScholarship();
jane.dismiss();
console.log(`When ${jane.fullName} had been kicked out from university and asked about scholarship, she heard:`);
jane.getScholarship();