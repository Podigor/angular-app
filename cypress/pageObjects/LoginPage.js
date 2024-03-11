export default class LoginPage {
    _loginPageUrl = '/auth/login'
    _landingPageUrl = '/pages/dashboard'

    get emailInput() {
        return cy.get('[id="input-email"]')
    }

    get passwordInput() {
        return cy.get('[id="input-password"]')
    }

    get rememberMeCheckbox() {
        return cy.get('.custom-checkbox')
    }

    get loginButton() {
        return cy.get('button').contains('Log In')
    }

    get landingPageUrl() {
        return Cypress.config('baseUrl') + this._landingPageUrl
    }

    fillUserCredentials({email, password, rememberMe = false}) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        if(rememberMe) this.rememberMeCheckbox.click()
    }

    navigate() {
        cy.visit(this._loginPageUrl)
    }
}