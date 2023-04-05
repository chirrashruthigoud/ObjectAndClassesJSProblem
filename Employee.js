/*The Postal Index Number
(PIN) or PIN Code is a 6
digit code of Post Office
numbering used
by India Post.
Create a regex pattern to
validate PIN code 258963 PIN Code UC 1*/


const pinCode = "369852";
const pattern = /^(\d{6})$/;

if (pattern.test(pinCode)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}
