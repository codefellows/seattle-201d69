'use strict';

// global variables

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];

// constructor functions

function Store(name, minCutomers, maxCustomers, averageCookieSale){
  this.city = name;
  this.minCutomers = minCutomers;
  this.maxCustomers = maxCustomers;
  this.averageCookieSale = averageCookieSale;
  this.cookiesForTheDay = 0;

  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];

  allStores.push(this);
}

// prototypes

Store.prototype.generateCustomersEachHour = function(){
    // generate the customers each hour
    
    for(var i=0; i<hours.length; i++){
      var randomCutsomerNumber = generateRandomNumber(this.minCutomers, this.maxCustomers);
      this.customersEachHour.push(randomCutsomerNumber);
    }
}

Store.prototype.generateCookiesSoldEachHour = function(){
    // generate the cookies sold each hour

    // loop over my customersEachHour and multiply that number by my averageCookieSale
    for(var i=0; i<this.customersEachHour.length; i++){
      var cookieTotalForTheHour = Math.ceil(this.customersEachHour[i] * this.averageCookieSale);
      this.cookiesSoldEachHour.push(cookieTotalForTheHour);

      console.log('cookies for the day', this.cookiesForTheDay)
      // total for the day
      this.cookiesForTheDay = this.cookiesForTheDay + cookieTotalForTheHour;
    }
}

Store.prototype.render = function(){
    // render the cookiesSoldEachHour to the DOM

    var parent = document.getElementById('seattle');

    // make a tr
    var trElement = document.createElement('tr');
    // append it to parent
    parent.appendChild(trElement);

    // make a td
    var tdElement = document.createElement('td');
    // fill it with the name of the store
    tdElement.textContent = this.city;
    // append to tr
    trElement.appendChild(tdElement);

    // loop over cookiesSoldEachHour
      // create an td
      // fill it with content
      // append it to the tr
    for(var i=0; i<this.cookiesSoldEachHour.length; i++){
      tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesSoldEachHour[i];
      trElement.appendChild(tdElement);
    }

    // make a td
    tdElement = document.createElement('td');
    // fill it the total for the day
    tdElement.textContent = this.cookiesForTheDay;
    // append to the tr
    trElement.appendChild(tdElement);
}

// object instantiations

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);



// helper function
// I got this code from MDN Math.Random()
function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateHeaderRow(){
  var parent = document.getElementById('seattle');
  // make a tr
  var trElement = document.createElement('tr');
  // append to the parent
  parent.appendChild(trElement);

  // make a th
  var thElement = document.createElement('th');
  // fill it content = 'Location'
  thElement.textContent = 'Location';
  // append it to the tr
  trElement.appendChild(thElement);

  // loop over the hours
  for(var i=0; i<hours.length; i++){
    // make a th
    thElement = document.createElement('th');
    // fill it with the content of the array
    thElement.textContent = hours[i];
    // append it to the tr
    trElement.appendChild(thElement);
  }
}

function generateFooterRow(){
  
  var totalOfAllTotals = 0;

  var parent = document.getElementById('seattle');
  // make a tr
  var trElement = document.createElement('tr');
  // append to the parent
  parent.appendChild(trElement);

  var tdElement = document.createElement('td');
  tdElement.textContent = 'Totals';
  trElement.appendChild(tdElement);

  for(var i=0; i<hours.length; i++){
    var hourlyTotal = 0;

    for(var j=0; j<allStores.length; j++){
      hourlyTotal += allStores[j].cookiesSoldEachHour[i];
      // allStores[j] = {
      //  city: 'Seattle',
      //  cookiesSoldEachHour: [124, 24, 3323, 33, 22, ...] 
      //}
      totalOfAllTotals += allStores[j].cookiesSoldEachHour[i];
    }

    // make a td
    var tdElement = document.createElement('td');
    // fill it with the hourlyTotals
    tdElement.textContent = hourlyTotal;
    // append it to the tr
    trElement.appendChild(tdElement);

  }

  // make a td
  var tdElement = document.createElement('td');
  // fill it with the hourlyTotals
  tdElement.textContent = totalOfAllTotals;
  // append it to the tr
  trElement.appendChild(tdElement);

}

generateHeaderRow();
// calls methods on all of my object instances
for(var i=0; i<allStores.length; i++){
  allStores[i].generateCustomersEachHour();
  allStores[i].generateCookiesSoldEachHour();
  allStores[i].render();
}

generateFooterRow();
