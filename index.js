function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function stamp() {
    const now = new Date();
    const stampTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const stampList = document.getElementById('stampList');
    const li = document.createElement('li');
    li.textContent = `Stempelzeit: ${stampTime}`;
    stampList.appendChild(li);
}

setInterval(updateTime, 1000);
