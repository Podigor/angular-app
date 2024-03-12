import LoginPage from "../../cypress/pageObjects/LoginPage"
import DashboardPage from "../../cypress/pageObjects/DashboardPage"

describe('Login', () => {

    const loginPage = new LoginPage()
    const dashboardPage = new DashboardPage()

    beforeEach(()=> {
        loginPage.navigate()
    })
    it('Checks that user can login with remember me option', () => {
        const userCredentials = {
            email: 'ipod@test.com',
            password: 'test123',
            rememberMe: true
        } 
        loginPage.fillUserCredentials(userCredentials)
        loginPage.loginButton.click()
        cy.url().should('eq', dashboardPage.dashboardPageUrl)
    })
    it('Checks that user can login without remember me option', () => {
        const userCredentials = {
            email: 'ipod2@test.com',
            password: 'test1234',
        } 
        loginPage.fillUserCredentials(userCredentials)
        loginPage.loginButton.click()
        cy.url().should('eq', dashboardPage.dashboardPageUrl)
    })
  })