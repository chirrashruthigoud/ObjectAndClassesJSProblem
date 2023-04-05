// Restrict the PIN code from
// taking alphabets or special
// characters at the End.
// Check for 147852B – this
// should fail


function validatePin(pin) {
    const regex = /^\d{6}(?![A-Za-z!@#$%^&*()_+])$/;
    return regex.test(pin);
  }
  
  const pinToValidate = "147852B";
  if (validatePin(pinToValidate)) {
    console.log(`${pinToValidate} is valid.`);
  } else {
    console.log(`${pinToValidate} is invalid.`);
  }
  