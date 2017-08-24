'use strict';

var totalClicks = 0;
var maxClicks = 25;

function Item (name, source, id) {
  this.name = name;
  this.source = source;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.id = id;
  itemsList.push(this);
}
var itemsList = [];

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var paths = ['assets/bag.jpg', 'assets/banana.jpg', 'assets/bathroom.jpg', 'assets/boots.jpg', 'assets/breakfast.jpg', 'assets/bubblegum.jpg', 'assets/chair.jpg', 'assets/cthulhu.jpg', 'assets/dog-duck.jpg', 'assets/dragon.jpg', 'assets/pen.jpg', 'assets/pet-sweep.jpg', 'assets/scissors.jpg', 'assets/shark.jpg', 'assets/sweep.png', 'assets/tauntaun.jpg', 'assets/unicorn.jpg', 'assets/usb.gif', 'assets/water-can.jpg', 'assets/wine-glass.jpg'];
var ids = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function createItems (){
  for (var i = 0; i < names.length; i++){
    new Item(names[i], paths[i], ids[i]);
  }
}
createItems();

var thisRound = [];
var lastRound = [];

function makeThreeImages (){
  for (var i = 1; i < 4; i++) {
    var indexNum = Math.floor(Math.random() * itemsList.length);
    if (lastRound.includes(indexNum) || thisRound.includes(indexNum)) {
      i--;
    } else {
      thisRound.push(indexNum);
      itemsList[indexNum].timesShown++;
      var linkedImage = document.getElementById('image-' + i);
      linkedImage.setAttribute('src', itemsList[indexNum].source);
      linkedImage.setAttribute('itemIdx', indexNum);
    }
  }
  lastRound = thisRound;
  thisRound = [];
}
makeThreeImages();

for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
}

function onClick (event){
  var itemIdx = parseInt(event.target.getAttribute('itemIdx'));
  var itemIWant = itemsList[itemIdx];
  itemIWant.timesClicked++;
  makeThreeImages();
  totalClicks++;
  if (totalClicks === maxClicks) {
    for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
      var image = document.getElementById('image-' + (i + 1));
      image.removeEventListener('click', onClick);
    }
    var list = document.getElementById('list');
    for (var j = 0; j < itemsList.length; j++) {
      var li = document.createElement('li');
      li.innerText = itemsList[j].name + ' was clicked ' + itemsList[j].timesClicked + ' times';
      list.appendChild(li);
    }
  }
}

var choiceArray = [];
var viewedArray = [];
var itemNames = [];

var graphData = function () {
  for (i = 0; i < itemsList.length; i++) {
    viewedArray.push(itemsList[i].timesShown);
    choiceArray.push(itemsList[i].timesClicked);
    itemNames.push(itemsList[i].name);
  }
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var chartOptions = {
  type: 'Bar',
  data: {
    labels: itemNames,
    datasets: [{
      label: 'Times Chosen',
      data: choiceArray,
      backgroundColor: 'rgba(112, 117, 190, 0.5)',
      borderColor: 'rgba(0, 95, 113, 1)',
      borderWidth: 1.5
    }, {
      label: 'Times Seen',
      data: viewedArray,
      backgroundColor: 'rgba(3, 120, 188, 0.5)',
      borderColor: 'rgba(0, 72, 113, 1)',
      borderWidth: 1.5
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
};
