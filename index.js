// get the navbar element
const navbar = document.querySelector('nav');

// listen for scroll events
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPosition = window.scrollY;

  // set the background color of the navbar based on the scroll position
  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// form validation

function validateForm() {
  // Get form inputs
  var firstName = document.getElementById("inputFirstName");
  var lastName = document.getElementById("inputLastName");
  var email = document.getElementById("inputMail");
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
  alert("Thank you for your submission!");  
  return true;
}

// Add form submit event listener
// Get form element
var myForm = document.getElementById("myForm");

// Add form submit event listener
myForm.addEventListener("submit", function(event) {
  // Prevent form submission if inputs are invalid
  if (!validateForm()) {
    event.preventDefault();
  }
});

