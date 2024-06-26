const navDialog = document.getElementById("nav-dialog");

function handleMenu() {
  navDialog.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navDialog = document.getElementById("nav-dialog");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navDialog.classList.add("hidden");
    });
  });
});

function handleMenu() {
  const navDialog = document.getElementById("nav-dialog");
  navDialog.classList.toggle("hidden");
}
