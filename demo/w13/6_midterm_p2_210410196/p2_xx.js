const dataSet1 = [
  {
    name: 'Ellen Cruz',
    money: 561575400,
  },
  {
    name: 'Raul Velasco',
    money: 41338300,
  },
  {
    name: 'Konsta Tuominen',
    money: 112175400,
  },
  {
    name: 'Andrea Kelly',
    money: 123754000,
  },
  {
    name: 'Andrea Mills',
    money: 542003456,
  },
  {
    name: 'Doris Barnett',
    money: 631175400,
  },
  {
    name: 'Karla Jensen',
    money: 26075100,
  },
];

const dataSet2 = [
  {
    name: 'Igor Moltu',
    money: 161575400,
  },
  {
    name: 'Derek Reed',
    money: 4338300,
  },
  {
    name: 'Juliette Rousseau',
    money: 312175400,
  },
  {
    name: 'Manon Roy',
    money: 193754000,
  },
  {
    name: 'Silke Madsen',
    money: 412003456,
  },
];

const dataSet3 = [
  {
    name: 'Delphine Brar',
    money: 601575400,
  },
  {
    name: 'Evan Williams',
    money: 31338300,
  },
  {
    name: 'Jeppe Møller',
    money: 112175400,
  },
];


const showData1Btn = document.querySelector('#show-data1');
const showData2Btn = document.querySelector('#show-data2');
const showData3Btn = document.querySelector('#show-data3');
const showData123Btn = document.querySelector('#show-data-123');

const sortAscBtn = document.querySelector('#sort-asc');
const sortDescBtn = document.querySelector('#sort-desc');

const calculateWealthBtn = document.querySelector("#calculate-wealth");

let data = [];

const updateDOM = (providedData = data) => {
  let tempData = providedData.map((item) => {
      return `<div class="person"><strong>${item.name}</strong> ${formatMoney(item.money)}</div>`
  });
  tempData = tempData.join('');
//    console.log('tempData', tempData);
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`
} 


const addData = (obj) => {
   data.push(obj);
   // console.log('data', data);
   updateDOM();
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
   return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
 }

 const sortByRichest = () => {
  data.sort( (a, b) => {
      return b.money - a.money
  });

  updateDOM();
}

const sortByPoorest = () => {
  data.sort( (a, b) => {
      return a.money - b.money
  });

  updateDOM();
}


 const calculateWealth = () => {
  const total = data.reduce( (total, user, index) => {
      console.log('total user index', total, user.money, index);
      return total += user.money
  }, 0);
   main.innerHTML += `<h3>Total Wealth: <strong>${formatMoney(total)}</strong></h3>`
}

const setupDataSet1 = () => {
  data  = dataSet1;
  updateDOM();
}

const setupDataSet2 = () => {
  data  = dataSet2;
  updateDOM();
}

const setupDataSet3 = () => {
  data  = dataSet3;
  updateDOM();
}

const setupDataSet123 = () => {
  data  = [...dataSet1, ...dataSet2, ...dataSet3];
  updateDOM();
}


showData1Btn.addEventListener('click', setupDataSet1);
showData2Btn.addEventListener('click', setupDataSet2);
showData3Btn.addEventListener('click', setupDataSet3);
showData123Btn.addEventListener('click', setupDataSet123);

sortDescBtn.addEventListener('click', sortByRichest);
sortAscBtn.addEventListener('click', sortByPoorest);

calculateWealthBtn.addEventListener('click', calculateWealth);