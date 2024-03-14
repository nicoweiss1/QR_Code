const employees = [
    { name: "Mitarbeiter 1", stampedIn: false },
    { name: "Mitarbeiter 2", stampedIn: false },
    { name: "Mitarbeiter 3", stampedIn: false }
];

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function stamp(employeeIndex) {
    const employee = employees[employeeIndex];
    const now = new Date();
    const stampTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const stampList = document.getElementById('stampList');
    const li = document.createElement('li');
    
    if (employee.stampedIn) {
        li.textContent = `${employee.name} - Ausgestempelt: ${stampTime}`;
        employee.stampedIn = false;
    } else {
        li.textContent = `${employee.name} - Eingestempelt: ${stampTime}`;
        employee.stampedIn = true;
    }

    stampList.appendChild(li);
}

function createButtons() {
    const buttonsContainer = document.getElementById('buttons');

    employees.forEach((employee, index) => {
        const button = document.createElement('button');
        button.textContent = employee.name;
        button.addEventListener('click', () => stamp(index));
        buttonsContainer.appendChild(button);
    });
}

setInterval(updateTime, 1000);
createButtons();
