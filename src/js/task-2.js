// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. 
// Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

// const { resolve } = require("core-js/fn/promise");

// const { all } = require("core-js/fn/promise");

// const { resolve } = require("core-js/fn/promise");

const delay = ms => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);  
    }, ms);
  });
  return promise;
};

const logger = time => console.log(`Resolved after ${time} ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms



// Задание 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
//   callback(updatedUsers);
// };

// const loggerr = updatedUsers => console.table(updatedUsers);

// // /* Сейчас работает так
// toggleUserState(users, 'Mango', loggerr);
// toggleUserState(users, 'Lux', loggerr);

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const promise = new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(updatedUsers);
  });
  return promise;
};
const loggerr = updatedUsers => console.table(updatedUsers);
// /* Должно работать так
toggleUserState(users, 'Mango').then(loggerr);
toggleUserState(users, 'Lux').then(loggerr);



// Задание 3
// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, 
// а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);
//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;
//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };
// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };
// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };
// // Работает так
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const makeTransaction = transaction => {
  const id = transaction.id;
  const time = randomIntegerFromInterval(200, 500);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      canProcess ? resolve({id, time}) : reject(id);
    }, time);
  });
};
const logSuccess = ({id, time}) => {
  console.log(`Transaction ${id} processed in ${time} ms`);
};
const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
//  Должно работать так
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);