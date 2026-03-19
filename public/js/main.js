// 1. On sélectionne les éléments HTML dont on a besoin
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// 2. On ajoute un "écouteur d'événement" sur le clic du burger
hamburger.addEventListener("click", () => {
    // La méthode "toggle" ajoute la classe si elle n'y est pas, et l'enlève si elle y est
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// 3. (Optionnel mais pratique) Fermer le menu si on clique sur un lien
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});