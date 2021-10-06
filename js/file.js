
var app = document.querySelector('.txt-animation');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(400)
  .typeString('I am MERYEM ESSM,a developer')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('a<strong> front-end </strong>developer ')
 
  .pauseFor(1000)
  .start();








  

//           // Create the query list.
// const mediaQueryList = window.matchMedia("(orientation: portrait)");

// // Define a callback function for the event listener.
// function handleOrientationChange(mql) {
//   // ...
// }

// // Run the orientation change handler once.
// handleOrientationChange(mediaQueryList);

// // Add the callback function as a listener to the query list.
// mediaQueryList.addEventListener('change', handleOrientationChange);
        
        

                








