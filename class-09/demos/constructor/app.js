'use strict';

// Goal: make it so that I can create new people instanes from a form
var peopleArray = [];
var formElement = document.getElementById('form');

// 1. constructor function - person
  // name, story, likesIceCream
function Person(name, story, likesIceCream){
  this.name = name;
  this.story = story;
  this.likesIceCream = likesIceCream;

  peopleArray.push(this);
}

new Person('Bob', 'drives a car', 'yes');
new Person('Frank', 'never eats ice cream', 'yes');
new Person('John', 'owns an ice cream store', 'no');

// event handler
function bananas(event){
  event.preventDefault();

  var personName = event.target.username.value;
  var story = event.target.story.value;
  var likesIceCream = event.target.icecream.value;

  new Person(personName, story, likesIceCream);
}

// 3. event handler
  // get the values from the form
  // create a new object instances from those values
formElement.addEventListener('submit', bananas)
