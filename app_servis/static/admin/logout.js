function logout() {
    // Set the cookie
    document.cookie = 'token=;SameSite=Lax';

    // Redirect to the login page
    window.location.href = 'login.html';
}