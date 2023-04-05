// Lets handle optional part
// i.e. xyz in
// abc.xyz@bridgelabz.co.in
// NOTE: make sure only
// following are valid special
// characters _,+,
// -,.
// proceeding to xyz Email UC 4


const email = 'abc.xyz@example.com'; // Replace with your email address

const match = email.match(/^([a-zA-Z0-9._+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/);
if (match) {
  const xyz = match[1].split('.').pop();
  console.log(xyz); // Outputs "xyz"
} else {
  console.log('Invalid email format');
}