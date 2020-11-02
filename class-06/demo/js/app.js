// GOAL: make some object literals

var babyKnees = {
  filepath: './img/baby knees-1.jpg',
  alt: 'baby knees',
  title: 'baby knees',
  render: function(){
    var babyKneesParent = document.getElementById('knees');
      // 1. create an element
      var h2Element = document.createElement('h2');
      
      // 2. fill it with content
      h2Element.textContent = babyKnees.title;
      
      // 3. append it to the DOM
      babyKneesParent.appendChild(h2Element);
    }
}

babyKnees.render();
  



var dreamer = {
  filepath: './img/dreamer-1.jpg',
  alt: 'dreamer',
  title: 'dreamer'
}

// 1. get the connection to the DOM
var dreamerParent = document.getElementById('dreamer');

// 2. create an element
var h3Element = document.createElement('h3');

// 3. fill it with content
h3Element.textContent = dreamer.title;

// 4. append to the DOM
dreamerParent.appendChild(h3Element);

var fence = {
  filepath: './img/fence-1.jpg',
  alt: 'fence',
  title: 'fence'
}

