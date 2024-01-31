const distance = document.querySelector("#distance");
const showDistance = document.querySelector("#distanceValue");
showDistance.textContent = distance.value;

const time = document.querySelector("#time");
const showTime = document.querySelector("#timeValue");
showTime.textContent = time.value;

distance.addEventListener("input",(event)=>{
    showDistance.textContent = event.target.value;
})

time.addEventListener("input",(event)=>{
    showDistance.textContent = event.target.value;
})

