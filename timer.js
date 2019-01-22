
const clockTimer = document.querySelector("#timer");
var parent = document.getElementById('buttonChange1');
var customElement = createCustomElement("Click M/V", "#videostory");

var parent2 = document.getElementById('videostory');
var customElement2 = createCustomElement2("https://www.youtube.com/embed/1nk5O__ALI8");


function createCustomElement(anchorText, anchorLink){

  var aTag = document.createElement("a");
  aTag.href = anchorLink;
  aTag.innerHTML = anchorText;
  aTag.classList.add("wrap");
  aTag.classList.add("button");
  aTag.classList.add("more");
  aTag.id = "videolink";
  

  return aTag ;
}

function createCustomElement2(iframeLink){
  var iframeTag = document.createElement("iframe");
  parent2.classList.add("mfp-hide");
  parent2.style = "max-width: 75%; margin: 0 auto;";
  iframeTag.width = "853";
  iframeTag.height = "480";
  iframeTag.src = iframeLink;
  return iframeTag;
}


function addButton() {
    parent2.appendChild(customElement2);
    parent.appendChild(customElement);
  }


function getTime() {
  const countDownDate = new Date("Jan 22, 2019 16:46:59");
  const now = new Date();

  var distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000 +1);

  clockTimer.innerText = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";
 
  if(distance < 0){
    clearInterval(stop);
    clockTimer.innerText = "Days gone by";
    addButton();
    
  }

  

  
}

//시간 계속 지나게 하는 함수를 변수로 설정.
var stop = setInterval(getTime,1000);


function init() {
  getTime();
  


  
}



init();
