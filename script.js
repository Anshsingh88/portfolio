document.getElementById('yr').textContent = new Date().getFullYear();

// Highlight the current section in both navs
const links = document.querySelectorAll('.menu a, .pill a');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('section').forEach(s => io.observe(s));

// Portfolio filter
const btns = document.querySelectorAll('.filters button');
btns.forEach(b => b.addEventListener('click', () => {
  btns.forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('.card').forEach(c => {
    c.hidden = b.dataset.f !== 'all' && !c.dataset.t.split(' ').includes(b.dataset.f);
  });
}));
