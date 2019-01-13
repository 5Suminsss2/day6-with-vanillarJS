const clockTimer = document.querySelector("#timer");
const buttonChange = document.querySelector("#buttonChange1");
const buttonChange2 = document.querySelector("#buttonChange2");
function getTime() {
  const countDownDate = new Date("Jan 13, 2019 15:13:50");
  const now = new Date();

  var distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clockTimer.innerText = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  if(distance < 0){
    clearInterval(getTime);
    clockTimer.innerText = "TIME OUT";
    buttonChange2.innerText = "Click M/V";
    buttonChange.classList.add("wrap");
    buttonChange2.classList.add("button");

  
  }
}

function init() {
  getTime();
  setInterval(getTime,1000);

}

init();
