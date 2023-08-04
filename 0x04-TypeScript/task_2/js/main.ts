interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof(salary) === 'number' && salary < 500) {
    return new Teacher;
  } else {
    return new Director;
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Director | Teacher) {
  if (employee instanceof Director) {
    return true;
  } else {
    return false;
  }
}

function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) {
    const director = employee.workDirectorTasks();
    console.log(director);
  } else {
    const teacher = employee.workTeacherTasks();
    console.log(teacher);
  }
}
console.log(isDirector(createEmployee(100)));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

interface Subjects {
  subject: 'Math' | 'History';
}

function teachClass(todayClass: 'Math' | 'History') {
  if (todayClass === 'Math') {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}
console.log(teachClass("History"));
console.log(teachClass("Math"));