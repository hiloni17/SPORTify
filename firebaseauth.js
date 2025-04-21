// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
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

//SignUp Form
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

// Name validation function
function isValidName(name) {
  // Name should be at least 2 characters and contain only letters, spaces, and hyphens
  const nameRegex = /^[a-zA-Z\s-]{2,}$/;
  return nameRegex.test(name);
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation function
function isValidPassword(password) {
  // At least 6 characters, with at least one letter and one number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

const signUp = document.getElementById('signupbtn');
signUp.addEventListener('click', (event) => {
  event.preventDefault();
  
  // Clear previous messages
  document.getElementById('signupmsg').style.display = "none";
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value.trim();
  
  // Validate name
  if (!name) {
    showmsg('Please enter your full name', 'signupmsg');
    return;
  }
  
  if (!isValidName(name)) {
    showmsg('Please enter a valid name (at least 2 characters, letters only)', 'signupmsg');
    return;
  }
  
  // Validate email
  if (!email) {
    showmsg('Please enter your email address', 'signupmsg');
    return;
  }
  
  if (!isValidEmail(email)) {
    showmsg('Please enter a valid email address', 'signupmsg');
    return;
  }
  
  // Validate password
  if (!password) {
    showmsg('Please enter a password', 'signupmsg');
    return;
  }
  
  if (!isValidPassword(password)) {
    showmsg('Password must be at least 8 characters long with at least one letter and one number', 'signupmsg');
    return;
  }

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // Default profile and cover photo URLs
    const defaultProfilePic = "img/default-avatar.jpg";
    const defaultCoverPhoto = "img/default-cover.jpg";
    
    const userData = {
      email: email,
      name: name,
      title: "Sports Enthusiast",
      about: "No bio available",
      interests: [],
      profilePicture: defaultProfilePic,
      coverPhoto: defaultCoverPhoto,
      createdAt: new Date()
    };
    
    showmsg('Account created successfully! Redirecting to login...', 'signupmsg', false);
    
    const docRef = doc(db, "users", user.uid);
    setDoc(docRef, userData)
    .then(() => {
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      showmsg('Error saving user data: ' + error.message, 'signupmsg');
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode == 'auth/email-already-in-use'){
      showmsg('Email address already in use. Please use a different email or login', 'signupmsg');
    }
    else if(errorCode == 'auth/invalid-email'){
      showmsg('Invalid email format', 'signupmsg');
    }
    else if(errorCode == 'auth/operation-not-allowed'){
      showmsg('Email/password accounts are not enabled. Please contact support', 'signupmsg');
    }
    else if(errorCode == 'auth/weak-password'){
      showmsg('Password is too weak. Please use a stronger password', 'signupmsg');
    }
    else if(errorCode == 'auth/invalid-credential'){
      showmsg('Invalid credentials. Please check your information and try again', 'signupmsg');
    }
    else if(errorCode == 'auth/account-exists-with-different-credential'){
      showmsg('An account already exists with this email using a different sign-in method', 'signupmsg');
    }
    else {
      showmsg('Error creating account: ' + error.message, 'signupmsg');
    }
  });
});

