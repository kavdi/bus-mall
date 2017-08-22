'use strict';
var display = [];
var options = [];
var recycle = [];
function Pics (name, url, timesShown, timesClicked){
  this.name = name;
  this.url = url;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  options.push(this);

}

new Pics('bag', '/assets/bag.jpg', 0, 0);
new Pics('banana', 'assets/banana.jpg', 0, 0);
new Pics('bathroom', 'assets/bathroom.jpg', 0, 0);
new Pics('boots', 'assets/boots.jpg', 0, 0);
new Pics('breakfast', 'assets/breakfast.jpg', 0, 0);
new Pics('bubblegum', 'assets/bubblegum.jpg', 0, 0);
new Pics('chair', 'assets/chair.jpg', 0, 0);
new Pics('cthulhu', 'assets/cthulhu.jpg', 0, 0);
new Pics('dogDuck', 'assets/dog-duck.jpg', 0, 0);
new Pics('dragon', 'assets/dragon.jpg', 0, 0);
new Pics('pen', 'assets/pen.jpg', 0, 0);
new Pics('petSweep', 'assets/pet-sweep.jpg', 0, 0);
new Pics('scissors', 'assets/scissors.jpg', 0, 0);
new Pics('shark', 'assets/shark.jpg', 0, 0);
new Pics('sweep', 'assets/sweep.jpg', 0, 0);
new Pics('tauntaun', 'assets/tauntaun.jpg', 0, 0);
new Pics('unicorn', 'assets/unicorn.jpg', 0, 0);
new Pics('usb', 'assets/usb.gif', 0, 0);
new Pics('waterCan', 'assets/water-can.jpg', 0, 0);
new Pics('wineGlass', 'assets/wine-glass.jpg', 0, 0);

var showPictures = function(){
  var getTable = document.getElementById('pictures');
  var getRow = document.createElement('tr');
  var setPicture = document.createElement('td');
  setPicture.ClassName = 'options';
  setPicture.innerText = placeholder;
  getRow.appendChild(setPicture);
  getTable.appendChild(getRow);
};

for (var i = 0; i < 3; i++){
  var rndmPic = Math.floor(Math.random() * options.length);
  var placeholder = options[rndmPic];
  display.push(placeholder);
  options.splice(rndmPic, 1);
  showPictures();
};

console.log(display);

var newOptions = function(){
  for (var x = 0; x < 3; x++){
    recycle.push(display[0]);
    console.log(recycle);
    display = [];
    console.log(display);
    for (var i = 0; i < 3; i++){
      var rndmPic = Math.floor(Math.random() * options.length);
      var placeholder = options[rndmPic];
      display.push(placeholder);
      options.splice(rndmPic, 1);
      options.push(recycle);
    }
  }
};
newOptions();
console.log(options);
