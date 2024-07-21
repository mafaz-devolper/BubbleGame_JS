var timer = 10;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
};

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
};


function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 125; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#bottom-panel").innerHTML = clutter;
};


function runTimer() {
    var timerint =  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }else{
        clearInterval(timerint);
        document.querySelector("#bottom-panel").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
};


document.querySelector("#bottom-panel").addEventListener("click",function(dets){
    var clickedum = Number(dets.target.textContent);
    if(clickedum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


getNewHit();  
runTimer();
makeBubble();
