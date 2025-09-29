document.addEventListener("DOMContentLoaded", () => {
    const quentinCard = document.getElementById("quentin");

    // Création de l'overlay pour le GIF
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";
    overlay.style.cursor = "pointer";
    overlay.style.display = "none"; // masqué par défaut

    // Image GIF
    const gif = document.createElement("img");
    gif.src = "photo/quentin.gif";
    gif.style.maxWidth = "80%";
    gif.style.maxHeight = "80%";
    gif.style.borderRadius = "12px";
    gif.style.boxShadow = "0 6px 20px rgba(0,0,0,0.5)";

    overlay.appendChild(gif);
    document.body.appendChild(overlay);

    // Affichage au clic sur la section Quentin
    quentinCard.addEventListener("click", () => {
        overlay.style.display = "flex";
    });

    // Clic sur overlay pour fermer
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});
