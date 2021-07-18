// This is the external JS file to the color flipper app

// A simple welcome alert

alert("Welcome to color Flipper App!");

// Declaring the variables

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];    
const btn = document.getElementById("btn");    
const color = document.querySelector(".BackgroundColor");    
const creatorLink = document.getElementById("creator");    
const contactLink = document.getElementById("contact");

//Adding Event listeners

btn.addEventListener('click',function(){    
 
// Declaring a local variable hexColor

    let hexColor = '#';

    // Looping through the array data of the hex variable

    for(let i = 0; i < 6; i++){        
    hexColor += hex[getRandomNumber()];    
  }    
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})

//Generating a random hex code

   function getRandomNumber(){        
  return Math.floor(Math.random() * hex.length);    
}

// Creating the click listener with an alert function

creatorLink.addEventListener('click',function(){        
alert("Created:: Ayanwale Mojisola");    
});

contactLink.addEventListener('click',function(){        
 alert("Contact @ Email:: amojisola06@gmail.com");    
});   
