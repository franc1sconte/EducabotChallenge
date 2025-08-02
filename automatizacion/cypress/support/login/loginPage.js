/// <reference types="cypress"/>

class loginPage {
    //--------------------------------------------------Buttons----------------------------------------------
    loginBtn() {
        return '.login-box [data-test="login-button"]'
    }
    
    //--------------------------------------------------Inputs-----------------------------------------------
    usernameInput() {
        return '.login-box [data-test = "username"]'
    }

    passInput() {
        return '.login-box [data-test = "password"]'
    }

    //--------------------------------------------------Asserts----------------------------------------------
    loginContainerAssert() {
        return '[data-test = login-container]'
    }

    errorLoginAssert() {
        return '.login-box [data-test="error"]'
    }
    
    //--------------------------------------------------Methods----------------------------------------------


}

export default new loginPage


