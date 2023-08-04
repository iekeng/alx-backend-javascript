interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const s1: Student = {
	firstName: "Martins",
	lastName: "Ndifon",
	age: 30,
	location: "Abuja",
};

const s2: Student = {
	firstName: "Charlian",
	lastName: "Imoisili",
	age: 25,
	location: "Lagos",
};

const studentsList: Student[] = [s1, s2];

// Create the table element
const table = document.createElement('table');
table.id = 'studentsTable';

// Create the table header
const tableHead = document.createElement('thead');
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);

// Create the table body
const tableBody = document.createElement('tbody');

// Append the table elements to the body
table.appendChild(tableHead);
table.appendChild(tableBody);

// Append the table to the body tag
document.body.appendChild(table);

const atableBody = document.querySelector('#studentsTable tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  atableBody.appendChild(row);
});