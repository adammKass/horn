const sections = document.querySelectorAll(
  "#hero-banner, #equipment, #training, #pricing, #instructors, #instructors-gallery, #instructors-about, #reviews, #gallery, #contact"
);

function getThreshold() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isSmallLandscape = window.matchMedia(
    "(max-width: 900px) and (orientation: landscape)"
  ).matches;

  // Adjust thresholds for different situations
  if (isSmallLandscape) return 0.1; // very low — trigger early in landscape
  if (isMobile) return 0.2; // mobile portrait
  return 0.6; // desktop / large screens
}

function createObserver() {
  const thresholdValue = getThreshold();

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
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
