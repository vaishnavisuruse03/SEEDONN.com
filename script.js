// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close mobile menu after click
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Lightweight modals
const openBtns = document.querySelectorAll('[data-open]');
const modals = document.querySelectorAll('.modal');
openBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.getAttribute('data-open');
    document.getElementById(id).setAttribute('aria-hidden','false');
  });
});
modals.forEach(m=>{
  m.addEventListener('click', (e)=>{
    if(e.target === m || e.target.hasAttribute('data-close')){
      m.setAttribute('aria-hidden','true');
    }
  });
});