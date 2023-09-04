class MCTraining {
    regUserName() {
        return cy.xpath("//input[@id='reg_username']")
    }
    regEmailId() {
        return cy.xpath("//input[@id='reg_email']")
    }
    regPassword() {
        return cy.xpath("//input[@id='reg_password']")

    }
    unmaskRegPassword() {
        return cy.get(".show-password-input").eq(1)//span[@class='show-password-input display-password']
    }
    regButton() {
        return cy.xpath("//button[@name='register']")
    }
    logoutButton1() {
        return cy.get('a[href*="https://shop.demoqa.com/my-account/customer-logout"]')
    }

    loginUserName() {
        return cy.xpath("//input[@id='username']")
    }
    loginPassword() {
        return cy.xpath("//input[@id='password']")

    }
    loginButton() {
        return cy.xpath("//button[@name='login']")
    }
    productPage() {
        return cy.xpath("//img[@class='custom-logo']")
    }
    selectAProduct() {
        return cy.xpath("//a[@class='noo-thumbnail-product hover-device']")
    }
    selectSize() {
        return cy.xpath("//select[@class='']")
    }
    selectColour() {
        return cy.xpath("//select[@class='']")
    }
    quantityButton() {
        return cy.xpath("//input[@class='input-text qty text']")
    }
    quantityPlusButton() {
        return cy.xpath("//button[@class='qty-increase']")
    }

    quantityMinusButton() {
        return cy.xpath("//button[@class='qty-decrease']")
    }
    addToCart() {
        return cy.xpath("//button[@class='single_add_to_cart_button button alt']")
    }
    goTocart() {
        return cy.xpath("//li[@class='menu-item noo-menu-item-cart minicart']")
    }
    proceedToCheckout() {
        return cy.xpath("//a[@class='checkout-button button alt wc-forward']")
    }
    billFirstname() {
        return cy.xpath("//input[@name='billing_first_name']")
    }
    billLastname() {
        return cy.xpath("//input[@name='billing_last_name']")
    }
    countyrScroll() {
        return cy.xpath("//span[@class='selection']").eq(0)

    }
    streetAddress1() {
        return cy.xpath("//input[@name='billing_address_1']")
    }
    streetAddress2() {
        return cy.xpath("//input[@name='billing_city']")
    }
    stateScroll() {
        return cy.xpath("//span[@class='selection']").eq(1)

    }
    billPincode() {
        return cy.xpath('//input[@name="billing_postcode"]')
    }
    billPhoneNo() {
        return cy.xpath('//input[@name="billing_phone"]')
    }
    billEmail() {
        return cy.xpath('//input[@name="billing_email"]')
    }
    placeOrderBtn() {
        return cy.xpath('//button[@name="woocommerce_checkout_place_order"]')
    }
    termsCheckbox() {
        return cy.xpath('//input[@name="terms"]')
    }
    verifyPlaceOrder() {
        return cy.xpath("//div[@class='noo-checkout-complete']")
    }
    accessMyAccount() {
        return cy.get("a[href*='https://shop.demoqa.com/my-account/']")

    }















}
export default MCTraining