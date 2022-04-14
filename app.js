let input = document.querySelector(".input-field input");
let icon = document.querySelector(".icon");
icon.addEventListener("click", function () {
  if (input.type == "password") {
    input.type = "text";
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
  }
});
