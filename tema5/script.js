const app = document.getElementById('app');

function createInput(type, placeholder) {
  const input = document.createElement('input');
  input.type = type;
  input.placeholder = placeholder;
  input.required = true;
  input.className = 'w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400';
  return input;
}

function createButton(text, colorClass, iconClass = '', onClick = null) {
  const btn = document.createElement('button');
  btn.className = `w-full ${colorClass} text-white font-semibold py-3 rounded-full flex items-center justify-center space-x-2`;
  if (onClick) btn.addEventListener('click', onClick);

  if (iconClass) {
    const icon = document.createElement('i');
    icon.className = `${iconClass} text-xl`;
    btn.appendChild(icon);
  }

  const span = document.createElement('span');
  span.textContent = text;
  btn.appendChild(span);

  return btn;
}



const title = document.createElement('h2');
title.textContent = 'Welcome Back!';
title.className = 'text-2xl font-semibold text-center mb-6';
app.appendChild(title);


const form = document.createElement('form');
form.className = 'space-y-4';
form.id = 'login-form';

const emailInput = createInput('email', 'Enter Email Address...');
const passwordInput = createInput('password', 'Password');

const rememberLabel = document.createElement('label');
rememberLabel.className = 'flex items-center space-x-2 text-sm';
const rememberCheckbox = document.createElement('input');
rememberCheckbox.type = 'checkbox';
rememberCheckbox.className = 'form-checkbox';
const rememberText = document.createElement('span');
rememberText.textContent = 'Remember Me';
rememberLabel.appendChild(rememberCheckbox);
rememberLabel.appendChild(rememberText);

const loginBtn = document.createElement('button');
loginBtn.type = 'submit';
loginBtn.className = 'w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full';
loginBtn.textContent = 'Login';

form.appendChild(emailInput);
form.appendChild(passwordInput);
form.appendChild(rememberLabel);
form.appendChild(loginBtn);

app.appendChild(form);


const separator = document.createElement('div');
separator.className = 'my-4 border-t text-center text-sm text-gray-500';
separator.textContent = 'or';
app.appendChild(separator);


const googleBtn = createButton('Login with Google', 'bg-red-600 hover:bg-red-700', 'bi bi-google');
const fbBtn = createButton('Login with Facebook', 'bg-blue-800 hover:bg-blue-900', 'bi bi-facebook');
app.appendChild(googleBtn);
app.appendChild(fbBtn);


const links = document.createElement('div');
links.className = 'mt-6 text-center text-sm';
links.innerHTML = `
  <a href="#" class="text-blue-500 hover:underline">Forgot Password?</a><br/>
  <a href="#" class="text-blue-500 hover:underline">Create an Account!</a>
`;
app.appendChild(links);


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const pass = passwordInput.value;

  if (email && pass) {
    alert(`Login cu email: ${email} și parola: ${'*'.repeat(pass.length)}`);
  } else {
    alert('Completează toate câmpurile!');
  }
});