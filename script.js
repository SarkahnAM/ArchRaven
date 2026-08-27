const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelector('#signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.querySelector('#form-message');
  message.textContent = 'Thanks — you’re on the list.';
  event.currentTarget.reset();
});

// Live ticking clock
const clockTime = document.querySelector('#clock-time');
const clockDate = document.querySelector('#clock-date');

function updateClock() {
  const now = new Date();
  clockTime.textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  clockDate.textContent = now.toLocaleDateString([], {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).toUpperCase();
}
updateClock();
setInterval(updateClock, 1000);
