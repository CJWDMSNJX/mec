// Active link highlight
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if(href.endsWith(path)) a.classList.add('active');
  });
})();

// Theme toggle
const html = document.documentElement; const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme'); if(savedTheme){ html.setAttribute('data-theme', savedTheme); }
if(themeBtn){
  themeBtn.addEventListener('click', () => {
    const cur = html.getAttribute('data-theme')||'auto';
    const next = cur==='dark'?'auto':cur==='auto'?'light':'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeBtn.setAttribute('aria-label', `Theme: ${next}`);
  });
}

// Drawer
const drawer = document.getElementById('drawer'); const menuBtn = document.getElementById('menuBtn'); const closeDrawer = document.getElementById('closeDrawer');
if(menuBtn && drawer){
  menuBtn.addEventListener('click', () => { drawer.showModal(); menuBtn.setAttribute('aria-expanded','true'); });
  if(closeDrawer){ closeDrawer.addEventListener('click', () => { drawer.close(); menuBtn.setAttribute('aria-expanded','false'); }); }
  drawer.addEventListener('click', (e) => { if(e.target === drawer){ drawer.close(); menuBtn.setAttribute('aria-expanded','false'); }});
}

// Year & back to top
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
const toTop = document.getElementById('toTop'); if(toTop){
  window.addEventListener('scroll', () => { toTop.classList.toggle('show', window.scrollY > 500); });
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}
