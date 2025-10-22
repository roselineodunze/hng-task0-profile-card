document.addEventListener("DOMContentLoaded", function () {
  const successMessage = document.querySelector(".success-message");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  const inputs = document.querySelectorAll("form input");
  const textarea = document.querySelector("form textarea");
  const form = document.querySelector("form");

  let showSuccessMessage = false;

  function validateEmail() {
    const email = document.getElementById("email").value;
    const regex =
      /^(?!.*\.\.)(?!\.)([a-zA-Z0-9._%+-]+)(?<!\.)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      emailError.style.display = "block";
      return false;
    }
    emailError.style.display = "none";
    return true;
  }

  function validateMessage(e) {
    const messageInput = document.getElementById("message");
    const messageValue = messageInput.value.trim();

    if (messageValue.length < 10) {
      e.preventDefault();
      messageError.style.display = "block";
      return false;
    }
    messageError.style.display = "none";
    return true;
  }

  function clearForm() {
    inputs.forEach((input) => (input.value = ""));
    textarea.value = "";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateEmail() && validateMessage(e)) {
        showSuccessMessage = true;
      } else {
        showSuccessMessage = false;
      }

      if (showSuccessMessage) {
        successMessage.style.display = "block";
        clearForm();
      }
    });
  }
});
