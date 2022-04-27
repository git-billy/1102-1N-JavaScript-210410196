const btnAll = document.querySelectorAll('.link li');

console.log('Debug:', btnAll[1]);

// L Series
btnAll[0].addEventListener('click', () => {
  clearMenu2All();
  toggleDiv(1);
});

btnAll[1].addEventListener('click', () => {
  showTKU60();
  resetDiv();
});

// M Series
btnAll[3].addEventListener('click', () => {
  changeColor(1);
});

btnAll[4].addEventListener('click', () => {
  changeColor(2);
});

btnAll[5].addEventListener('click', () => {
  changeColor(3);
});

// R Series
btnAll[6].addEventListener('click', () => {
  showTKU60();
});

btnAll[7].addEventListener('click', () => {
  clearMenu2All();
});

function changeImage(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<img src="./images/TKU1.png" style="width:100%; height: auto" />`;
      break;
    case 2:
      player.innerHTML =
        '<img src="./images/TKU2.png" style="width:100%; height: auto" />';
      break;
    case 3:
      player.innerHTML = `<img src="./images/TKU3.png" style="width:100%; height: auto" />`;
      break;
    case 4:
      player.innerHTML = `<img src="./images/TKU4.png" style="width:100%; height: auto"/>`;
      break;
    case 5:
      player.innerHTML = `<img src="./images/TKU5.png" style="width:100%; height: auto"/>`;
      break;
  }
}

function changeColor(index) {
  let p;
  switch (index) {
    case 1:
      p = document.querySelector('#heading');
      p.style.backgroundColor = 'lightgreen';
      break;
    case 2:
      p = document.querySelector('#section');
      p.style.backgroundColor = 'azure';
      break;
    case 3:
      p = document.querySelector('#footer');
      p.style.backgroundColor = 'lightblue';
      break;
  }
}

function resetDiv() {
  let p1 = document.querySelector('#menu1');
  let p2 = document.querySelector('#section');
  let p3 = document.querySelector('#menu2');
  p1.style.width = '20%';
  p2.style.width = '60%';
  p3.style.width = '20%';
  p1.classList = '';
  p2.classList = '';
  p3.classList = '';
}

function toggleDiv(index) {
  let p1 = document.querySelector('#menu1');
  let p2 = document.querySelector('#section');
  let p3 = document.querySelector('#menu2');
  resetDiv();
  switch (index) {
    case 1:
      p1.classList.toggle('invisible');
      p2.style.width = '80%';
      break;
    case 2:
      p2.classList.toggle('invisible');
      p1.style.width = '50%';
      p3.style.width = '50%';
      break;
    case 3:
      p3.classList.toggle('invisible');
      p2.style.width = '80%';
      break;
  }
}

function showTKU60() {
  const p = document.querySelector('#menu2');
  p.innerHTML = `
  <ul>
    <li onclick="changeImage(1)">
      <a href="#">淡江大戲 1</a>
    </li>
    <li onclick="changeImage(2)">
      <a href="#">淡江大戲 2</a>
    </li>
    <li onclick="changeImage(3)">
      <a href="#">淡江大戲 3</a>
    </li>
    <li onclick="changeImage(4)">
      <a href="#">淡江大戲 4</a>
    </li>
    <li onclick="changeImage(5)">
      <a href="#">淡江大戲 5</a>
    </li>
  </ul>
  `;
}

function clearMenu2All() {
  const p = document.querySelector('#menu2');
  p.innerHTML = ``;
}
