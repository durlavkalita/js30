const secondHand = document.getElementById("second-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

function setDate() {
  const now = new Date(); //will update date every second
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  
  const secondsDegrees = (seconds/60)*360+90;
  const minsDegrees = (mins/60)*360+90;
  const hoursDegrees = (hours/12)*360+90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);