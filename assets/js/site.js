
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const menuLinks=[...document.querySelectorAll('.nav-links a')];
menuLinks.forEach(link=>{if(link.href===location.href)link.setAttribute('aria-current','page')});
