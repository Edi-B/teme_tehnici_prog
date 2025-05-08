const zone1 = document.createElement("div");
const zone2 = document.createElement("div");
const startBtn = document.createElement("button");
const stopBtn = document.createElement("button");


[zone1, zone2].forEach(zone => {
  zone.style.width = "100px";
  zone.style.height = "50px";
  zone.style.display = "inline-block";
  zone.style.margin = "10px";
  zone.style.backgroundColor = "grey";
  document.body.appendChild(zone);
});


startBtn.textContent = "START";
startBtn.style.backgroundColor = "#4a90e2";
startBtn.style.color = "white";
startBtn.style.padding = "10px 20px";
startBtn.style.margin = "10px";
startBtn.style.border = "none";
startBtn.style.cursor = "pointer";

stopBtn.textContent = "STOP";
stopBtn.style.backgroundColor = "#c00";
stopBtn.style.color = "white";
stopBtn.style.padding = "10px 20px";
stopBtn.style.margin = "10px";
stopBtn.style.border = "none";
stopBtn.style.cursor = "pointer";

document.body.appendChild(document.createElement("br"));
document.body.appendChild(startBtn);
document.body.appendChild(stopBtn);


let intervalId = null;
let toggle = false;

startBtn.addEventListener("click", () => {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    toggle = !toggle;
    zone1.style.backgroundColor = toggle ? "red" : "blue";
    zone2.style.backgroundColor = toggle ? "blue" : "red";
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});