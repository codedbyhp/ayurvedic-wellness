const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

function showSection(id) {
  sections.forEach(section => section.classList.remove("visible"));
  const target = document.getElementById(id);
  if (target) target.classList.add("visible");
  links.forEach(link => link.classList.toggle("active", link.dataset.section === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

document.querySelectorAll(".explore-btn").forEach(btn => {
  btn.addEventListener("click", () => showSection(btn.dataset.target || "remedies"));
});

document.addEventListener("DOMContentLoaded", () => showSection("home"));

function handleScrollForAbout() {
  const about = document.getElementById("about");
  if (!about) return;
  const rect = about.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
    about.classList.add("visible");
  }
}
window.addEventListener("scroll", handleScrollForAbout);

function handleContact(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully. (Demo only)");
  e.target.reset();
}
