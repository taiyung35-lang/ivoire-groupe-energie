
const devisForm = document.getElementById("devisForm");

if (devisForm) {
    devisForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const telephone = document.getElementById("telephone").value;
        const besoin = document.getElementById("besoin").value;
        const puissance = document.getElementById("puissance").value;
        const message = document.getElementById("message").value;

        const texte = `
Bonjour Ivoire Groupe Énergie,

Je souhaite obtenir un devis.

Nom : ${nom}
Téléphone : ${telephone}
Besoin : ${besoin}
Puissance : ${puissance || "Non précisée"}

Message : ${message}
        `;

        const url = "https://wa.me/2250703000234?text=" + encodeURIComponent(texte);

        window.open(url, "_blank");
    });
}
