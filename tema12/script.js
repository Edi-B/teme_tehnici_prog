const app = document.getElementById('app');

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let currentIndex = 0;
let intervalId = null;

const letterDisplay = document.createElement('div');
letterDisplay.textContent = 'A';
letterDisplay.className = 'text-6xl font-bold';
letterDisplay.style.color = getRandomColor();
app.appendChild(letterDisplay);

const startBtn = document.createElement('button');
startBtn.textContent = 'START';
startBtn.className = 'bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded mx-2';
startBtn.onclick = () => {
  if (intervalId) return;

  intervalId = setInterval(() => {
    letterDisplay.textContent = alphabet[currentIndex];
    letterDisplay.style.color = getRandomColor();
    currentIndex = (currentIndex + 1) % alphabet.length;
  }, 500);
};
app.appendChild(startBtn);

const stopBtn = document.createElement('button');
stopBtn.textContent = 'STOP';
stopBtn.className = 'bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded mx-2';
stopBtn.onclick = () => {
  clearInterval(intervalId);
  intervalId = null;
};
app.appendChild(stopBtn);

function getRandomColor() {
  const colors = ['#EF4444', '#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#EC4899'];
  return colors[Math.floor(Math.random() * colors.length)];
}