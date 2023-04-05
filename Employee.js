// Ensure @ and validate the
// mandatory 2nd part i.e.
// bridgelabz

// Email UC 2


const emailRegex = /^([a-zA-Z0-9._%+-])+@(bridgelabz\.)+([a-zA-Z]{2,})$/;

const email = 'abc.xyz@bridgelabz.co.in';

if (emailRegex.test(email)) {
  console.log('Email address is valid!');
} else {
  console.log('Email address is invalid.');
}