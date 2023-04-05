// Make sure 400 088 is also
// valid along with 400088



function validatePIN(pin) {
    // Remove any whitespace from the input
    pin = pin.replace(/\s/g, '');
  
    // Check that the input is six digits long
    if (/^\d{6}$/.test(pin)) {
      return true;
    }
  
    return false;
  }
  
  // Example usage:
  console.log(validatePIN('400 088')); // true
  console.log(validatePIN('400088')); // true
  console.log(validatePIN('123456')); // true
  console.log(validatePIN('12345')); // false
  console.log(validatePIN('1234567')); // false
  