const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

let intervalKey;
let dateDiff;
let dateEnd;

if (localStorage.getItem("timer")) {
    dateEnd = localStorage.getItem("timer");
    intervalKey = setInterval(timer, 1000);
}

function start() {
    const date = document.querySelector("input").value;
    dateEnd = new Date(date).getTime();
    localStorage.setItem("timer", dateEnd);

    intervalKey = setInterval(timer, 1000)
}

function timer () {
    let dateNow = new Date().getTime();
    dateDiff = dateEnd - dateNow;

    const days = Math.floor(dateDiff / day);
    const hours = Math.floor((dateDiff % day) / hour) + 3;
    const minutes = Math.floor((dateDiff % hour) / minute);
    const seconds = Math.floor((dateDiff % minute) / second);

    document.querySelector("h1").innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;
}

function stop() {
    document.querySelector("h1").innerHTML = "⌛";
    clearInterval(intervalKey);
    localStorage.removeItem("timer");
}
