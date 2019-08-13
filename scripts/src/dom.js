import factory from "./factory.js"

//created a const to reference the html display container 

const employeeLocation = document.querySelector("#displayContainer")
// created a function that will iterate over each employee from the employees object array and display it as HTML 
const displayEmployees = (employees) => {
    for (const employee of employees) {
        const employeeHTML = factory.createEmployeeHTML(employee)
        employeeLocation.innerHTML += employeeHTML
    }
}

export default {
    displayEmployees
}