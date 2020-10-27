'use strict';

var likesPizza = prompt('do you like pizza?');

// if(a condition is true){
  // do the thing in this code block
//} else {
  // do this other thing
// }

if(likesPizza.toLowerCase() === 'yes'){
  alert('the user likes pizza!');
} else if(likesPizza.toUpperCase() === 'NO'){
  alert('the user does not like pizza');
} else {
  alert('please answer yes or no');
}