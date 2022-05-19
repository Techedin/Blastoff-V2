//Set Blastoff count to 10. Activate function by clicking button and it just subtracts the count by
//one until it reaches zero then displays the blast off message.
// Plays audio when timer reaches zero
var count = 10;
function Countdown() {
  document.getElementById("Countdown").innerHTML = count;

  count = count - 1;
  if (count == 0) {
    document.getElementById("Countdown").innerHTML = "Blastoff!!!";
    count = 10;
    clearInterval(countdownInterval);
  }
}
