// Funktion zum Scrollen zu einem Element
function scrollToElement(elementSelector, instance = 0) {
  // Elemente auswählen, die dem angegebenen Selektor entsprechen
  const elements = document.querySelectorAll(elementSelector);
  // Überprüfen, ob Elemente existieren und das angeforderte Element existiert
  if (elements.length > instance) {
    // Zum angegebenen Element scrollen
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

// Event Listener für die Links hinzufügen
document.addEventListener("DOMContentLoaded", function () {
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  link1.addEventListener("click", (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    scrollToElement(".header");
  });

  link2.addEventListener("click", (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    scrollToElement(".header", 1);
  });

  link3.addEventListener("click", (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    scrollToElement(".column");
  });
});
