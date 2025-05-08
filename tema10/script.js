const container = document.getElementById('container');
const message = document.getElementById('message');
const startBtn = document.getElementById('start-btn');

let startTime, timeoutId;
let testStarted = false;
let waitingForGreen = false;

function resetUI() {
  document.body.style.backgroundColor = 'white';
  message.textContent = 'Apasă butonul pentru a începe testul.';
  startBtn.style.display = 'inline-block';
}

function startTest() {
  testStarted = true;
  waitingForGreen = true;
  startBtn.style.display = 'none';
  document.body.style.backgroundColor = 'lightgray';
  message.textContent = 'Așteaptă culoarea verde...';

  const delay = Math.floor(Math.random() * 3000) + 2000; // 2-5 secunde

  timeoutId = setTimeout(() => {
    waitingForGreen = false;
    document.body.style.backgroundColor = 'green';
    message.innerHTML = 'Bravo!';
    startTime = new Date().getTime();
  }, delay);
}

function endTest() {
  if (!testStarted) return;

  const currentTime = new Date().getTime();

  if (waitingForGreen) {
    clearTimeout(timeoutId);
    message.textContent = 'Prea devreme! Încearcă din nou.';
    document.body.style.backgroundColor = 'red';
  } else {
    const reactionTime = currentTime - startTime;
    message.innerHTML = `Bravo!<br>${reactionTime} ms (${(reactionTime / 1000).toFixed(1)} s)`;
    document.body.style.backgroundColor = 'green';
  }

  testStarted = false;
  waitingForGreen = false;
  startBtn.style.display = 'inline-block';
}

startBtn.addEventListener('click', startTest);
document.body.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !testStarted) {
    startTest();
  } else if (e.code === 'KeyR' && !testStarted) {
    resetUI();
  }
});
document.body.addEventListener('click', () => {
  if (testStarted) {
    endTest();
  }
});