
var app = document.querySelector('.txt-animation');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(250)
  .typeString('I am MERYEM ESSM,a developer')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('a<strong> front-end </strong>developer ')
 
  .pauseFor(1000)
  .start();










