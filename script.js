// Hamburger menu toggle (placeholder — no menu items defined yet)
document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
});

// Video play button — swap in a real video embed here later
document.getElementById('playBtn').addEventListener('click', function () {
  this.closest('.video-box').querySelector('.video-caption').textContent = 'Loading training...';
});

// Hide sticky CTA once the pricing section is in view
const pricingSection = document.getElementById('pricing');
const stickyCta = document.getElementById('stickyCta');
if (pricingSection && stickyCta) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        stickyCta.style.display = entry.isIntersecting ? 'none' : '';
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(pricingSection);
}
