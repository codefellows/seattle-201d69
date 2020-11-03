// GOAL: make the exact same table that we have in the html dynamically

// get the tbody
var tbodyParent = document.getElementById('table');
var allAnimals = [];

// make an animal constructor function
function Animal(name, type, color, age){
  this.name = name;
  this.type = type;
  this.color = color;
  this.age = age;

  allAnimals.push(this);
}

Animal.prototype.render = function(){
  // make a tr
  var trRowTwo = document.createElement('tr');
  // append tr to tbodyParent
  tbodyParent.appendChild(trRowTwo);

  // for name, type, color, age - 
  var propertyArray = [this.name, this.type, this.color, this.age];
  
  for(var i=0; i<propertyArray.length; i++){
    // make a td
    var tdRowTwo = document.createElement('td');
    // fill it with content
    tdRowTwo.textContent = propertyArray[i];
    // append it to the tr
    trRowTwo.appendChild(tdRowTwo);
  }


}
 
var spot = new Animal('spot', 'cat', 'orange', 2);

var fluffy = new Animal('fluffy', 'cat', 'brown', 3);
var fred = new Animal('fred', 'cat', 'tux', 3);

// Make Header
function generateHeader(){
  // make a tr
  var trElement = document.createElement('tr');
  // make th
  var thElement = document.createElement('th');
  // fill it with content: 'Name'
  thElement.textContent = 'Name';
  // append it to the DOM
  tbodyParent.appendChild(trElement);
  trElement.appendChild(thElement);

  // make th
  thElement = document.createElement('th');
  // fill it with content: 'Type'
  thElement.textContent = 'Type';
  // append it to the DOM
  trElement.appendChild(thElement);

  // make th
  thElement = document.createElement('th');
  // fill it with content: 'Color'
  thElement.textContent = 'Color';
  // append it to the DOM
  trElement.appendChild(thElement);

  // make th
  thElement = document.createElement('th');
  // fill it with content: 'Age'
  thElement.textContent = 'Age';
  // append it to the DOM
  trElement.appendChild(thElement);
}

generateHeader();
for(var i=0; i<allAnimals.length; i++){
  allAnimals[i].render();
}