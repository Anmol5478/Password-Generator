// Password generation logic
function generatePassword(length = 12, options = {}) {
    const defaultOptions = {
      includeLowercase: true,
      includeUppercase: true,
      includeNumbers: true,
      includeSymbols: true,
    };
  
    const settings = { ...defaultOptions, ...options };
  
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
  
    let charPool = "";
    if (settings.includeLowercase) charPool += lowercaseChars;
    if (settings.includeUppercase) charPool += uppercaseChars;
    if (settings.includeNumbers) charPool += numberChars;
    if (settings.includeSymbols) charPool += symbolChars;
  
    if (!charPool) {
      throw new Error("At least one character type must be selected!");
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }
  
    return password;
  }
  
  // Event listeners and DOM manipulation
  document.getElementById("generate-btn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("password-length").value);
    const options = {
      includeLowercase: document.getElementById("include-lowercase").checked,
      includeUppercase: document.getElementById("include-uppercase").checked,
      includeNumbers: document.getElementById("include-numbers").checked,
      includeSymbols: document.getElementById("include-symbols").checked,
    };
  
    try {
      const password = generatePassword(length, options);
      document.getElementById("password-output").innerText = password;
    } catch (err) {
      alert(err.message);
    }
  });
  