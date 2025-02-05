document.getElementById("showMessage").addEventListener("click", function() {
    document.getElementById("message").textContent = "Merci d'avoir visité ma page !";
});

// Animation d’apparition au scroll
const sections = document.querySelectorAll('.fade-in');

const showElementsOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
};

window.addEventListener('scroll', showElementsOnScroll);
showElementsOnScroll();  // Pour afficher les sections visibl

 