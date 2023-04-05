/*Validate Email address with a
regex. The email consists of
minimum 3 and optional 2 more
parts with mandatory @ and .
abc.xyz@bridgelabz.co.in
Here abc, bridgelabz and co are
mandatory and the remaining 2
are optional
To begin with lets validate the
mandatory part and start with abc

Email UC 1*/



const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const email = 'abc.xyz@bridgelabz.co.in';

if (emailRegex.test(email)) {
  console.log('Email address is valid!');
} else {
  console.log('Email address is invalid.');
}