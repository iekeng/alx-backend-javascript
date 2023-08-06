interface Student{
	firstName: string;
	lastName :string;
	age: number;
	location: string;
	};

const s1: Student = {
	firstName: "David",
	lastName: "Adeleke",
	age: 29,
	location: "Lagos",
	};

const s2: Student = {
	firstName: "Zlatan",
	lastName: "Ibile",
	age: 27,
	location: "Ekiti",
	};

	const studentsList: Array<Student> = [s1, s2];
	const body = document.querySelector('body');

	function renderTable(studentsList: Array<Student>){
		const table = document.createElement('table');
		
		const tableHead = document.createElement('thead');
		const headerRow = document.createElement('tr');
		
		const nameLabel = document.createElement('th');
		nameLabel.textContent = 'First Name';

		const locationLabel = document.createElement('th');
		locationLabel.textContent = 'Location';

		headerRow.appendChild(nameLabel);
		headerRow.appendChild(locationLabel);

		tableHead.appendChild(headerRow);

		table.appendChild(tableHead);

		const tbody = document.createElement('tbody');

		studentsList.forEach((student: Student)=>{
			const row = document.createElement('tr');
			const nameCell = document.createElement('td');
			nameCell.textContent = student.firstName;
			const locationCell = document.createElement('td');
			locationCell.textContent = student.location;
			
			row.appendChild(nameCell);
			row.appendChild(locationCell);

			tbody.appendChild(row);
					
		});

		table.appendChild(tbody);

		return table;
		}	
	
		renderTable(studentsList);
	
