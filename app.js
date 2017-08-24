'use strict';

var itemsList = [];
var totalClicks = 0;
var maxClicks = 25;

if (localStorage.getItem('allData')) {
  itemsList = JSON.parse(localStorage.getItem('allData'));
} else {
  function createItems (){
    var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
    var paths = ['assets/bag.jpg', 'assets/banana.jpg', 'assets/bathroom.jpg', 'assets/boots.jpg', 'assets/breakfast.jpg', 'assets/bubblegum.jpg', 'assets/chair.jpg', 'assets/cthulhu.jpg', 'assets/dog-duck.jpg', 'assets/dragon.jpg', 'assets/pen.jpg', 'assets/pet-sweep.jpg', 'assets/scissors.jpg', 'assets/shark.jpg', 'assets/sweep.png', 'assets/tauntaun.jpg', 'assets/unicorn.jpg', 'assets/usb.gif', 'assets/water-can.jpg', 'assets/wine-glass.jpg'];
    var ids = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
    for (var i = 0; i < names.length; i++){
      new Item(names[i], paths[i], ids[i]);
    }
  }
  createItems();
}

function Item (name, source, id) {
  this.name = name;
  this.source = source;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.id = id;
  itemsList.push(this);
}

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
      localStorage.setItem('allData', JSON.stringify(itemsList));
    }
  }
}

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// var barChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         datasets: [{
//             label: 'Scatter Dataset',
//             data: [{
//                 x: -10,
//                 y: 0
//             }, {
//                 x: 0,
//                 y: 10
//             }, {
//                 x: 10,
//                 y: 5
//             }]
//         }]
//     },
//     options: {
//         scales: {
//             xAxes: [{
//                 type: 'linear',
//                 position: 'bottom'
//             }]
//         }
//     }
// });
//
// var chartConfig = {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
//     datasets: [{ // <-- notice that this can be an array of multiple data sets.
//       each data set is its own object literal.
//       label: '# of Votes', // <-- the label of this one data set
//       data: [12, 19, 3, 5, 2, 3], // <-- where your data actually goes. just the numbers
//       backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 5 // border width in pixels
//     }]
//   },
//   options: {
//     maintainAspectRatio: false,
//     animation: {
//       duration: 1000
//     },
//     title: {
//       display: true,
//       text:
//     },
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     }
//   }
// };
//
// var myChart = new Chart(ctx, chartConfig);
