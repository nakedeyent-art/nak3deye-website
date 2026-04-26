// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── NAV SCROLL ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 80
    ? 'rgba(5,5,5,0.97)' : 'rgba(5,5,5,0.85)';
});

// ── MOBILE MENU ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  navCta?.classList.toggle('open');
});

// ── EMAIL FORM ──
document.querySelectorAll('.email-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button');
    if (!input?.value) return;
    btn.textContent = '✓ You\'re In!';
    btn.style.background = '#22c55e';
    input.value = '';
    setTimeout(() => {
      btn.textContent = 'Join The Movement';
      btn.style.background = '';
    }, 4000);
  });
});

// ── PARALLAX HERO ──
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.4}px)`;
  }, { passive: true });
}

// ── MUSIC FILTERS ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.music-card').forEach(card => {
      const show = filter === 'all' || card.dataset.type === filter;
      card.style.display = show ? 'block' : 'none';
    });
  });
});

// ── TICKER DUPLICATE ──
const ticker = document.querySelector('.ticker-inner');
if (ticker) {
  ticker.innerHTML += ticker.innerHTML; // duplicate for seamless loop
}
