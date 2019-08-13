//created a constant to store a function that will fetch the data and than parse the data into json format. 

const employeeCollection = {
    getEmployees() {

        return fetch("http://localhost:3000/employees?_expand=department&_expand=computer")
        .then(response => response.json())
    }
}

export default employeeCollection