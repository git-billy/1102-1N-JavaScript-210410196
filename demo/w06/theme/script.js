'use strict';

const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionariesBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sort');
const calculateBtn = document.querySelector('#calculate-wealth');

let data = [];

const config = {
  numRandom: 5,
  ratio: 1.5,
  showCondition: 2000000,
};

const updateDOM = (provideData = data) => {
  let tempData = provideData
    .map(item => {
      return `<div class="person"><strong>${item.name}</strong> $${item.money}</div>`;
    })
    .join('');
  console.log('tempData', tempData);
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`;
};

const addData = obj => {
  data.push(obj);
  console.log('data', data);
  updateDOM();
};

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

const getRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  console.log('random user data', data);
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * config.showCondition),
  };
  addData(newUser);
};

getRandomUser();
getRandomUser();
getRandomUser();

const changeBtnText = () => {
  addUserBtn.textContent = `Add Users (${config.numRandom}) 👱‍♂️`
  doubleBtn.textContent = `Raise Money * ${config.ratio} 💰`
  showMillionariesBtn.textContent = `Show > ${config.showCondition} 💵`
}
changeBtnText();

const getRandomfiveUser = async () => {
  for (let i = 0; i < config.numRandom; i++) {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    console.log('random user data', data);
    const user = data.results[0];
    const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * config.showCondition),
    };
    addData(newUser);
  }
};

const doubleMoney = () => {
  data = data.map(user => {
    return {
      name: user.name,
      money: user.money * config.ratio,
    };
  });
  updateDOM();
};

const showMillionaries = () => {
  const filterData = data.filter(data => {
    return data.money > 30000000;
  });
  console.log(filterData);
  updateDOM(filterData);
};

addUserBtn.addEventListener('click', getRandomfiveUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionariesBtn.addEventListener('click', showMillionaries);
