(() => {
  const root = document.documentElement;
  const canvas = document.getElementById('emberCanvas');
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let embers = [];

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (embers.length === 0) seed();
  };

  const seed = () => {
    const count = Math.min(100, Math.max(38, Math.round(width / 14)));
    embers = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.7 + .35,
      speed: Math.random() * .38 + .08,
      drift: (Math.random() - .5) * .22,
      alpha: Math.random() * .65 + .18,
      phase: Math.random() * Math.PI * 2
    }));
  };

  const draw = (time = 0) => {
    ctx.clearRect(0, 0, width, height);
    for (const ember of embers) {
      ember.y -= ember.speed;
      ember.x += ember.drift + Math.sin(time / 1100 + ember.phase) * .12;
      if (ember.y < -10) { ember.y = height + 8; ember.x = Math.random() * width; }
      if (ember.x < -8) ember.x = width + 8;
      if (ember.x > width + 8) ember.x = -8;
      const twinkle = .62 + Math.sin(time / 500 + ember.phase) * .38;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, ${Math.round(74 + ember.r * 48)}, ${Math.round(46 + ember.r * 22)}, ${ember.alpha * twinkle})`;
      ctx.shadowBlur = 9;
      ctx.shadowColor = '#ff3b2f';
      ctx.arc(ember.x, ember.y, ember.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    if (!reduced) requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', (event) => {
    root.style.setProperty('--cursor-x', `${event.clientX}px`);
    root.style.setProperty('--cursor-y', `${event.clientY}px`);
  }, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  resize();
  draw();
})();

