/* Shared contact safety contract. Keep copies identical across static sites. */
(() => {
  'use strict';
  if (window.SiteSecurity) return;
  const normalizePhone = value => {
    if (typeof value !== 'string' || value.length > 64 || !/^\+?[\d\s().-]+$/.test(value.trim())) return null;
    let national = value.replace(/\D/g, '');
    if (national.startsWith('00')) national = national.slice(2);
    if (national.startsWith('549') && national.length === 13) national = national.slice(3);
    else if (national.startsWith('54') && national.length === 12) national = national.slice(2);
    if (national.startsWith('0') && national.length === 11) national = national.slice(1);
    if (!/^[1-9]\d{9}$/.test(national) || /^(\d)\1+$/.test(national) || national.startsWith('15')) return null;
    return { national, whatsapp: `549${national}`, telephone: `+549${national}`, display: national.replace(/^(\d{2})(\d{4})(\d{4})$/, '$1 $2-$3') };
  };
  const params = new URLSearchParams(window.__DEMO_PARAMS__ ?? location.search);
  const personalized = document.documentElement.hasAttribute('data-personalized-demo');
  const invalidPhone = personalized && params.has('t') && (params.getAll('t').length !== 1 || !normalizePhone(params.get('t')));
  let scriptsFailed = false;
  let ready = false;
  const notice = message => {
    let el = document.getElementById('site-contact-safety');
    if (!el) {
      el = document.createElement('p');
      el.id = 'site-contact-safety';
      el.setAttribute('role', 'status');
      el.style.cssText = 'padding:12px 16px;background:#fff4eb;color:#663413;font:14px/1.5 system-ui;margin:12px 0';
      const form = document.querySelector('form');
      if (form) form.before(el); else document.querySelector('main')?.prepend(el);
    }
    el.textContent = message;
  };
  const lock = () => document.querySelectorAll('[data-security-submit]').forEach(button => { button.disabled = true; });
  const apply = () => {
    if (invalidPhone) {
      document.querySelectorAll('a[href^="tel:"],a[href*="wa.me/"],[data-whatsapp],[data-mobile-whatsapp],[data-intent]').forEach(link => {
        link.removeAttribute('href'); link.setAttribute('aria-disabled', 'true');
      });
      document.querySelectorAll('[data-phone-display]').forEach(el => { el.textContent = 'Número inválido · contacto desactivado'; });
      notice('El teléfono de esta demo no es válido. Revisá el enlace recibido para habilitar el contacto.');
    }
    if (scriptsFailed || invalidPhone) { lock(); return; }
    document.querySelectorAll('[data-security-submit]').forEach(button => { button.disabled = false; });
    ready = true;
  };
  document.addEventListener('submit', event => {
    // No form in these sites has a server endpoint. Never allow native GET/POST.
    event.preventDefault();
    if (!ready || scriptsFailed || invalidPhone) {
      event.stopImmediatePropagation();
      if (!invalidPhone) notice('No se pudo preparar el formulario. Usá el enlace directo de contacto de la página.');
    }
  }, true);
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a');
    if (invalidPhone && link?.getAttribute('aria-disabled') === 'true') { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  window.addEventListener('error', event => {
    if (event.error || event.target?.matches?.('script[data-site-script]')) { scriptsFailed = true; lock(); }
  }, true);
  const start = () => setTimeout(apply, 0);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start();
  Object.defineProperty(window, 'SiteSecurity', { value: Object.freeze({ normalizePhone, contactAllowed: () => !invalidPhone }), configurable: false });
})();
