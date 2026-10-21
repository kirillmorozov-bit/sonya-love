const envelope = document.getElementById('openEnvelope');
const envelopeWrap = document.getElementById('envelopeWrap');
const message = document.getElementById('message');
const lastMessage = document.getElementById('lastMessage');
const surpriseButton = document.getElementById('surpriseButton');
const backButton = document.getElementById('backButton');
const hearts = document.getElementById('hearts');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  envelope.setAttribute('aria-label', 'Письмо открыто');
  window.setTimeout(() => {
    envelopeWrap.hidden = true;
    message.hidden = false;
    burstHearts(18);
  }, 620);
});

surpriseButton.addEventListener('click', () => {
  message.hidden = true;
  lastMessage.hidden = false;
  burstHearts(26);
});

backButton.addEventListener('click', () => {
  lastMessage.hidden = true;
  message.hidden = false;
  burstHearts(10);
});

function burstHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = Math.random() > 0.35 ? '♥' : '♡';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${12 + Math.random() * 19}px`;
    heart.style.animationDuration = `${3 + Math.random() * 2.5}s`;
    heart.style.animationDelay = `${Math.random() * 0.8}s`;
    hearts.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  }
}
