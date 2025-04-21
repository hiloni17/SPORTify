// Session management
class SessionManager {
    constructor() {
        this.isLoggedIn = false;
        this.checkSession();
    }

    checkSession() {
        const sessionData = sessionStorage.getItem('userSession');
        if (sessionData) {
            const userData = JSON.parse(sessionData);
            this.isLoggedIn = true;
            this.userData = userData;
            return true;
        }
        return false;
    }

    login(userData) {
        sessionStorage.setItem('userSession', JSON.stringify(userData));
        this.isLoggedIn = true;
        this.userData = userData;
        this.updateUI();
    }

    logout() {
        sessionStorage.removeItem('userSession');
        this.isLoggedIn = false;
        this.userData = null;
        window.location.href = 'index.html';
    }

    updateUI() {
        const loginBtns = document.querySelectorAll('.login-btn, .login-link');
        const profileLinks = document.querySelectorAll('.profile-link');

        if (this.isLoggedIn) {
            loginBtns.forEach(btn => {
                btn.innerHTML = '<b>Logout</b>';
                btn.onclick = () => this.logout();
            });
            profileLinks.forEach(link => {
                link.style.display = 'block';
            });
        } else {
            loginBtns.forEach(btn => {
                btn.innerHTML = '<b>Log in</b>';
                btn.onclick = () => window.location.href = 'login.html';
            });
            profileLinks.forEach(link => {
                link.style.display = 'none';
            });
        }
    }
}

const sessionManager = new SessionManager();

// Initialize UI on page load
document.addEventListener('DOMContentLoaded', () => {
    sessionManager.updateUI();
}); 