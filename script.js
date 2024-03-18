// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeeInfo = [];
  let choice=true;
  while (choice) {
  const firstName = prompt('What is your first name?');
  const lastName = prompt('what is your last name?');
  const salary = +prompt('what is your salary?');
    
  // const salary = parseInt(prompt('what is your salary?'));
    
  // console.log(firstName, lastName, salary);
  if (firstName && lastName && salary) {
    const data = {firstName, lastName: lastName,salary };
    employeeInfo.push(data);
  }
    const option = confirm('Do you want to continue?');
    choice = option;
  }
  return (employeeInfo);
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
<<<<<<< HEAD
  console.log(``)
=======
  for (let i = 0; ){
    
  }
>>>>>>> 24e803160a5818e57863cd6bbd737245bdf3eb7c
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const random = Math.floor();
<<<<<<< HEAD
  console.log(`congrats to ${firstName}, our random drawing winner!`)
=======
  
>>>>>>> 24e803160a5818e57863cd6bbd737245bdf3eb7c
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

