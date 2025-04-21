// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdptGpBYx-d3tWkRV-a2KiATkIiqQkRBc",
  authDomain: "sportify-51e09.firebaseapp.com",
  projectId: "sportify-51e09",
  storageBucket: "sportify-51e09.firebasestorage.app",
  messagingSenderId: "241860870452",
  appId: "1:241860870452:web:c873fd5678744db9f46561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function showmsg(message, divId, isError = true) {
  var div = document.getElementById(divId);
  div.style.display = "block";
  div.innerHTML = message;
  
  // Set color based on error or success
  if (isError) {
    div.style.backgroundColor = "#ffebee"; // Light red for errors
    div.style.color = "#c62828"; // Dark red text
  } else {
    div.style.backgroundColor = "#e8f5e9"; // Light green for success
    div.style.color = "#2e7d32"; // Dark green text
  }
  
  div.style.opacity = 1;
  setTimeout(function(){
    div.style.opacity = 0;
  }, 5000);
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation function
function isValidPassword(password) {
  // At least 6 characters
  return password.length >= 6;
}

const signIn = document.getElementById('signinbtn');
signIn.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('lemail').value.trim();
  const password = document.getElementById('lpassword').value;
  
  // Clear previous messages
  document.getElementById('signinmsg').style.display = "none";
  
  // Validate email
  if (!email) {
    showmsg('Please enter your email address', 'signinmsg');
    return;
  }
  
  if (!isValidEmail(email)) {
    showmsg('Please enter a valid email address', 'signinmsg');
    return;
  }
  
  // Validate password
  if (!password) {
    showmsg('Please enter your password', 'signinmsg');
    return;
  }
  
  if (!isValidPassword(password)) {
    showmsg('Password must be at least 6 characters long', 'signinmsg');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem('user', JSON.stringify({uid:user.uid, email:user.email}));
    showmsg('Login successful! Redirecting...', 'signinmsg', false);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode == 'auth/user-not-found'){
      showmsg('User not found. Please check your email or sign up', 'signinmsg');
    }
    else if(errorCode == 'auth/wrong-password'){
      showmsg('Incorrect password. Please try again', 'signinmsg');
    }
    else if(errorCode == 'auth/invalid-email'){
      showmsg('Invalid email format', 'signinmsg');
    }
    else if(errorCode == 'auth/too-many-requests'){
      showmsg('Too many failed login attempts. Please try again later', 'signinmsg');
    }
    else if(errorCode == 'auth/invalid-credential'){
      showmsg('Invalid email or password. Please check your credentials and try again', 'signinmsg');
    }
    else if(errorCode == 'auth/user-disabled'){
      showmsg('This account has been disabled. Please contact support for assistance', 'signinmsg');
    }
    else {
      showmsg('Login failed: ' + error.message, 'signinmsg');
    }
  });
});

//reset password
const reset = document.getElementById('reset');
reset.addEventListener('click', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('lemail').value.trim();
  
  // Validate email
  if (!email) {
    showmsg('Please enter your email address to reset password', 'signinmsg');
    return;
  }
  
  if (!isValidEmail(email)) {
    showmsg('Please enter a valid email address', 'signinmsg');
    return;
  }
  
  sendPasswordResetEmail(auth, email)
  .then(() => {
    showmsg('Password reset link sent to your email', 'signinmsg', false);
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode == 'auth/user-not-found'){
      showmsg('No account found with this email address', 'signinmsg');
    }
    else if(errorCode == 'auth/invalid-email'){
      showmsg('Invalid email format', 'signinmsg');
    }
    else {
      showmsg('Error: ' + error.message, 'signinmsg');
    }
  });
});