const minimumSalary = 1000;

const employees = [
    { firstName: 'John', lastName: 'Doe', salary: 4000 },
    { firstName: 'Dennis', lastName: 'Rod', salary: 4000 },
    { firstName: 'Adrian', lastName: 'Shephard', salary: 1200 },
    { firstName: 'Edmund', lastName: 'Doss', salary: 2000 }
];

function filterEmployees(employees, minimumSalary) {
    return employees.filter(employee => employee.salary > minimumSalary);
}

const filteredEmployees = filterEmployees(employees, minimumSalary);
console.log(filteredEmployees);