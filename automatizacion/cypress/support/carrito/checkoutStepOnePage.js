/// <reference types="cypress"/>

class checkoutStepOnePage {
    //--------------------------------------------------Buttons----------------------------------------------

    continueBtn() {
        return '.checkout_buttons [data-test="continue"]'
    }

    //--------------------------------------------------Inputs-----------------------------------------------

    firstNameInput() {
        return '[data-test="checkout-info-container"] [data-test="firstName"]'
    }
    
    lastNameInput() {
        return '[data-test="checkout-info-container"] [data-test="lastName"]'
    }

    zipPostalCodeInput() {
        return '[data-test="checkout-info-container"] [data-test="postalCode"]'
    }
    
    //--------------------------------------------------Asserts----------------------------------------------

    
    //--------------------------------------------------Methods----------------------------------------------


}

export default new checkoutStepOnePage


