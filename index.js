const employees = [
    { name: "Mitarbeiter 1", stampedIn: false, startTime: null, totalTime: 0 },
    { name: "Mitarbeiter 2", stampedIn: false, startTime: null, totalTime: 0 },
    { name: "Mitarbeiter 3", stampedIn: false, startTime: null, totalTime: 0 }
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
        const elapsedTime = now - employee.startTime;
        employee.totalTime += elapsedTime;
        li.innerHTML = `${employee.name} - Ausgestempelt: ${stampTime}<br>Gesamtzeit: ${formatTime(employee.totalTime)}`;
        employee.stampedIn = false;
    } else {
        employee.startTime = now;
        li.textContent = `${employee.name} - Eingestempelt: ${stampTime}`;
        employee.stampedIn = true;
    }

    stampList.appendChild(li);
    updateLongestWorked();
}

function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}:${String(minutes % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function updateLongestWorked() {
    const longestWorkedContainer = document.getElementById('longestWorked');
    longestWorkedContainer.innerHTML = '';
    const sortedEmployees = [...employees].sort((a, b) => b.totalTime - a.totalTime);
    sortedEmployees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `${employee.name}: ${formatTime(employee.totalTime)}`;
        longestWorkedContainer.appendChild(li);
    });
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
