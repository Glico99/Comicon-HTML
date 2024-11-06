const items1 = ["Mostre","Festival","Editoria","Agenzia artisti"];
const lista2 = document.querySelectorAll(".listaAttività");
const tendina2 = document.getElementById("TendinaAttività");

for (let i = 0; i < lista2.length; i++) {
  lista2[i].textContent = items1[i];
}

function dropdownAttività() {
  if (tendina2.style.visibility === "hidden") {
    tendina2.style.visibility = "visible";
  } else {
    tendina2.style.visibility = "hidden";
  }
}