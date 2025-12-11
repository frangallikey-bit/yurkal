// Scroll suave al hacer clic en los links
document.addEventListener("DOMContentLoaded", () => {
  
  const btnHistoria = document.querySelector("#btn-historia");
  const btnConcepto = document.querySelector("#btn-concepto");
  const seccionHistoria = document.querySelector("#historia");
  const seccionConcepto = document.querySelector("#concepto");

  if (btnHistoria && seccionHistoria) {
    btnHistoria.addEventListener("click", () => {
      seccionHistoria.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (btnConcepto && seccionConcepto) {
    btnConcepto.addEventListener("click", () => {
      seccionConcepto.scrollIntoView({ behavior: "smooth" });
    });
  }
});
