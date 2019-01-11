const clockTimer = document.querySelector("#timer");
function getTime() {
  const countDownDate = new Date("Dec 10, 2018 18:00:00");
  const now = new Date();

  var distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clockTimer.innerText = days + "일 " + hours + "시간 "
  + minutes + "분 " + seconds + "초 ";

  if(distance <0){
    clearInterval(getTime);
    clockTimer.innerText = "컴백!!!!";
  }
}

function init() {
  getTime();
  setInterval(getTime,1000);

}

init();
