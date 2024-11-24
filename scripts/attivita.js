
const tendina2 = document.getElementById("TendinaAttivita");
tendina2.style.visibility = "hidden";
const attivita = document.getElementById("Attivita");



attivita.addEventListener("click",dropdownAttivita)

function dropdownAttivita() {
  if (tendina2.style.visibility === "hidden") {
    tendina2.style.visibility = "visible";
    tendina2.style.opacity = "1";
  } else {
    tendina2.style.visibility = "hidden";
    tendina2.style.opacity = "0";
  }
}

window.addEventListener("click",function(event){
  if(!event.target.matches("#Attivita")){
    tendina2.style.visibility = "hidden";
    tendina2.style.opacity = "0";
  }
});