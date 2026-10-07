(() => {
  const phone = '5491128985042';
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      nav.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      menuButton.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  }

  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent('Hola, quiero consultar por un trabajo con Techos Sanabria.')}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const contact = String(data.get('phone') || '').trim();
    const details = String(data.get('message') || '').trim();
    const message = ['Hola, soy ' + name + '.', 'Mi teléfono es ' + contact + '.', details ? 'Quería consultar: ' + details : 'Quería hacer una consulta por un trabajo.'].join('\n');
    const destination = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(destination, '_blank', 'noopener,noreferrer');
    document.getElementById('formStatus').textContent = 'Se abrió WhatsApp con el mensaje. Revisalo y enviá cuando quieras.';
  });

  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();
})();
