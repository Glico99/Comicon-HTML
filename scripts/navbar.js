const nav = document.getElementById("NavBar")
const logo = document.querySelector("#NavBar svg")

window.addEventListener("scroll", function(){
  if (this.scrollY > 200) {
    nav.style.blockSize = "90px";
    nav.style.backgroundColor = "var(--blu-scuro)";
    logo.style.blockSize = "40px";
  }else{
    nav.style.blockSize = "100px";
    nav.style.backgroundColor = "transparent";
    logo.style.blockSize = "70px";
  }
});