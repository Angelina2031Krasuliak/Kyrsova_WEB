document.getElementById("fakeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const button = document.getElementById("submitButton");
  button.textContent = "Повідомлення надіслане!";
  button.disabled = true;

  this.reset();

  setTimeout(() => {
    button.textContent = "Надіслати";
    button.disabled = false;
  }, 3000);
});
