import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-storage.js";

// Initialize Firebase services
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// Message display function
function showmsg(message, divId, isError = true) {
    var div = document.getElementById(divId);
    div.style.display = "block";
    div.innerHTML = `
        <i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        ${message}
    `;
    
    // Set styles based on message type
    if (isError) {
        div.style.backgroundColor = "#ffebee"; // Light red for errors
        div.style.color = "#c62828"; // Dark red text
        div.style.borderLeft = "4px solid #c62828";
    } else {
        div.style.backgroundColor = "#e8f5e9"; // Light green for success
        div.style.color = "#2e7d32"; // Dark green text
        div.style.borderLeft = "4px solid #2e7d32";
    }
    
    // Add fixed positioning and animation
    div.style.position = "fixed";
    div.style.top = "20px";
    div.style.right = "20px";
    div.style.padding = "15px 25px";
    div.style.borderRadius = "8px";
    div.style.fontWeight = "500";
    div.style.zIndex = "1000";
    div.style.maxWidth = "350px";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "10px";
    div.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    div.style.animation = "slideIn 0.3s ease-out";
    
    div.style.opacity = 1;
    setTimeout(function(){
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = "none";
        }, 300);
    }, 5000);
}

// DOM Elements
const userNameElement = document.getElementById('userName');
const userTitleElement = document.getElementById('userTitle');
const aboutContentElement = document.getElementById('aboutContent');
const interestsGridElement = document.getElementById('interestsGrid');
const profilePictureElement = document.getElementById('profilePicture');
const coverPhotoElement = document.getElementById('coverPhoto');

// Edit buttons
const editAboutBtn = document.getElementById('editAboutBtn');
const editInterestsBtn = document.getElementById('editInterestsBtn');
const editAvatarBtn = document.getElementById('editAvatarBtn');
const editCoverBtn = document.getElementById('editCoverBtn');

// Clear user data function
function clearUserData() {
    // Save profile picture URL before clearing
    const profilePicture = sessionStorage.getItem('profilePicture');
    sessionStorage.clear();
    localStorage.removeItem('user');
    // Restore profile picture URL
    if (profilePicture) {
        sessionStorage.setItem('profilePicture', profilePicture);
    }
}

// Logout function
async function logout() {
    try {
        await signOut(auth);
        clearUserData();
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error signing out:', error);
    }
}

// Add logout button with icon
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.createElement('button');
    logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
    logoutBtn.className = 'logout-btn';
    logoutBtn.onclick = logout;
    document.querySelector('.nav-right').appendChild(logoutBtn);
});

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Save profile picture URL before clearing
        const profilePicture = sessionStorage.getItem('profilePicture');
        // Clear session storage except profile picture
        const tempStorage = {};
        if (profilePicture) {
            tempStorage.profilePicture = profilePicture;
        }
        sessionStorage.clear();
        // Restore profile picture if it existed
        if (tempStorage.profilePicture) {
            sessionStorage.setItem('profilePicture', tempStorage.profilePicture);
        }
        loadUserProfile(user.uid);
    } else {
        window.location.href = 'login.html';
    }
});

// Load user profile data
async function loadUserProfile(userId) {
    try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            
            // Update profile information
            userNameElement.textContent = userData.name || 'User';
            userTitleElement.textContent = userData.title || 'Sports Enthusiast';
            aboutContentElement.querySelector('p').textContent = userData.about || 'No bio available';
            
            // Check if profile picture exists in session storage first
            let profilePic = sessionStorage.getItem('profilePicture');
            if (!profilePic) {
                // If not in session storage, get from database
                profilePic = userData.profilePicture || "img/default-avatar.jpg";
                // Store in session storage
                sessionStorage.setItem('profilePicture', profilePic);
            }
            
            // Set profile picture
            profilePictureElement.src = profilePic;
            
            // Load cover photo directly from database
            coverPhotoElement.src = userData.coverPhoto || "img/default-cover.jpg";
            
            // Load interests
            if (userData.interests && userData.interests.length > 0) {
                interestsGridElement.innerHTML = userData.interests
                    .map(interest => `<div class="interest-tag">${interest}</div>`)
                    .join('');
            } else {
                interestsGridElement.innerHTML = '<p>No interests added yet</p>';
            }
            
            // Load activity feed
            loadActivityFeed(userId);
        } else {
            console.log("No such user!");
        }
    } catch (error) {
        console.error("Error loading profile:", error);
    }
}

