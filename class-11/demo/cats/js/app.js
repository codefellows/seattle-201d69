// Goal: vote on two cats
// 1. render an image to the page x 2
// 2. now let's do it dynamically

var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var containerElement = document.getElementById('container');

var firstRandomIndexNumber = 0;
var secondRandomIndexNumber = 0;

// 3. render two random cats to the page
  // so, I'll need an array of ALL the cats
  // then, I'll be able to get a random cat out of that array

var allCats = [];

var Cat = function(name){
  this.filePath = `img/${name}.jpg`;
  this.title = this.alt = name;
  this.votes = 0;

  allCats.push(this);
}

new Cat('boxCat');
new Cat('chargingCat');
new Cat('cuddleCats');
new Cat('multiTaskingCat');
new Cat('outsideCat');
new Cat('sleepyCat');
new Cat('tomatoCat');
new Cat('yogaCat');

function randomIndexGenerator(){
  // lets use this random number generator to get a random number between 0 and the length of the array - 1. 
  // That random number will be the random index value of the array that we can use to find the cat in the array that we want to display
  return Math.floor(Math.random() * allCats.length);

}

function render(){

  firstRandomIndexNumber = randomIndexGenerator();
  secondRandomIndexNumber = randomIndexGenerator();

  // 1st - 3 / 1
  // 2nd - 1 / 3

  while(secondRandomIndexNumber === firstRandomIndexNumber){
    secondRandomIndexNumber = randomIndexGenerator();
  }
  // make sure that this random number is NOT the same as the one before it

  
  imageOneElement.src = allCats[firstRandomIndexNumber].filePath; // filepath
  imageOneElement.title = allCats[firstRandomIndexNumber].title; // name
  imageOneElement.alt = allCats[firstRandomIndexNumber].alt;

  imageTwoElement.src = allCats[secondRandomIndexNumber].filePath; // filepath
  imageTwoElement.title = allCats[secondRandomIndexNumber].title; // name
  imageTwoElement.alt = allCats[secondRandomIndexNumber].alt;
  
}

// 4. make sure that the two images are not the same

// 5. when I click, I want two new cats to appear

function handleClick(e){
  var title = e.target.title;

  for(var i=0; i<allCats.length; i++){
    if(allCats[i].title === title){
      allCats[i].votes++;
    }
  }

  render();
  // identify which one was clicked
  // keep a tally
  // render two new pictures
}

containerElement.addEventListener('click', handleClick);

render();