
class verifySignupPage{
    // elements locator
    textTitle = 'SIGN UP';
    textEmail = 'email';
    textPassword = 'password';
    confirmPassword = 'confirmpassword';
    verifyPassword = 'h1';
    btnSignup = '.singup';
    
    loginFail = '.alert';
   
    // function 
    inputEmail(email){
        cy.get(this.textEmail).type(email)
    }
    inputPassword(password){
        cy.get(this.textPassword).type(password)
    }
    inpuConfirmPassword(confirmpassword){
        cy.get(this.confirmPassword).type(confirmpassword)
    }
    clickSignup(){
        cy.get(this.btnSignup).click();
    }
    verify_at_east_twelve_characters(){
        cy.get(this.verifyPage).should('contain', 'Ace Toys Online Store')
     
    }
    verify_at_east_twelve_characters(){
        cy.get(this.verifyPage).should('contain', 'Ace Toys Online Store')
     
    }
    verify_at_east_twelve_characters(){
        cy.get(this.verifyPage).should('contain', 'Ace Toys Online Store')
     
    }
    verify_at_east_twelve_characters(){
        cy.get(this.verifyPage).should('contain', 'Ace Toys Online Store')
     
    }
    clickLogout(){
        cy.get(this.btnLogout).click()
    }
    loginFailAlert(){
        cy.get(this.loginFail).should('contain', 'Invalid credentials')
    }
}

export default verifySignupPage;
