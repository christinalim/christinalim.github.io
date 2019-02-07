var i = 0;
var txt = "Hi, I'm Christina."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
// var text='Cest';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

