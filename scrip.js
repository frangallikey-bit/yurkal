function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 60) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});
