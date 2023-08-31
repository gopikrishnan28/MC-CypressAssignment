/// <reference types="Cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import MCTraining from "./ShoptoolPom"
var details = new MCTraining
beforeEach(() => {
    cy.fixture('data').as('MCData')
})


Given('I open the SHOPTOOL website', () => {
    cy.visit("https://shop.demoqa.com/my-account/")
    //cy.fixture('data').as('MCData')
})

When('I enter the username', function () {
    details.regUserName().type(this.MCData.id)//qweeeyyri123
})
When('I enter the email address', function () {
    details.regEmailId().type(this.MCData.email)//asbknnkrb@gmail.com
})
When('I enter the password', function () {
    details.regPassword().type(this.MCData.password)//"zxbnhhhm@1234567"
})
When('I click on unmasking password', () => {
    details.unmaskRegPassword().click()
})

When('I click on register button', () => {
    details.regButton().click()
})
Then('I should be in signed up page', () => {

})
When('I click on logout button', () => {
    details.logoutButton1().eq(0).click()
    cy.wait(2000)
})
Then('I should be logout of my account', () => {

})


Given('I open the SHOPTOOL', () => {
    cy.visit("https://shop.demoqa.com/my-account/")
})
When('I enter the username and the password', () => {
    details.loginUserName().type("qweeeyyri123")//(this.MCData.id)
    details.loginPassword().type("zxbnhhhm@1234567")
})
When('I click on the login button', () => {
    details.loginButton().click()
})
Then('I should be in the homepage', () => {

})
When('I go to the products page', () => {
    details.productPage().eq(0).click()
})
When('I select a product', () => {
    details.selectAProduct().eq(3).click({ force: true })
})
When('I select size and colour of the product', () => {
    details.selectSize().eq(0).select('White')
    details.selectColour().eq(1).select('S')
})
When('I select the quantity of the product', () => {
    details.quantityButton().clear().type('10')
    for (var i = 0; i <= 4; i++) {
        details.quantityPlusButton().click()
    }
    for (var i = 0; i <= 2; i++) {
        details.quantityMinusButton().click()
    }
})
When('I click to Add To CART', () => {
    details.addToCart().click()
})
Then('I go to my cart', () => {
    details.goTocart().click()
})
When('I  click on proceed to checkout', () => {
    details.proceedToCheckout().click()
})
When('I enter the billing details', function () {
    details.billFirstname().clear().type(this.MCData.fname)
    details.billLastname().clear().type(this.MCData.lname)

    //Country selection
    details.countyrScroll().type('I')
    cy.xpath('//span[@class="select2-results"]').find('.select2-results__option').each((el) => {
        var country = el.text()
        cy.log(country)
        if (country === 'Brazil') {
            cy.wrap(el).click()
        }
    })
    //Street address
    details.streetAddress1().clear().type(this.MCData.build)
    details.streetAddress2().clear().type(this.MCData.city)


    //State
    details.stateScroll().type('R')
    cy.xpath("//span[@class='select2-results']").find('.select2-results__options')
        .each((el) => {
            var state = el.text()
            cy.log(state)
            if (state === 'AcreCearáDistrito FederalEspírito SantoMaranhãoMato GrossoMato Grosso do SulMinas GeraisParáParaíbaParanáPernambucoRio de JaneiroRio Grande do NorteRio Grande do SulRondôniaRoraimaSanta CatarinaSergipe') {
                cy.wrap(el).click()
            }
        })

    details.billPincode().clear().type(this.MCData.pincode)
    details.billPhoneNo().clear().type(this.MCData.phone)
    //details.billEmail().type(this.MCData.email)
})
When('I click on the place order button', () => {
    details.termsCheckbox().click()
    details.placeOrderBtn().click()
})
Then('I verify the place order page', () => {
    details.verifyPlaceOrder().find('.woocommerce-thankyou-order-received').then((el) => {
        const confText = el.text()
        //cy.log(confText)
        expect(confText).to.equal('Thank you. Your order has been received.')
    })
})
Then('I logout of my account', () => {
    details.accessMyAccount().click({ force: true })
    details.logoutButton1().eq(0).click({ force: true })
})



