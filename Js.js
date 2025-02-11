// Sélectionner le bouton par son ID
const button = document.getElementById('myButton');

// Sélectionner la zone où afficher le message
const messageElement = document.getElementById('message');

// Ajouter un événement de clic au bouton
button.addEventListener('click', function() {
    // Afficher un message dans le paragraphe
    messageElement.textContent = "Vous avez cliqué sur le bouton !";
});
