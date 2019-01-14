const clockTimer = document.querySelector("#timer");
const buttonChange = document.querySelector("#buttonChange1");
const buttonChange2 = document.querySelector("#buttonChange2");
var parent = document.getElementById('buttonChange1');
var customElement = createCustomElement("Click M/V", "https://www.youtube.com/embed/1nk5O__ALI8");


function createCustomElement(anchorText, anchorLink){

  var aTag = document.createElement("a");
  aTag.href = anchorLink;
  aTag.innerHTML = anchorText;
  aTag.classList.add("wrap");
  aTag.classList.add("button");
  return aTag ;
}


function getTime() {
  const countDownDate = new Date("Jan 30, 2018 13:15:00");
  const now = new Date();

  var distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000 +1);

  clockTimer.innerText = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";
 
  if(distance < 0){
    clearInterval(getTime);
    clockTimer.innerText = "TIME OUT";
    parent.appendChild(customElement);
  }
}


function init() {
  getTime();
  setInterval(getTime,1000);

}



init();
