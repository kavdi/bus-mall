'use strict';
var display = [];
var options = [];
// var recycle = [];

function Pics (name, source, timesShown, timesClicked){
  this.name = name;
  this.source = source;
  this.id = name;
  this.timesShown = 0;
  this.timesClicked = 0;
  options.push(this);

}

new Pics('bag', 'assets/bag.jpg', 0, 0);
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

var showPic = function(name, source, id){
  var table = document.getElementById('pictures');
  var data = document.createElement('td');
  table.appendChild(data);
  var pic = document.createElement('img');
  pic.src = placeholder.source;
  data.appendChild(pic);
};
// var showPictures = function(source, picName, id){
//   var getTable = document.getElementById('pictures');
//   var getRow = document.createElement('tr');
//   getTable.appendChild(getRow);
//   var setPicture = document.createElement('td');
//   setPicture.ClassName = 'img';
//   getRow.appendChild(setPicture);
//   var insert = document.createElement('img');
//   element.setAttribute('src', source);
//   element.setAttribute('class', picName);
//   element.setAttribute('name', id);
//   setPicture.appendChild(insert);
// };

for (var i = 0; i < 3; i++){
  var rndmPic = Math.floor(Math.random() * options.length);
  var placeholder = options[rndmPic];
  display.push(placeholder);
  showPic();


  // options.splice(rndmPic, 1);
  // showPictures(Pics.source, 'img', Pics.name);
};
console.log(display);


// var newOptions = function(){
//   for (var x = 0; x < 3; x++){
//     recycle.push(display[0]);
//     console.log(recycle);
//     display = [];
//     console.log(display);
//     for (var i = 0; i < 3; i++){
//       var rndmPic = Math.floor(Math.random() * options.length);
//       var placeholder = options[rndmPic];
//       display.push(placeholder);
//       options.splice(rndmPic, 1);
//       options.push(recycle);
//     }
//   }
// };
// newOptions();
// console.log(options);
