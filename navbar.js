const nav = document.getElementById("NavBar")

window.addEventListener("scroll", function(){
  if (this.scrollY > 200) {
    nav.style.blockSize = "70px";
    nav.style.backgroundColor = "var(--blu-scuro)"
  }else{
    nav.style.blockSize = "100px";
    nav.style.backgroundColor = "transparent"
  }
});