// Load activity feed
async function loadActivityFeed(userId) {
    try {
        const activitiesDoc = await getDoc(doc(db, "users", userId, "activities", "recent"));
        if (activitiesDoc.exists()) {
            const activities = activitiesDoc.data().items || [];
            activityFeedElement.innerHTML = activities
                .map(activity => `
                    <div class="activity-item">
                        <i class="fas ${getActivityIcon(activity.type)}"></i>
                        <div class="activity-content">
                            <p>${activity.description}</p>
                            <span class="activity-time">${formatTime(activity.timestamp)}</span>
                        </div>
                    </div>
                `)
                .join('');
        } else {
            activityFeedElement.innerHTML = '<p>No recent activity</p>';
        }
    } catch (error) {
        console.error("Error loading activity feed:", error);
        activityFeedElement.innerHTML = '<p>Error loading activity feed</p>';
    }
}

// Helper function to get activity icon
function getActivityIcon(type) {
    const icons = {
        'like': 'fa-heart',
        'comment': 'fa-comment',
        'share': 'fa-share',
        'follow': 'fa-user-plus',
        'default': 'fa-circle'
    };
    return icons[type] || icons.default;
}

// Helper function to format time
function formatTime(timestamp) {
    const date = timestamp.toDate();
    const now = new Date();
    const diff = now - date;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
}

// Handle profile picture upload with success animation
editAvatarBtn.addEventListener('click', async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const reader = new FileReader();
                reader.onload = async function(event) {
                    const base64String = event.target.result;
                    const user = auth.currentUser;
                    
                    if (user) {
                        // Update UI immediately
                        profilePictureElement.src = base64String;
                        
                        // Store in session storage
                        sessionStorage.setItem('profilePicture', base64String);
                        
                        // Add success animation
                        profilePictureElement.parentElement.classList.add('updated');
                        setTimeout(() => {
                            profilePictureElement.parentElement.classList.remove('updated');
                        }, 1000);
                        
                        // Save to Firebase database
                        await updateDoc(doc(db, "users", user.uid), {
                            profilePicture: base64String
                        });
                        showmsg('Profile picture updated successfully! 🎉', 'profileMessage', false);
                    }
                };
                reader.readAsDataURL(file);
            } catch (error) {
                console.error("Error uploading profile picture:", error);
                showmsg(`Error uploading profile picture: ${error.message}`, 'profileMessage', true);
            }
        }
    };
    
    input.click();
});

// Handle cover photo upload with success animation
editCoverBtn.addEventListener('click', async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const reader = new FileReader();
                reader.onload = async function(event) {
                    const base64String = event.target.result;
                    const user = auth.currentUser;
                    
                    if (user) {
                        // Update UI immediately with fade effect
                        coverPhotoElement.style.opacity = '0';
                        setTimeout(() => {
                            coverPhotoElement.src = base64String;
                            coverPhotoElement.style.opacity = '1';
                        }, 300);
                        
                        // Save to Firebase database
                        await updateDoc(doc(db, "users", user.uid), {
                            coverPhoto: base64String
                        });
                        showmsg('Cover photo updated successfully! ✨', 'profileMessage', false);
                    }
                };
                reader.readAsDataURL(file);
            } catch (error) {
                console.error("Error uploading cover photo:", error);
                showmsg(`Error uploading cover photo: ${error.message}`, 'profileMessage', true);
            }
        }
    };
    
    input.click();
});

// Handle about section edit
editAboutBtn.addEventListener('click', () => {
    const currentAbout = aboutContentElement.querySelector('p').textContent;
    const textarea = document.createElement('textarea');
    textarea.value = currentAbout;
    textarea.className = 'about-edit';
    
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';
    
    aboutContentElement.innerHTML = '';
    aboutContentElement.appendChild(textarea);
    aboutContentElement.appendChild(saveBtn);
    
    saveBtn.addEventListener('click', async () => {
        const newAbout = textarea.value;
        try {
            const user = auth.currentUser;
            await updateDoc(doc(db, "users", user.uid), {
                about: newAbout
            });
            
            aboutContentElement.innerHTML = `<p>${newAbout}</p>`;
        } catch (error) {
            console.error("Error updating about section:", error);
        }
    });
});

// Handle interests edit
editInterestsBtn.addEventListener('click', () => {
    const currentInterests = Array.from(interestsGridElement.querySelectorAll('.interest-tag'))
        .map(tag => tag.textContent);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add interests (comma-separated)';
    input.value = currentInterests.join(', ');
    input.className = 'interests-edit';
    
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';
    
    interestsGridElement.innerHTML = '';
    interestsGridElement.appendChild(input);
    interestsGridElement.appendChild(saveBtn);
    
    saveBtn.addEventListener('click', async () => {
        const newInterests = input.value
            .split(',')
            .map(interest => interest.trim())
            .filter(interest => interest.length > 0);
        
        try {
            const user = auth.currentUser;
            await updateDoc(doc(db, "users", user.uid), {
                interests: newInterests
            });
            
            interestsGridElement.innerHTML = newInterests
                .map(interest => `<div class="interest-tag">${interest}</div>`)
                .join('');
        } catch (error) {
            console.error("Error updating interests:", error);
        }
    });
}); 