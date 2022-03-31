'use strict';

const o = 'o';
const x = 'x';
let turn = 0;
let done = false;

const ResetButton = document.querySelector('#reset');
const All_li = document.querySelectorAll('#board li');
console.log('resetBtn', ResetButton);

// const container = document.querySelector('#container');
const container = document.getElementById('container');

ResetButton.addEventListener('click', () => {
  All_li.forEach(item => {
    item.textContent = '+';
    item.classList = '';
    turn = 0;
    done = false;
    container.style.backgroundColor = ('#666');
  });
});

const winMessage = player => {
  container.style.backgroundColor =
    player === 'o' ? 'rgba(144, 238, 144, 0.5)' : 'rgba(240, 118, 128, 0.726';
  alert(`player ${player} wim `);
};

const checkWin = player => {
  let p = [];
  All_li.forEach((currentValue, index, array) => {
    // console.log(currentValue, index);
    // console.log(currentValue.textContent);
    p.push(currentValue.classList.contains(player));
  });
  // console.log('p:', p);

  const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;

  if (
    (p1 && p2 && p3) ||
    (p4 && p5 && p6) ||
    (p7 && p8 && p9) ||
    (p1 && p5 && p9) ||
    (p3 && p5 && p9) ||
    (p1 && p4 && p7) ||
    (p2 && p5 && p8) ||
    (p3 && p6 && p9)
  )
    return true;
  else return false;
};

// console.log('o', checkWin('o'));
// console.log('x', checkWin('x'));

All_li.forEach((item, index, array) => {
  // console.log('foreach', item, index, array);

  item.addEventListener('click', () => {
    if (item.classList.contains('disabled')) {
      alert('Already filled');
    } else if (turn % 2 === 0) {
      console.log("turn", turn);
      item.textContent = 'O';
      item.classList.add('o', 'disabled');
      if (checkWin(o)) {
        winMessage(o);
        done = true;
      }
    } else if (turn % 2 === 1) {
      console.log("turn", turn);
      item.textContent = 'x';
      item.classList.add('x', 'disabled');
      if (checkWin(x)) {
        winMessage(x);
        done = true;
      }
    }

    if (!done && turn < 8) {
      turn++;
    } else if (turn >= 8) {
      console.log('Tie Game');
      // alert('Tie Game');
    }
  });
});
