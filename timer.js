const clockTimer = document.querySelector("#timer");
function getTime() {
  const countDownDate = new Date("Feb 10, 2019 18:00:00");
  const now = new Date();

  var distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clockTimer.innerText = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  if(distance <0){
    clearInterval(getTime);
    clockTimer.innerText = "TIME OUT";
  }
}

function init() {
  getTime();
  setInterval(getTime,1000);

}

init();
