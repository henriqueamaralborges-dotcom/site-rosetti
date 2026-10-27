/**
 * ROSETTI / LN4 - High-Velocity Website Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCountdown();
  initTelemetrySimulator();
  initModals();
  initCart();
  initMobileMenu();
  initSmoothScroll();
});

// -------------------------------------------------------------
// 1. Theme Management (Dark / Light / Lime)
// -------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem('ln-theme') || 'dark';
  setTheme(savedTheme);

  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const theme = e.currentTarget.getAttribute('data-set-theme');
      setTheme(theme);
    });
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ln-theme', theme);

  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    const btnTheme = btn.getAttribute('data-set-theme');
    btn.classList.toggle('active', btnTheme === theme);
  });
}

// -------------------------------------------------------------
// 2. Next Grand Prix Countdown Timer
// -------------------------------------------------------------
function initCountdown() {
  // Target date: Next major race weekend
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 4);
  targetDate.setHours(15, 0, 0, 0);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
    if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// -------------------------------------------------------------
// 3. Live Telemetry Simulator (Speed, RPM, Gear, G-Force)
// -------------------------------------------------------------
function initTelemetrySimulator() {
  let speed = 338;
  let rpm = 12400;
  let gear = 8;
  let gForce = 4.6;
  let throttle = 98;
  let isAccelerating = false;

  const speedEl = document.getElementById('telemetry-speed');
  const rpmEl = document.getElementById('telemetry-rpm');
  const gearEl = document.getElementById('telemetry-gear');
  const gEl = document.getElementById('telemetry-g');
  const throttleEl = document.getElementById('telemetry-throttle');

  const throttleBtn = document.getElementById('btn-sim-throttle');
  const brakeBtn = document.getElementById('btn-sim-brake');

  if (throttleBtn) {
    throttleBtn.addEventListener('mousedown', () => { isAccelerating = true; });
    throttleBtn.addEventListener('mouseup', () => { isAccelerating = false; });
    throttleBtn.addEventListener('touchstart', () => { isAccelerating = true; });
    throttleBtn.addEventListener('touchend', () => { isAccelerating = false; });
  }

  if (brakeBtn) {
    brakeBtn.addEventListener('click', () => {
      speed = Math.max(95, speed - 85);
      gear = Math.max(3, gear - 2);
      rpm = 10800;
      gForce = -4.2;
      throttle = 0;
      updateUI();
    });
  }

  setInterval(() => {
    if (isAccelerating) {
      speed = Math.min(356, speed + 4);
      gear = speed > 320 ? 8 : (speed > 280 ? 7 : 6);
      rpm = Math.min(13100, rpm + 150);
      throttle = 100;
      gForce = 5.1;
    } else {
      // Small ambient fluctuations like real telemetry
      speed += (Math.random() * 2 - 1) * 0.8;
      speed = Math.max(325, Math.min(348, speed));
      rpm = Math.round(speed * 36.8 + (Math.random() * 40 - 20));
      gForce = (4.4 + Math.random() * 0.5).toFixed(1);
      throttle = Math.min(100, Math.max(92, Math.round(96 + Math.random() * 4)));
    }
    updateUI();
  }, 300);

  function updateUI() {
    if (speedEl) speedEl.textContent = Math.round(speed) + ' KM/H';
    if (rpmEl) rpmEl.textContent = rpm.toLocaleString() + ' RPM';
    if (gearEl) gearEl.textContent = 'G ' + gear;
    if (gEl) gEl.textContent = (gForce > 0 ? '+' : '') + gForce + ' G';
    if (throttleEl) throttleEl.textContent = throttle + '%';
  }
}

// -------------------------------------------------------------
// 4. Modal System for Helmet / Edition Specs
// -------------------------------------------------------------
const helmetData = {
  season2026: {
    title: 'Season 2026 Base Lid',
    subtitle: 'Official FIA 8860-2018 ABP Carbon Specification',
    img: './assets/images/helmet-season-2026.webp',
    specs: [
      { label: 'Shell Material', val: 'Military-Grade Autoclaved Carbon Fiber' },
      { label: 'Weight', val: '1,240g ± 30g' },
      { label: 'Aero Package', val: 'Custom Top Chimney & Chin Spoiler' },
      { label: 'Colorway', val: 'High-Vis LN Lime & Olive Carbon' },
      { label: 'Radio Harness', val: 'Integrated Noise-Cancelling F1 Comms' }
    ],
    desc: 'Projetado para as mais altas exigências aerodinâmicas do campeonato mundial de 2026. Apresenta o icônico amarelo neon LN com acabamento acetinado de baixa turbulência.'
  },
  discoball: {
    title: 'Discoball Chrome Edition',
    subtitle: 'Las Vegas & Singapore Night Race Special',
    img: './assets/images/helmet-discoball.webp',
    specs: [
      { label: 'Finish', val: 'Micro-Facet Mirrored Chrome Prism' },
      { label: 'Visor', val: 'Electrum Iridium Flash Coating' },
      { label: 'Weight', val: '1,275g' },
      { label: 'Light Refraction', val: 'High-Luminance Floodlight Spec' }
    ],
    desc: 'Edição desenvolvida para refletir os holofotes dos circuitos noturnos. Mais de 4.000 micro-facetas holográficas aplicadas à mão sobre fibra de carbono.'
  },
  darkglitter: {
    title: 'Dark Glitter Stealth',
    subtitle: 'Testing & Midnight Run Special',
    img: './assets/images/helmet-darkglitter.webp',
    specs: [
      { label: 'Finish', val: 'Cosmic Metallic Pearl Flake' },
      { label: 'Shell', val: 'Ultra-thin Zylon Anti-Intrusion Cap' },
      { label: 'Colorway', val: 'Deep Carbon Void & Subtle Lime flecks' }
    ],
    desc: 'Visual discreto à sombra que explode em partículas cintilantes sob a luz solar direta da pista. Uma obra de engenharia de pintura automotiva.'
  }
};

function initModals() {
  const overlay = document.getElementById('spec-modal');
  const closeBtn = document.getElementById('modal-close');

  document.querySelectorAll('[data-open-spec]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-spec');
      const item = helmetData[id];
      if (!item) return;

      document.getElementById('modal-title').textContent = item.title;
      document.getElementById('modal-subtitle').textContent = item.subtitle;
      document.getElementById('modal-img').src = item.img;
      document.getElementById('modal-desc').textContent = item.desc;

      const specsList = document.getElementById('modal-specs-list');
      specsList.innerHTML = '';
      item.specs.forEach(s => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.padding = '0.5rem 0';
        li.style.borderBottom = '1px solid var(--color-border)';
        li.innerHTML = `<span style="color: var(--color-muted); font-size: 0.85rem;">${s.label}</span><strong style="font-size: 0.9rem;">${s.val}</strong>`;
        specsList.appendChild(li);
      });

      overlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  }
}

// -------------------------------------------------------------
// 5. Cart System
// -------------------------------------------------------------
function initCart() {
  let cartCount = 0;
  const badge = document.getElementById('cart-count');

  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      if (badge) badge.textContent = cartCount;

      const title = btn.getAttribute('data-add-cart');
      showToast(`Adicionado ao Carrinho: ${title}`);
    });
  });
}

function showToast(msg) {
  let toast = document.getElementById('live-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'live-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// -------------------------------------------------------------
// 6. Mobile Menu Drawer
// -------------------------------------------------------------
function initMobileMenu() {
  const btn = document.getElementById('mobile-hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const close = document.getElementById('mobile-close');

  if (btn && drawer) {
    btn.addEventListener('click', () => {
      drawer.classList.add('active');
    });
  }

  if (close && drawer) {
    close.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) drawer.classList.remove('active');
    });
  });
}

// -------------------------------------------------------------
// 7. Smooth Scroll
// -------------------------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
