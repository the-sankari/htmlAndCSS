const distance = document.querySelector("#distance");
const showDistance = document.querySelector("#distanceValue");
showDistance.textContent = distance.value;

const time = document.querySelector("#time");
const showTime = document.querySelector("#timeValue");
showTime.textContent = time.value;

const speed = document.querySelector(".speed");
const calculateBtn = document.querySelector(".calculate");


const dValue= distance.addEventListener("input",(event)=>{
    showDistance.textContent = event.target.value;
})

const tValue = time.addEventListener("input",(event)=>{
    showTime.textContent = event.target.value;
})
function calSpeed() {
     let speed = distance.value / time.value;
     return speed.toFixed(2);
}


calculateBtn.addEventListener("click",()=>{
    speed.textContent = `Speed: ${calSpeed()} km/h`;
})
