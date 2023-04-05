// Finally lets close the
// expression with
// supporting optional parts.
// Note: Top Level Domains
// (TLD) in the last part is the
// optional country code and

// its 2 characters only Email UC 5


const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\.[a-zA-Z]{2})?$/;

const email1 = 'example@email.com';
const email2 = 'example@email.co.uk';
const email3 = 'example@email';

console.log(emailRegex.test(email1)); // true
console.log(emailRegex.test(email2)); // true
console.log(emailRegex.test(email3)); // false