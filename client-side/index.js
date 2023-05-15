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


  return true;
}


document.getElementById("submit-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm()) {
    document.getElementById('myForm').style.display = 'none';
    document.getElementById("thankYouMessage").style.display = "block";
    setTimeout(resetDiv, 2000);
  }
});

function resetDiv() {
  var divContent = document.getElementById("refresh");
  var initialContent = divContent.innerHTML;
  divContent.innerHTML = initialContent;
}

function CreateUser() {
  // post data
  fetch('http://localhost:3000/insert', {
    method: 'POST',
    body: JSON.stringify({
      first_name: document.getElementById('inputFirstName').value,
      last_name: document.getElementById('inputLastName').value,
      email: document.getElementById('inputMail').value,
      phone_number: document.getElementById('phoneNumber').value,
      message: document.getElementById('message').value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const form = document.getElementById('myForm');
      form.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}






