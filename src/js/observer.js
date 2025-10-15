const sections = document.querySelectorAll(
  "#hero-banner, #equipment, #training, #pricing, #instructors, #instructors-gallery, #instructors-about, #reviews, #gallery, #contact"
);

function getThreshold() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isTablet = window.matchMedia("(max-width: 1024px)").matches;
  const isSmallLandscape = window.matchMedia(
    "(max-width: 900px) and (orientation: landscape)"
  ).matches;

  // Adjust thresholds for different situations
  if (isSmallLandscape) return 0.1; // very low — trigger early in landscape
  if (isMobile) return 0.2; // mobile portrait
  if (isTablet) return 0.4; // medium portrait
  return 0.6; // desktop / large screens
}

function createObserver() {
  const thresholdValue = getThreshold();

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target.id === "training") {
            target.classList.add("show");
            const cards = target.querySelectorAll(".training-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("show");
              }, index * 200); // 200ms delay between each
            });
          } else {
            target.classList.add("show");
          }
          obs.unobserve(entry.target); // trigger once
        }
      });
    },
    { threshold: thresholdValue }
  );

  sections.forEach((section) => observer.observe(section));
}

// Initialize observer
createObserver();

// Optional: Recreate observer on orientation change or resize
window.addEventListener("resize", () => {
  clearTimeout(window._resizeTimeout);
  window._resizeTimeout = setTimeout(() => {
    createObserver();
  }, 400);
});
