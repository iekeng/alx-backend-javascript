interface Teacher {
	readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// the readonly make the attribute to be only modifiable on initialization
// ?: make the attribute optional
// [key: string]: any; makes it possible to add additional attributes not defined in the interface

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  firstName = firstName.slice(0,1);
  return `${firstName}. ${lastName}`
}
console.log(printTeacher("John", "Doe"));

interface forStudentclass {
  firstName: string;
  lastName: string;
}

class StudentClass implements forStudentclass  {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
const student1 = new StudentClass("john", "Doe");
console.log(student1.displayName());
console.log(student1.workOnHomework());