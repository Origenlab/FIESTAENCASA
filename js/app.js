/**
 * Fiesta en Casa - Directorio de Eventos Sociales
 * Main JavaScript Application
 */

(function() {
  'use strict';

  // DOM Elements
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const locationSelect = document.getElementById('locationSelect');
  const header = document.querySelector('.header');

  // Mobile Menu Toggle
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('header__nav--open');
      menuToggle.classList.toggle('header__menu-toggle--active');
    });
  }

  // Header Scroll Effect
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScroll = currentScroll;
  });

  // Search Functionality
  function performSearch() {
    const query = searchInput.value.trim();
    const location = locationSelect.value;

    if (query || location) {
      // Build search URL (placeholder for actual search page)
      const params = new URLSearchParams();
      if (query) params.set('q', query);
      if (location) params.set('ubicacion', location);

      console.log('Buscando:', { query, location });
      // In production: window.location.href = `/buscar?${params.toString()}`;

      // For demo purposes, show an alert
      alert(`Buscando: "${query}" en ${location || 'toda la republica'}`);
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          // Close mobile menu if open
          if (mainNav.classList.contains('header__nav--open')) {
            mainNav.classList.remove('header__nav--open');
            menuToggle.classList.remove('header__menu-toggle--active');
          }

          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Category Cards Animation on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.category-card, .business-card, .step').forEach(el => {
    observer.observe(el);
  });

  // Stats Counter Animation
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString() + (element.dataset.suffix || '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString() + (element.dataset.suffix || '');
      }
    }, 16);
  }

  // Observe stats section for counter animation
  const statsSection = document.querySelector('.stats');
  let statsAnimated = false;

  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;

          document.querySelectorAll('.stats__number').forEach(stat => {
            const text = stat.textContent;
            const number = parseInt(text.replace(/[^0-9]/g, ''));
            const suffix = text.replace(/[0-9,]/g, '');
            stat.dataset.suffix = suffix;
            animateCounter(stat, number);
          });

          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  // Active Navigation Link
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.header__nav-link');

    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('header__nav-link--active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('header__nav-link--active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // Console welcome message
  console.log('%c Fiesta en Casa ', 'background: #6366f1; color: white; font-size: 20px; padding: 10px;');
  console.log('El mejor directorio de eventos sociales en Mexico');

})();
