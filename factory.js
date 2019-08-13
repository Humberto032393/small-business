
//created a factory function to create a html template with one object as a parameter to drill the objects keys and values
const createEmployeeHTML = (employeeObject) => {
    return `
    <article class="employee">
    <div class="employee--card">
    <header class="employee__name">
        <h1>${employeeObject.name}</h1>
    </header>
    <section class="employee__department">
        Works in ${employeeObject.department.name} the department 
    </section>
    <section class="employee__computer">
        Currently using a ${employeeObject.computer.brand}
    </section>
    </div>
</article>
    `
}

export default {
    createEmployeeHTML
}