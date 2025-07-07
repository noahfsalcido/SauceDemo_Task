class LoginComponent {
    
        get inputUsername () {
            return $('#user-name');
        }
    
        get inputPassword () {
            return $('#password');
        }
    
        get btnSubmit () {
            return $('[data-test="login-button"]');
        }
}

module.exports = new LoginComponent();