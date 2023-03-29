document.getElementById("ele2").addEventListener("click", function () {
    if (this.src.includes("Wooper1")){
      this.src = "img/Wooper2.jpeg";
    } else {
      this.src = "img/Wooper1.jpeg";
    }
  });