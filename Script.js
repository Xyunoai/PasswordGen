function generatePassword() {
  const lengthInput = document.getElementById("length");
  const length = Math.min(parseInt(lengthInput.value) || 16, 150);

  const letters = document.getElementById("letters").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  let chars = "";
  if (letters) chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) chars += "0123456789";
  if (symbols) chars += "!@#$%^&*()_+-=[]{}<>?";

  if (!chars) {
    alert("Select at least one option");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("output").value = password;
}
