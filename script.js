const btn = document.getElementById("dark-mode-btn");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  btn.innerHTML = "Light Mode";
  body.classList.add("dark-mode");
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btn.innerHTML = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerHTML = "Dark Mode";
    localStorage.removeItem("theme");
  }
});
