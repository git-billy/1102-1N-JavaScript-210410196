'use strict';

const ResetButton = document.querySelector('#reset');
const All_li = document.querySelectorAll('#board li');
console.log('resetBtn', ResetButton);

/*
// itself
All_li.forEach((value, index) => {
  // console.log(item);
  console.log("index:", index, "value:", value, "contains:", value.classList.contains('o'));
});

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item)
});

console.log(copy);
*/

//  School Course

//////////////////////////////
// function()

// ResetButton.addEventListener('click', function () {
//     All_li.forEach(item => {
//       item.textContent = '+';
//       item.classList = '';
//     });
// });

/////////////////////////////
// Arrow()

ResetButton.addEventListener('click', () => {
  All_li.forEach(item => {
    item.textContent = '+';
    item.classList = '';
  });
});

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

console.log('o', checkWin('o'));
console.log('x', checkWin('x'));
