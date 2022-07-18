'use strict';
console.log('main.js');

// Nusitaikyti

const h1El = document.querySelector('h1');
const btn1El = document.getElementById('bnt1');
const btnSpanEl = btn1El.querySelector('span');
// boolean velevele
let largeStyleOn = false;

// 1. nusitaikyti i mygtuka
// 2. uzdeti event listeneri
btn1El.addEventListener('click', () => {
  // 3. iskviesti konsole log
  console.log('paspaudei');
  toggleStyles();
});

console.log('h1El ===', h1El);

function toggleStyles() {
  if (largeStyleOn) {
    h1El.style.marginBottom = '0.3em';
    h1El.style.fontSize = '35px';
    h1El.style.fontWeight = 'bold';
    btnSpanEl.textContent = 'large';
    largeStyleOn = false;
    return;
  }

  h1El.style.marginBottom = '0.3em';
  h1El.style.fontSize = '100px';
  h1El.style.fontWeight = 'normal';
  btnSpanEl.textContent = 'small';
  largeStyleOn = true;
}
