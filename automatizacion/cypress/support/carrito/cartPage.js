/// <reference types="cypress"/>

class cartPage {
    //--------------------------------------------------Buttons----------------------------------------------
    removeExactItemBtn(nombreProducto) {
        return '[data-test="cart-list"] [data-test="inventory-item"]:contains('+nombreProducto+') button'
    }

    continueShoppingBtn() {
        return '.cart_footer [data-test="continue-shopping"]'
    }

    checkoutBtn() {
        return '.cart_footer [data-test="checkout"]'
    }
    
    //--------------------------------------------------Inputs-----------------------------------------------
    
    //--------------------------------------------------Asserts----------------------------------------------

    cartListAssert() {
        return '[data-test="cart-list"]'
    }

    inventoryItemCartValidator() {
        return '[data-test="inventory-item"]'
    }

    exactItemCartValidator(nombreProducto) {
        return '[data-test="cart-list"] [data-test="inventory-item"]:contains('+nombreProducto+')'
    }

    nameExactItemCartAssert(nombreProducto) {
        return '[data-test="inventory-item"]:contains('+nombreProducto+') [data-test="inventory-item-name"]'
    }
    
    priceExactItemCartAssert(nombreProducto) {
        return '[data-test="inventory-item"]:contains('+nombreProducto+') [data-test="inventory-item-price"]'
    }

    //--------------------------------------------------Methods----------------------------------------------


}

export default new cartPage


