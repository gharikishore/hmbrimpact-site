// ── Animated count-up for impact counters ──
  // To update the displayed numbers, edit the data-target attribute
  // on each .counter-card in the HTML above. data-format can be:
  //   "number" → renders 12,500
  //   "usd"    → renders $12,500
  (function () {
    const cards = document.querySelectorAll('.counter-card');
    const DURATION = 1800; // ms
    const EASE = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

    const formatNumber = (n) => Math.floor(n).toLocaleString('en-US');
    const formatUSD = (n) => '$' + Math.floor(n).toLocaleString('en-US');

    function animate(card) {
      if (card.dataset.animated) return;
      card.dataset.animated = '1';
      card.classList.add('visible');

      const target = parseFloat(card.dataset.target) || 0;
      const format = card.dataset.format === 'usd' ? formatUSD : formatNumber;
      const valueEl = card.querySelector('.counter-value');
      const start = performance.now();

      function tick(now) {
        const elapsed = Math.min((now - start) / DURATION, 1);
        const value = target * EASE(elapsed);
        valueEl.textContent = format(value);
        if (elapsed < 1) requestAnimationFrame(tick);
        else valueEl.textContent = format(target);
      }
      requestAnimationFrame(tick);
    }

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) animate(e.target); });
      }, { threshold: 0.35 });
      cards.forEach((c) => obs.observe(c));
    } else {
      cards.forEach(animate); // fallback
    }
  })();
