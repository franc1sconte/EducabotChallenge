/// <reference types="cypress"/>

class checkoutSetpOnePage {
    //--------------------------------------------------Buttons----------------------------------------------

    continueBtn() {
        return '.checkout_buttons [data-test="continue"]'
    }
    finishBtn() {
        return '.cart_footer [data-test="finish"]'
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

    cartListAssert() {
        return '[data-test="cart-list"]'
    }
    inventoryItemCartAssert() {
        return '[data-test="inventory-item"]'
    }

    nameExactItemCartAssert(nombreProducto) {
        return '[data-test="inventory-item"]:contains(' + nombreProducto + ') [data-test="inventory-item-name"]'
    }

    priceExactItemCartAssert(nombreProducto) {
        return '[data-test="inventory-item"]:contains(' + nombreProducto + ') [data-test="inventory-item-price"]'
    }

    subTotalLabelAssert() {
        return '.summary_info [data-test="subtotal-label"]'
    }
    taxLabelAssert() {
        return '.summary_info [data-test="tax-label"]'
    }

    totalLabelAssert() {
        return '.summary_info [data-test="total-label"]'
    }


    //--------------------------------------------------Methods----------------------------------------------


}

export default new checkoutSetpOnePage


