//Set Blastoff count to 10. Activate function by clicking button and it just subtracts the count by
//one until it reaches zero then displays the blast off message.
// Plays audio when timer reaches zero
var count = 10;
var myVideo = document.getElementById("video");
var button = document.getElementById("Launch");
function Countdown() {
  document.getElementById("Countdown").innerHTML = count;
  document.getElementById("Launch").disabled = true;

  if (count == 5) {
    document.getElementById("Countdown").innerHTML =
      "Less than half of the time remains!!";
  }

  if (count == 0) {
    document.getElementById("Countdown").innerHTML = "Blastoff!!!";
    myVideo.play();
    count = 10;
    clearInterval(countdownInterval);
  }
  count = count - 1;
}
