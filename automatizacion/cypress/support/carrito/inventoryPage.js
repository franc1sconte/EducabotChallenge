/// <reference types="cypress"/>

class inventoryPage {
    //--------------------------------------------------Buttons----------------------------------------------
    addToCartBtn(nombreProducto) {
        return '[data-test="inventory-item"]:contains('+nombreProducto+') button'
    }
    miniCartBtn() {
        return '[data-test="primary-header"] [data-test="shopping-cart-link"]'
    }
    
    //--------------------------------------------------Inputs-----------------------------------------------
    
    //--------------------------------------------------Asserts----------------------------------------------

    inventoryContainerAssert() {
        return '[data-test="inventory-container"]'
    }
    
    inventoryItemValidator(nombreProducto) {
        return '[data-test="inventory-list"] [data-test="inventory-item"]:contains('+nombreProducto+')'
    }

    nameExactItemAssert(nombreProducto) {
        return '[data-test="inventory-item"]:contains('+nombreProducto+') [data-test="inventory-item-name"]'
    }

    priceExactItemAssert(nombreProducto) {
        return '[data-test="inventory-item"]:contains('+nombreProducto+') [data-test = "inventory-item-price"]'
    }

    miniCartBadgeAssert() {
        return '[data-test="primary-header"] [data-test="shopping-cart-badge"]'
    }

    

    //--------------------------------------------------Methods----------------------------------------------


}

export default new inventoryPage


