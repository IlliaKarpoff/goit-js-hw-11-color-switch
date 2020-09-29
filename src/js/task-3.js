const ref = {
    days : document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins : document.querySelector('span[data-value="mins"]'),
    secs : document.querySelector('span[data-value="secs"]'),
}
const targetDate = new Date('Jan 01, 2021');

const pad = (value) => {
    return String(value).padStart(2, '0');
}
// const updateClockFace = (time) => {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//     ref.days.textContent = days;
//     ref.hours.textContent = hours;
//     ref.mins.textContent = mins;
//     ref.secs.textContent = secs;
// }
// const clockBack = () => {
//   const delta = targetDate - Date.now();
//   updateClockFace(delta);
// }

const clockBack = () => {
    const delta = targetDate - Date.now();
    ref.days.textContent = Math.floor(delta / (1000 * 60 * 60 * 24));
    ref.hours.textContent = pad(Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    ref.mins.textContent = pad(Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)));
    ref.secs.textContent = pad(Math.floor((delta % (1000 * 60)) / (1000)));
}
setInterval(clockBack, 1000)