// Bild-Overlay für Galerie
window.addEventListener('DOMContentLoaded', function() {
  const galerieBilder = document.querySelectorAll('.bilder-galerie img, .figuren-galerie img');
  galerieBilder.forEach(function(img) {
    img.addEventListener('click', function() {
      openImageOverlay(img.src, img.alt);
    });
  });
});

function openImageOverlay(src, alt) {
  // Overlay-Element erzeugen
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  overlay.innerHTML = `
    <div class="image-overlay-content">
      <button class="image-overlay-close" aria-label="Schließen">&times;</button>
      <img src="${src}" alt="${alt}">
    </div>
  `;
  document.body.appendChild(overlay);

  // Schließen-Button
  overlay.querySelector('.image-overlay-close').onclick = function() {
    overlay.remove();
  };
  // Schließen bei Klick auf Overlay-Hintergrund
  overlay.onclick = function(e) {
    if (e.target === overlay) overlay.remove();
  };
  // Schließen mit ESC
  document.addEventListener('keydown', function escListener(ev) {
    if (ev.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', escListener);
    }
  });
}
