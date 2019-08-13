
import list from "./dom.js"
import API from "./data.js"
//invoke API fetch function and then displaying the list of employees from the DOM file
API.getEmployees().then(list.displayEmployees)
