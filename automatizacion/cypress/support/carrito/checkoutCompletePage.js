/// <reference types="cypress"/>

class checkoutCompletePage {
    //--------------------------------------------------Buttons----------------------------------------------

    backHomeBtn() {
        return '[data-test="checkout-complete-container"] [data-test="back-to-products"]'
    }
    
    //--------------------------------------------------Inputs-----------------------------------------------

    
    
    //--------------------------------------------------Asserts----------------------------------------------

    checkoutCompleteAssert() {
        return '[data-test="checkout-complete-container"]'
    }
    


    //--------------------------------------------------Methods----------------------------------------------


}

export default new checkoutCompletePage


