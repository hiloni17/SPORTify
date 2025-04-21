import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

// Initialize Firebase services
const auth = getAuth();
const db = getFirestore();

// DOM Elements
const profileLink = document.getElementById('profileLink');
const mobileProfileLink = document.getElementById('mobileProfileLink');
const profileIcon = document.getElementById('profileIcon');

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        updateProfileLinks(user.uid);
    } else {
        // User is signed out
        setLoginLinks();
    }
});

// Update profile links when user is logged in
async function updateProfileLinks(userId) {
    try {
        // Get user data from Firestore
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            
            // Update desktop profile link
            profileLink.href = 'profile.html';
            profileIcon.innerHTML = `
                <a href="profile.html" id="profileLink">
                    <i class="fas fa-user-circle"></i>
                </a>
            `;
            
            // Update mobile profile link
            mobileProfileLink.href = 'profile.html';
            mobileProfileLink.innerHTML = `
                <i class="fas fa-user-circle"></i> Profile
            `;
            
            // Add user name as tooltip if available
            if (userData.name) {
                profileIcon.title = userData.name;
            }
        } else {
            // Fallback if user document doesn't exist
            setProfileLinks();
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        setProfileLinks();
    }
}

// Set links to profile page
function setProfileLinks() {
    profileLink.href = 'profile.html';
    mobileProfileLink.href = 'profile.html';
    mobileProfileLink.innerHTML = `
        <i class="fas fa-user-circle"></i> Profile
    `;
}

// Set links to login page
function setLoginLinks() {
    profileLink.href = 'login.html';
    mobileProfileLink.href = 'login.html';
    mobileProfileLink.innerHTML = `
        <i class="fas fa-user-circle"></i> Log in
    `;
} 