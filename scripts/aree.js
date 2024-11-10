const items = ["Fumetto", "Videogame", "Cinema & Serie TV", "Gioco", "Asian", "Musica", "Cosplay", "Kids", "LARP-Neverland", "Pizzacon"];
const lista = document.querySelectorAll(".listaAree");
const tendina = document.getElementById("TendinaAree");
tendina.style.visibility = "hidden";
const aree = document.getElementById("Aree");

for (let i = 0; i < lista.length; i++) {
  lista[i].textContent = items[i];
}

aree.addEventListener("click", dropdownAree);

function dropdownAree(event) {
  if (tendina.style.visibility === "hidden") {
    tendina.style.visibility = "visible";
    tendina.style.opacity = "1"
  } else {
    tendina.style.visibility = "hidden";
    tendina.style.opacity = "0"
  }
}

window.addEventListener("click", function (event) {
  if (!event.target.matches("#Aree")) {
    tendina.style.visibility = "hidden";
    tendina.style.opacity = "0"
  }
});