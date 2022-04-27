'use struct';

const main = document.querySelector('#main');
const btnData1 = document.querySelector('#show-data1');
const btnData2 = document.querySelector('#show-data2');
const btnData3 = document.querySelector('#show-data3');
const btnData123 = document.querySelector('#show-data-123');
const btnsortAsc = document.querySelector('#sort-asc');
const btnsortDesc = document.querySelector('#sort-desc');

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

let data = [];

const pushData = (obj) => {
  // let s = obj
  //   .map((i) => {
  //     return `<div class="person"><strong>${i.name}</strong>$${i.money}</div>`;
  //   })
  //   .join('');

  data.push(obj);
};

const show = (obj = data) => {
  let html = obj
    .map((i) => {
      return `<div class="person"><strong>${i.name}</strong>$${i.money}</div>`;
    })
    .join('');

  main.innerHTML = html;
};

const Data1 = () => {
  show(dataSet1);
  pushData(dataSet1);
};

const Data2 = () => {
  show(dataSet2);
  pushData(dataSet2);
};

const Data3 = () => {
  show(dataSet3);
  pushData(dataSet3);
};

const Data123 = () => {
  let s = data
    .map((i) => {
      return `<div class="person"><strong>${i.name}</strong>$${i.money}</div>`;
    })
    .join('');

    console.log(s)

  main.innerHTML = s;
};

const sortByRichest = () => {
  data.sort((a, b) => {
    return b.money - a.money;
  });

  show();
};

const loading = () => {
  // show
  btnData1.addEventListener('click', Data1);
  btnData2.addEventListener('click', Data2);
  btnData3.addEventListener('click', Data3);
  btnData123.addEventListener('click', Data123);

  // money asc, desc
  btnsortAsc.addEventListener('click', sortByRichest);

  // money();
};

loading();
