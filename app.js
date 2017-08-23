'use strict';

var display = [];
var options = [];
var number = 25;

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
new Pics('sweep', 'assets/sweep.png', 0, 0);
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
  pic.id = "clickMe";
  pic.src = placeholder.source;
  data.appendChild(pic);
};

for (var i = 0; i < 3; i++){
  var rndmPic = Math.floor(Math.random() * options.length);
  var placeholder = options[rndmPic];
  display.push(placeholder);
  placeholder[i].timesShown += 1;
  showPic(display[i].name, display[i].source, display[i].name);
}
// options.splice(rndmPic,1);
// options.push(display);

var cyclePics = function(){
  display = [];
  for (var i = 0; i < 3; i++){
    var rndmPic = Math.floor(Math.random() * options.length);
    var placeholder = options[rndmPic];
    if (placeholder.includes(display[i])){
      var rndmPic = Math.floor(Math.random() * options.length);
    } else {
      display.push(placeholder);
      placeholder[i].timesShown += 1;
      showPic(display[i].name, display[i].source, display[i].name);
    }
  }
};

var click = document.getElementById('clickMe');
click.addEventListener('click', chosen);

var numberClicked = 0;

function chosen(event) {
  for (var i = 0; i < options.length; i++) {
    if (options[i].id === event.target.id && numberClicked < number){
      options[i].timesClicked++;
      numberClicked++;
    } else if (numberClicked === number) {
      click.removeEventListener('click', chosen);

    }
  }
}

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// var scatterChart = new Chart(ctx, {
//     type: 'scatter',
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

// var chartConfig = {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
    // datasets: [{ // <-- notice that this can be an array of multiple data sets.
      // each data set is its own object literal.
      // label: '# of Votes', // <-- the label of this one data set
      // data: [12, 19, 3, 5, 2, 3], // <-- where your data actually goes. just the numbers
      // backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 5 // border width in pixels
  //   }]
  // },
  // options: {
    // maintainAspectRatio: false,
    // animation: {
    //   duration: 1000
    // },
//     title: {
//       display: true,
//       text: 'Some stuff and some junk'
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
