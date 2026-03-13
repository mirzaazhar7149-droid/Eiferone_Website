/**
 * EiferOne — Shared Component Loader
 * Injects the identical nav and footer into every page.
 * To update nav/footer site-wide, edit ONLY this file.
 */

(function () {
  'use strict';

  /* ── NAV HTML ─────────────────────────────────────────── */
  const NAV_HTML = `
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <a href="./index.html" class="logo-wrap" aria-label="EiferOne Home">
    <img src="./assets/footerlogo.png" alt="EiferOne cybersecurity consultancy logo" class="logo-img" width="120" height="38">
  </a>
  <ul class="nav-links" role="menubar">
    <li role="none"><a href="./index.html#about" role="menuitem">About</a></li>
    <li class="nav-dropdown" role="none">
      <a href="./index.html#services" role="menuitem" aria-haspopup="true" aria-expanded="false">Services</a>
      <div class="dropdown-menu" role="menu" aria-label="Services submenu">
        <a role="menuitem" href="./index.html#services" data-service="pentest">
          <svg class="dmicon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Web App Penetration Testing
        </a>
        <a role="menuitem" href="./index.html#services" data-service="api">
          <svg class="dmicon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>API Security Assessment
        </a>
        <a role="menuitem" href="./index.html#services" data-service="network">
          <svg class="dmicon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Network Vulnerability Assessment
        </a>
        <a role="menuitem" href="./index.html#services" data-service="compliance">
          <svg class="dmicon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>Compliance Gap Analysis
        </a>
        <a role="menuitem" href="./index.html#services" data-service="architecture">
          <svg class="dmicon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Security Architecture Review
        </a>
        <a role="menuitem" href="./index.html#services" data-service="remediation">
          <svg class="dmicon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>Remediation &amp; Re-testing
        </a>
      </div>
    </li>
    <li role="none"><a href="./index.html#portfolio" role="menuitem">Portfolio</a></li>
    <li role="none"><a href="./index.html#faq" role="menuitem">FAQ</a></li>
    <li role="none"><a href="./index.html#pricing" role="menuitem">Pricing</a></li>
    <li role="none"><a href="./team.html" role="menuitem">Team</a></li>
    <li role="none"><a href="./index.html#contact" class="nav-cta" role="menuitem">Free Consult</a></li>
  </ul>
  <button class="nav-hamburger" id="navHamburger" aria-expanded="false" aria-controls="mobileNav" aria-label="Open navigation menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation" aria-hidden="true">
  <ul>
    <li><a href="./index.html#about">About</a></li>
    <li><a href="./index.html#services">Services</a></li>
    <li><a href="./index.html#portfolio">Portfolio</a></li>
    <li><a href="./index.html#audit">Sample Audit</a></li>
    <li><a href="./index.html#pricing">Pricing</a></li>
    <li><a href="./index.html#faq">FAQ</a></li>
    <li><a href="./team.html">Team</a></li>
  </ul>
  <a href="./index.html#contact" class="mobile-nav-cta">Get Free Consultation →</a>
</nav>`;

  /* ── FOOTER HTML ──────────────────────────────────────── */
  const FOOTER_HTML = `
<footer class="site-footer" role="contentinfo">
  <div class="footer-grid">

    <div class="footer-brand">
      <img src="./assets/footerlogo.png" alt="EiferOne" class="footer-logo-img" width="120" height="42">
      <p>UK-based cybersecurity consultancy specialising in penetration testing, security audits, and compliance consulting for businesses that take security seriously.</p>
      <div class="footer-address">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>80 Kingsway North, Hollington<br>St Leonards-on-Sea, TN38 0JR<br>England &amp; Wales, United Kingdom</span>
      </div>
    </div>

    <div class="footer-col">
      <h4>Services</h4>
      <a href="./index.html#services" data-service="pentest">Web App Penetration Testing</a>
      <a href="./index.html#services" data-service="api">API Security Assessment</a>
      <a href="./index.html#services" data-service="network">Network Vulnerability Assessment</a>
      <a href="./index.html#services" data-service="compliance">Compliance Gap Analysis</a>
      <a href="./index.html#services" data-service="architecture">Security Architecture Review</a>
      <a href="./index.html#services" data-service="remediation">Remediation &amp; Re-testing</a>
    </div>

    <div class="footer-col">
      <h4>Company</h4>
      <a href="./index.html#about">About EiferOne</a>
      <a href="./team.html">Our Team</a>
      <a href="./index.html#portfolio">Portfolio</a>
      <a href="./index.html#pricing">Pricing</a>
      <a href="./index.html#faq">FAQ</a>
      <a href="./index.html#contact">Contact</a>
    </div>

    <div class="footer-col">
      <h4>Connect</h4>
      <a href="https://www.linkedin.com/company/eiferone1/" target="_blank" rel="noopener noreferrer">
        <svg class="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>
      <a href="https://www.instagram.com/eiferone__/" target="_blank" rel="noopener noreferrer">
        <svg class="footer-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        Instagram
      </a>
      <a href="mailto:info@eiferone.com">
        <svg class="footer-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        info@eiferone.com
      </a>
      <a href="tel:+447804474366">
        <svg class="footer-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.08 2.18 2 2 0 012.07 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        +44 7804 474 366
      </a>
    </div>

  </div>
  <div class="footer-bottom">
    <span>© <span id="footerYear"></span> EiferOne Ltd. Registered in England &amp; Wales · Company No. [reg no.] · All rights reserved.</span>
    <div class="footer-bottom-links">
      <a href="./privacy-policy.html">Privacy</a>
      <a href="./terms.html">Terms</a>
      <a href="./disclosure.html">Report a Vulnerability</a>
    </div>
  </div>
</footer>`;

  /* ── FOOTER STYLES (injected once) ───────────────────── */
  const FOOTER_EXTRA_CSS = `
<style id="footer-extra-styles">
.footer-address {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-top: 1.25rem;
  font-family: 'Barlow', 'Share Tech Mono', monospace;
  font-size: 0.78rem;
  color: #9CA3AF;
  line-height: 1.65;
}
.footer-address svg {
  flex-shrink: 0;
  margin-top: 0.15rem;
  color: #6B7280;
}
.footer-vuln-link {
  display: flex !important;
  align-items: center;
  gap: 0.45rem;
  color: #c87070 !important;
  border: 1px solid rgba(180,50,50,0.2);
  background: rgba(180,50,50,0.06);
  border-radius: 2px;
  padding: 0.3rem 0.6rem !important;
  margin-top: 0.4rem;
  font-size: 0.78rem !important;
  transition: border-color 0.2s, background 0.2s !important;
}
.footer-vuln-link:hover {
  border-color: rgba(180,50,50,0.45) !important;
  background: rgba(180,50,50,0.12) !important;
  color: #e08080 !important;
}
.footer-vuln-link svg {
  flex-shrink: 0;
}
</style>`;

  /* ── INJECT ───────────────────────────────────────────── */
  function inject() {
    // Inject extra footer styles into <head>
    if (!document.getElementById('footer-extra-styles')) {
      document.head.insertAdjacentHTML('beforeend', FOOTER_EXTRA_CSS);
    }

    // Nav: insert before first child of body
    const navContainer = document.createElement('div');
    navContainer.innerHTML = NAV_HTML;
    document.body.insertBefore(navContainer.firstElementChild, document.body.firstChild);
    // Mobile nav
    const mobileNavEl = navContainer.firstElementChild;
    document.body.insertBefore(mobileNavEl, document.body.children[1]);

    // Footer: append to body
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = FOOTER_HTML;
    document.body.appendChild(footerContainer.firstElementChild);

    // Set year
    const yrEl = document.getElementById('footerYear');
    if (yrEl) yrEl.textContent = new Date().getFullYear();

    // Scroll FAB button (shared on all pages)
    var fab = document.createElement('button');
    fab.className = 'scroll-fab';
    fab.setAttribute('aria-label', 'Scroll to bottom');
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>';
    document.body.appendChild(fab);

    var atBottom = false;
    function updateFab() {
      var scrollY = window.scrollY || window.pageYOffset;
      var docH = document.documentElement.scrollHeight;
      var winH = window.innerHeight;
      var show = scrollY > 200;
      fab.classList.toggle('visible', show);
      atBottom = scrollY + winH >= docH - 80;
      fab.classList.toggle('at-bottom', atBottom);
      fab.setAttribute('aria-label', atBottom ? 'Scroll to top' : 'Scroll to bottom');
    }
    window.addEventListener('scroll', updateFab, { passive: true });
    updateFab();

    fab.addEventListener('click', function () {
      if (atBottom) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }
    });

    // Highlight active nav link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (a) {
      const href = a.getAttribute('href') || '';
      const page = href.split('/').pop().split('#')[0] || 'index.html';
      if (page === path && !href.includes('#')) {
        a.classList.add('active');
      }
    });

    initNav();
  }

  /* ── NAV BEHAVIOUR ────────────────────────────────────── */
  function initNav() {
    const hamburger  = document.getElementById('navHamburger');
    const mobileNav  = document.getElementById('mobileNav');
    const dropdown   = document.querySelector('.nav-dropdown');

    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        const open = mobileNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(open));
        mobileNav.setAttribute('aria-hidden', String(!open));
      });

      // Close mobile nav on link click
      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          mobileNav.setAttribute('aria-hidden', 'true');
        });
      });

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
          mobileNav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          mobileNav.setAttribute('aria-hidden', 'true');
        }
      });
    }

    // Hover-based dropdown (with small close delay so mouse can travel to menu)
    if (dropdown) {
      const trigger = dropdown.querySelector('a');
      let closeTimer = null;

      function openDropdown() {
        clearTimeout(closeTimer);
        dropdown.classList.add('open');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
      }

      function closeDropdown() {
        closeTimer = setTimeout(function () {
          dropdown.classList.remove('open');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        }, 120);
      }

      dropdown.addEventListener('mouseenter', openDropdown);
      dropdown.addEventListener('mouseleave', closeDropdown);

      // Keep keyboard support
      if (trigger) {
        trigger.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
          }
          if (e.key === 'Escape') {
            dropdown.classList.remove('open');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Nav: solid on hero, translucent when scrolled, solid again on hover
    const nav = document.querySelector('.site-nav');
    if (nav) {
      let isNavHovered = false;

      function updateNavBg() {
        if (window.scrollY < 80) {
          nav.style.background = 'rgba(13,13,16,0.95)';
          nav.style.backdropFilter = 'blur(12px)';
        } else if (isNavHovered) {
          nav.style.background = 'rgba(13,13,16,0.95)';
          nav.style.backdropFilter = 'blur(12px)';
        } else {
          nav.style.background = 'rgba(13,13,16,0.45)';
          nav.style.backdropFilter = 'blur(6px)';
        }
      }

      window.addEventListener('scroll', updateNavBg, { passive: true });
      nav.addEventListener('mouseenter', function () { isNavHovered = true;  updateNavBg(); });
      nav.addEventListener('mouseleave', function () { isNavHovered = false; updateNavBg(); });
      updateNavBg();
    }
  }

  /* ── BOOT ─────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();