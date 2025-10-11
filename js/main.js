document.addEventListener("DOMContentLoaded", function () {
  // Afegeix l'esdeveniment de clic per ressaltar l'element seleccionat
  const allListItems = document.querySelectorAll("li");

  allListItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // No interferir amb els clics reals als enllaços
      if (e.target.tagName === "A") return;

      // Alterna la classe 'active'
      const wasActive = this.classList.contains("active");

      // Elimina la classe activa de tots els elements
      allListItems.forEach((li) => li.classList.remove("active"));

      // Afegeix la classe activa a l'element actual si no estava activa
      if (!wasActive) {
        this.classList.add("active");
      }
    });
  });

  // Afegeix funcionalitat de cerca (es pot ampliar)
  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.placeholder = "Cerca a l'arxiu...";
  searchBox.className = "search-box";

  document.querySelector(".search-container").appendChild(searchBox);
  searchBox.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();

    // Cerca a les pàgines
    document.querySelectorAll("#pages-list li").forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm) ? "block" : "none";
    });

    // Cerca als vídeos
    document.querySelectorAll("#videos-list li").forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm) ? "block" : "none";
    });
  });

  // Afegeix estils per la caixa de cerca i els elements actius
  const style = document.createElement("style");
  style.textContent = `
        .search-box {
            margin: 10px 20px;
            padding: 8px;
            width: calc(100% - 40px);
            border: none;
            border-radius: 4px;
        }
        
        li.active {
            background-color: #f0f8ff;
            border-left-color: #0066cc;
            transform: translateX(10px);
        }
    `;

  document.head.appendChild(style);
});
