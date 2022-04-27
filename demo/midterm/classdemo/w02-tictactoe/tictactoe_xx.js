
const o = 'o';
const x = 'x';
let turn = 0;
let done = false;

const resetBtn = document.querySelector('#reset');
// console.log('resetBtn', resetBtn);

const allLi = document.querySelectorAll('#board li');
console.log('board li', allLi);

const container = document.querySelector('#container');

const checkWin = (player) => {
    let p = [];
    allLi.forEach( (li) => {
      p.push(li.classList.contains(player))
    } );
    console.log('p', p);

    const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;

    if( 
      (p1 && p2 & p3) ||
      (p4 && p5 & p6) ||
      (p7 && p8 & p9) ||
      (p1 && p4 & p7) ||
      (p2 && p5 & p8) ||
      (p3 && p6 & p9) ||      
      (p1 && p5 & p9) ||
      (p3 && p5 & p7) 

    ) 
      return true;
    else
      return false;

}

// console.log('checkWin(o)', checkWin('o'));
// console.log('checkWin(x)', checkWin('x'));

const reset = () => {
    allLi.forEach( (li) => {
        li.textContent = '+';
        li.classList = '';
    });
    container.style.backgroundColor = '#666';
    
}

const winMessage = (player) => {
  container.style.backgroundColor = ( player === 'o' ? 'rgba(144, 238, 144, 0.5)' : 'rgba(240, 118, 128, 0.726)');
  alert(`player ${player} wins`);
}

allLi.forEach( (item) => {
   item.addEventListener('click', () => {
     if(item.classList.contains('disabled')){
       alert('Already filled')
     } else if(turn % 2 === 0) {
       item.textContent = 'O';
       item.classList.add('o', 'disabled')
       if(checkWin(o)) {
         winMessage(o);
         done = true;
       }

     } else if (turn % 2 === 1){
      item.textContent = 'X';
      item.classList.add('x', 'disabled')
      if(checkWin(x)) {
        winMessage(x);
        done = true;
      }
     }

     if(!done && turn < 8) {
       turn++;
     } else if (turn >=8 ) {
       
     }
   });
});

resetBtn.addEventListener('click', reset);


