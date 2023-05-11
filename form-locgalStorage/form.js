function validateForm() {
  // Get form inputs
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var phone = document.getElementById("phoneNumber");
  var message = document.getElementById("message");

  // Validate first name
  if (firstName.value == "") {
    alert("Please enter your first name.");
    firstName.focus();
    return false;
  }

  // Validate last name
  if (lastName.value == "") {
    alert("Please enter your last name.");
    lastName.focus();
    return false;
  }

  // Validate email
  if (email.value == "") {
    alert("Please enter your email.");
    email.focus();
    return false;
  } else {
    // Check email format
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid email.");
      email.focus();
      return false;
    }
  }

  // Validate phone number
  if (phone.value == "") {
    alert("Please enter your phone number.");
    phone.focus();
    return false;
  } else {
    // Check phone number format
    var phoneRegex = /\d{1,3} \d{3} \d{2} \d{2}$/;
    if (!phoneRegex.test(phone.value)) {
      alert("Please enter a valid phone number (e.g. +123 456 78 90).");
      phone.focus();
      return false;
    }
  }

  // Validate message
  if (message.value == "") {
    alert("Please enter a message.");
    message.focus();
    return false;
  }

  // If all inputs are valid, return true
  return getData();
}

// Add form submit event listener
// Get form element
var myForm = document.getElementById("myForm");

// Add form submit event listener
myForm.addEventListener("submit", function (event) {
  // Prevent form submission if inputs are invalid
  if (!validateForm()) {
    event.preventDefault();
  }
});


// get data from user
function getData() {
  const form = document.querySelector('#myForm');

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phoneNumber').value;
    const message = document.querySelector('#message').value;

    const userData = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    window.location.href = 'form2.html';
}
