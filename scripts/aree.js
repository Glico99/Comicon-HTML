const items = ["Fumetto", "Videogame", "Cinema & Serie TV", "Gioco", "Asian", "Musica", "Cosplay", "Kids", "LARP-Neverland", "Pizzacon"];
const lista = document.querySelectorAll(".listaAree");

const items2 = ["Mostre", "Festival", "Editoria", "Agenzia artisti"];
const lista2 = document.querySelectorAll(".listaAttivita");

const tendina = document.querySelectorAll(".tendine");
tendina.style.display = "none";
const aree = document.getElementById("Aree");

for (let i = 0; i < lista.length; i++) {
  lista[i].textContent = items[i];
}

for (let i = 0; i < lista2.length; i++) {
  lista2[i].textContent = items1[i];
}

aree.addEventListener("click", dropdownAree);

function dropdownAree(event) {
  if (tendina.style.display === "none") {
    tendina.style.display = "block"
    tendina.style.opacity = "1"
  } else {
    tendina.style.display = "none";
    tendina.style.opacity = "0"
  }
}

window.addEventListener("click", function (event) {
  if (!event.target.matches("#Aree")) {
    tendina.style.display = "none";
    tendina.style.opacity = "0"
  }
});