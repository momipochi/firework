

const fireworks = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}


function draw() {
  var countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();
  // Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  window.print(days + "d " + hours + "h "+ minutes + "m " + seconds + "s ");
  
if (distance > 0) {
background(255, 0, 0);
  textSize(20);
  text(days+"d",width/2-75,height/2)
  text(hours+"h",width/2-25,height/2);
  text(minutes+"m",width/2+25,height/2);
  text(seconds+"s",width/2+75, height/2);
}
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    window.print("expired");
colorMode(RGB);
  background(0, 0, 0, 25);
  textSize(50)
  text("Happy NewYear",width/2,height/2+20);
  text("Szczesliwego Nowego Roku",width/2-140,height/2-20)
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  }
}, 1000);
}

