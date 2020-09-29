const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
//   ⚠️ 
const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('button[data-action="start"]');
const btnStopRef = document.querySelector('button[data-action="stop"]');
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeColor = () => {
  bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
}
const startChanges = () => {
  intervalId = setInterval(changeColor, 1000);
  btnStartRef.removeEventListener('click', startChanges);
}
const stopChanges = () => {
  clearInterval(intervalId);
  btnStartRef.addEventListener('click', startChanges);
}
btnStartRef.addEventListener('click', startChanges);
btnStopRef.addEventListener('click', stopChanges);