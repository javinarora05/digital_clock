const updatedTime = () => {
    const time = new Date().toLocaleTimeString();
    document.getElementById('clock').innerText = time;
}


updatedTime();

setInterval(() => {
updatedTime();
}, 1000);