function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Make a POST request to the backend server for authentication
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid email or password');
      }
      return response.json();
    })
    .then(data => {
      // Successful login
      alert(`Welcome back, ${data.name}!`);
      // Optionally, you can redirect the user to another page or perform other actions here
    })
    .catch(error => {
      // Failed login
      alert(error.message);
    });
  }
  
  function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const admin="Admin";
  
    // Make a POST request to the backend server to create a new user
    fetch('http://localhost:8080/auth/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, admin }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Email already registered');
      }
      return response.json();
    })
    .then(data => {
      // Successful signup
      alert('Signup successful! You can now login.');
      // Optionally, you can automatically switch to the login form after signup
      // toggleForms(); // Uncomment this line if you want to automatically switch to login after signup
    })
    .catch(error => {
      // Failed signup
      alert(error.message);
    });
  }
  
  // Optional: Toggle between login and signup forms
  function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
  
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
  }
  