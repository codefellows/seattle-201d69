'use strict'

var userName= prompt("please enter your name?");
//console.log('Greetings  ' + userName);
alert('Greetings  ' + userName);

var aboutVegan= prompt('Hi ' + userName + ' do you think i am a vegan? ');
      
if(aboutVegan.toLowerCase() === 'no') {
    //console.log('yap you got right'); 
    alert('yap you got right');
}else if(aboutVegan.toLowerCase() === 'yes'){
    //console.log ('Sorry no am not a vegan ');
    alert ('Sorry no am not a vegan ');
}else{
    //console.log('please answer yes or no');
    alert('please answer yes or no');
}
        
var hairColor = prompt('Hi ' + userName + ' Do you think my hair color is white ?');
    
if( hairColor.toLowerCase() === 'yes'){
    // console.log('No sorry its black');
    alert('No sorry it\'s black');
}else if(hairColor.toLowerCase() === 'no'){
    //console.log ('You right its not please click ok to continue');
    alert('You right its not please click ok to continue');
}else{
    // console.log('please answer yes or no');
    alert('please answer yes or no');
}

var favoriteColor = prompt('Hi ' + userName + ' Do you think my favorite color is Blue ?');
    
if( favoriteColor.toLowerCase() === 'yes' || favoriteColor.toLowerCase() === 'y'){
        //console.log('Applause '  + userName + ' you got it please click ok to continue');
        alert ('Applause '  + userName + ' you got it please click ok to continue');
} else if (favoriteColor.toLowerCase() === 'no' || favoriteColor.toLowerCase() === 'n'){
    //console.log('Sorry no its Blue');
    alert ('Sorry no its Blue');
} else{
    //console.log('please answer yes or no');
    alert('please answer yes or no');
}

var favoriteTeam= prompt('Hi ' + userName + ' Is Seahawks my favorite team ?');

if( favoriteTeam.toLowerCase() === 'yes'){
    //console.log('GO HAWKS you got it right');
    alert('GO HAWKS you got it right');
} else if(favoriteTeam.toLowerCase() === 'no'){
    //console.log( 'No i am a SEAHAWKS fan');
    alert( 'No i am a SEAHAWKS fan');
} else{
    //console.log('please answer yes or no');
    alert('please answer yes or no');
}
    //  var favoriteCity= prompt('Hi ' + userName + ' Do you think Portland is my favorite city ?');
     
    //      if( favoriteCity .toUpperCase() === 'NO'){
    //         //console.log('yeaaaa its Seattle ' + userName + ' thanks for visiting my website');
    //          alert('yeaaaa its Seattle ' + userName + ' thanks for visiting my website');
    //      }
    //      else if(favoriteCity .toUpperCase() === 'YES'){
    //           //console.log('noooo its Seattle. ' + userName + ' thanks for visiting my website');
    //          alert('noooo its Seattle. ' + userName + ' thanks for visiting my website');
    //      }

    //      else{
    //         // console.log('please answer yes or no');
    //         alert('please answer yes or no');
    //     }








