'use strict';

// GOAL:  make a cat array of object insances and save them into local storage and get them out again
var allCats = [];
// 1. make a Cat constructor
  // make sure it pushes instances into a global array
var Cat = function(name='bob', color='rainbow', age=100, grumpinessLevel=10){
  this.name = name;
  this.color = color;
  this.age = age;
  this.grumpinessLevel = grumpinessLevel;

  allCats.push(this);
}

Cat.prototype.speek = function(){
  console.log(`${this.name} says meow`);
}

// 2. create the object instances
new Cat('fred', 'tux', 3, 1);
new Cat('creature', 'calico', 2, 8);
new Cat('baby dragon', 'rag doll', 9, 1);
new Cat('blooka', 'brown tabby', 10, 7);

console.log('step 1. allCats array', allCats);

function putCatsIntoLS(){
  // 3. turn my allCats array into JSON
  
  var stringifiedCats = JSON.stringify(allCats);
  // console.log('step 2. allCats array stringified', stringifiedCats);
  
  // 4. put that JSON array into Local Storage
  localStorage.setItem('cats', stringifiedCats);
}

function getCatsOutOfLS(){
  // 5. get that array out of Local Storage
  var catsFromLocalStorage = localStorage.getItem('cats');
  // console.log('step 3. cats from local storage: ', catsFromLocalStorage);
  
  // 6. turn that array back into javaScript
  var parsedCats = JSON.parse(catsFromLocalStorage);
  console.log('step 4. cats that have been turned back into javaScript: ', parsedCats);

  generateNewCats(parsedCats);

}



function generateNewCats(cats){
  allCats = [];
  for(var i=0; i<cats.length; i++){
    new Cat(cats[i].name, cats[i].color, cats[i].age, cats[i].grumpinessLevel);
  }

  console.log('final step allCats:', allCats);
}



putCatsIntoLS();
getCatsOutOfLS();
