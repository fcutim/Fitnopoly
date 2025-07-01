function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Optional: Menü automatisch schließen, wenn ein Link geklickt wird (für bessere UX auf Mobilgeräten)
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById("nav-links").classList.remove("show");
    });
  });
});
