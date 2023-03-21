const checkbox = document.getElementById("checkbox");

// Load saved preference from local storage
const savedPreference = localStorage.getItem("dark-mode");
if (savedPreference === "true") {
  checkbox.checked = true;
  document.body.classList.add("dark");
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("dark-mode", "true"); // Save preference to local storage
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("dark-mode", "false"); // Save preference to local storage
  }
});