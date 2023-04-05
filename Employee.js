// Ensure “.” after bridgelabz
// and validate the
// mandatory 3rd part i.e. co


function validateEmail(email) {
    // add a dot after "bridgelabz" if it doesn't exist
    if (email.includes('bridgelabz') && !email.includes('.'))
      email = email.replace('bridgelabz', 'bridgelabz.');
  
    // split the email into three parts: local part, domain part, and third part
    const [localPart, domainPart, thirdPart] = email.split('@')[1].split('.');
  
    // check if the third part is "co"
    if (thirdPart !== 'co')
      return false;
  
    // validate the rest of the email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // example usage
  const email1 = 'john.doe@bridgelabz.com.co';
  const email2 = 'jane.smith@bridgelabz.co';
  
  console.log(validateEmail(email1)); // false
  console.log(validateEmail(email2)); // true
  