const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});
