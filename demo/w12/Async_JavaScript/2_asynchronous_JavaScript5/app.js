'use strict';

// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc

// boilingWater();
// console.log(`chop carrots`);

function boilingWater() {
  console.log('boiling...');

  setTimeout(() => {
    console.log('boiling done.');
    console.log('add carrots');
    setTimeout(() => {
      console.log('carrots boiling done');
      console.log('add onions');
      setTimeout(() => {
        console.log('onion boiling done');
      }, 500);
    }, 2000);
  }, 3000);
}