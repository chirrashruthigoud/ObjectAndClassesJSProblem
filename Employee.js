/*Restrict the PIN code from
taking alphabets or special
characters at the
beginning.
Check for B258968 – this
should fail

PIN Code UC 2*/



const pinCode = "B258968";
const pattern = /^(?![^\d])(\d{6})$/;

if (pattern.test(pinCode)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}