import signupPage from "../objectPages/signupPage";

describe('Sign Up Test', () =>{
  it('TC1-SignUp-Pass', () => {
      cy.visit("signup")
      cy.fixture('signupUsers').then((data)=>{
          const ln = new signupPage();
          ln.inputEmail(data.email)
          ln.inputPassword(data.password)
          ln.inpuConfirmPassword(data.confirmpassword)
          //ln.clickSignup();
        })
      })

      it('TC2-SignUp-Fail', () => {
        cy.visit("signup")
        cy.fixture('signupUsers').then((data)=>{
            const ln = new signupPage();
            ln.inputEmail(data.email)
            ln.inputPassword(data.password)
            ln.inpuConfirmPassword(data.invalidconfirmpassword)
            ln.clickSignup();
          })
        })
    })

   