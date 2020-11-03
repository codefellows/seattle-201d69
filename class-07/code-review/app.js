'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// GOAL: generate a list of cookie sales to the DOM
  // Seattle
  // 6am: 20 cookies sold,
  // 7am: 48 cookies sold

// object literal for each store
  // need an array of cookies sold each hour - ultimate goal
    // multiple customers each hour by average cookie sales
  // render method to render that array of cookies sold each hour to the DOM

  // an array of customers each hour
  // generate that array of customers each hour
    // using Math.Random and min and max customers

var seattleStore = {
  city: 'Seattle',
  minCutomers: 23,
  maxCustomers: 65,
  averageCookieSale: 6.5,
  cookiesForTheDay: 0,

  customersEachHour: [],
  cookiesSoldEachHour: [],

  generateCustomersEachHour: function(){
    // generate the customers each hour
    
    for(var i=0; i<hours.length; i++){
      var randomCutsomerNumber = generateRandomNumber(this.minCutomers, this.maxCustomers);
      this.customersEachHour.push(randomCutsomerNumber);
    }
  },

  generateCookiesSoldEachHour: function(){
    // generate the cookies sold each hour

    // loop over my customersEachHour and multiply that number by my averageCookieSale
    for(var i=0; i<this.customersEachHour.length; i++){
      var cookieTotalForTheHour = Math.ceil(this.customersEachHour[i] * this.averageCookieSale);
      this.cookiesSoldEachHour.push(cookieTotalForTheHour);

      console.log('cookies for the day', this.cookiesForTheDay)
      // total for the day
      this.cookiesForTheDay = this.cookiesForTheDay + cookieTotalForTheHour;
    }
  },

  render: function(){
    // render the cookiesSoldEachHour to the DOM

    var seattleParent = document.getElementById('seattle');
    var seattleSectionParent = document.getElementById('seattle-section');

    // make an h2
    var h2Element = document.createElement('h2');
    // fill it with content of 'Seattle'
    h2Element.textContent = this.city;
    // append it to the DOM
    seattleSectionParent.appendChild(h2Element);

    // loop over cookiesSoldEachHour
      // create an li
      // fill it with content
      // append it to the DOM
    for(var i=0; i<this.cookiesSoldEachHour.length; i++){
      var insertLi = document.createElement('li');
      // 8am: 186 cookies
      insertLi.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      seattleParent.appendChild(insertLi);
    }
  }
}

// helper function
// I got this code from MDN Math.Random()
function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattleStore.generateCustomersEachHour();
seattleStore.generateCookiesSoldEachHour();
seattleStore.render();