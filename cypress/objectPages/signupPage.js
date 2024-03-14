
class signupPage{
    // elements locator
    textEmail = '#email';
    textPassword = '#password';
    confirmPassword = '#confirmpassword';
    btnSignup = '#singup';
    
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
   
}

export default signupPage;
