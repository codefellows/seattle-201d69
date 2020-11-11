'use strict';

// 1. global variables
var allImages = [];
var containerElement = document.getElementById('container');
var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');
var uniqueRandomNumbers = [];
var totalVotes = 0;
var namesArray = [];
var votesArray = [];

// 2. make a constructor for the pictures
var Product = function(name, endOfFile){
  this.filepath = `/img/${name}.${endOfFile}`;
  this.alt = this.title = name;
  this.votes = 0;
  this.views = 0;

  allImages.push(this);
}

// 3. make object instances
new Product('bag', 'jpg');
new Product('banana', 'jpg');
new Product('bathroom', 'jpg');
new Product('boots', 'jpg');
new Product('breakfast', 'jpg');
new Product('bubblegum', 'jpg');
new Product('chair', 'jpg');
new Product('cthulhu', 'jpg');
new Product('dog-duck', 'jpg');
new Product('dragon', 'jpg');
new Product('pen', 'jpg');
new Product('pet-sweep', 'jpg');
new Product('scissors', 'jpg');
new Product('shark', 'jpg');
new Product('sweep', 'png');
new Product('tauntaun', 'jpg');
new Product('unicorn', 'jpg');
new Product('usb', 'gif');
new Product('water-can', 'jpg');
new Product('wine-glass', 'jpg');

// 4. function to put three images on the page - render
var render = function(){
  getUniqueRandomNumbers();

  var firstIndex = uniqueRandomNumbers[0];
  var secondIndex = uniqueRandomNumbers[1];
  var thirdIndex = uniqueRandomNumbers[2];

  imageOne.src = allImages[firstIndex].filepath;
  imageOne.title = allImages[firstIndex].title;
  imageOne.alt = allImages[firstIndex].title;
  allImages[firstIndex].views++;

  imageTwo.src = allImages[secondIndex].filepath;
  imageTwo.title = allImages[secondIndex].title;
  imageTwo.alt = allImages[secondIndex].title;
  allImages[secondIndex].views++;

  imageThree.src = allImages[thirdIndex].filepath;
  imageThree.title = allImages[thirdIndex].title;
  imageThree.alt = allImages[thirdIndex].title;
  allImages[thirdIndex].views++;

}

// 5. make a unique random number function
function getUniqueRandomNumbers(){
  uniqueRandomNumbers = [];

  for(var i=0; i<3; i++){
    var randomNumber = getRandomNumber();
  
    // make sure random number is unique
    while(uniqueRandomNumbers.includes(randomNumber)){
      randomNumber = getRandomNumber();
    }
  
    // put it at the beginning of the array
    uniqueRandomNumbers.unshift(randomNumber);
  }

  // make sure the array is only three values long
  while(uniqueRandomNumbers.length > 3){
    uniqueRandomNumbers.pop();
  }

}

function getRandomNumber(){
  return Math.floor(Math.random() * allImages.length);
}

// 7. function called eventHandler
function voteForImages(e){
  // figure out what was clicked on: e.target.title
  var titleOfClick = e.target.title;
  // loop through the object instances to find the object instance whose title = the e.target.title
  for(var i=0; i<allImages.length; i++){
    if(titleOfClick === allImages[i].title){
      allImages[i].votes++;
      totalVotes++;
    }
  }

  render();

  if(totalVotes === 5){
    containerElement.removeEventListener('click', voteForImages);
    generateChartData();
    generateChart();
  }

}

// 6. event listener to listen on the container
containerElement.addEventListener('click', voteForImages);

function generateChartData(){
  for(var i=0; i<allImages.length; i++){
    namesArray.push(allImages[i].alt);
    votesArray.push(allImages[i].votes);
  }
}

function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: namesArray, 
          datasets: [{
              label: '# of Bananas',
              data: votesArray,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}

render();