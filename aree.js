const items = ["Fumetto", "Videogame", "Cinema & Serie TV", "Gioco", "Asian", "Musica", "Cosplay", "Kids", "LARP-Neverland", "Pizzacon"];
const lista = document.querySelectorAll(".listaAree");
const tendina = document.getElementById("TendinaAree");

for (let i = 0; i < lista.length; i++) {
  lista[i].textContent = items[i];
}

function dropdownAree() {
  if (tendina.style.visibility === "hidden") {
    tendina.style.visibility = "visible";
  }else{
    tendina.style.visibility = "hidden";
  }
}