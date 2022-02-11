let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("second");
let set_clock = setInterval(() => {
    let current = new Date();
    let current_hour = current.getHours();
    let current_minute = current.getMinutes();
    let current_seconds = current.getSeconds();
    let rotate_hour = (current_hour * 30) + (current_minute / 2);
    let rotate_minute = (current_minute * 6) + (current_seconds / 10);
    let rotate_seconds = current_seconds * 6;
    hour.style.transform = `rotate(${rotate_hour}deg)`;
    minute.style.transform = `rotate(${rotate_minute}deg)`;
    seconds.style.transform = `rotate(${rotate_seconds}deg)`;
}, 1000);
