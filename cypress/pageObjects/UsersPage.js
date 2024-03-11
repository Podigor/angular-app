export default class UsersPage {
    _url = '/pages/tables/smart-table'
    _tableContainerSelector = 'nb-card'

    get addUserButton() {
        return cy.get(this._tableContainerSelector).find('.nb-plus')
    }

    get idInput() {
        return cy.get(this._tableContainerSelector).find('input[ng-reflect-name="id"]')
    }

    get firstNameInput() {
        return cy.get(this._tableContainerSelector).find('input[ng-reflect-name="firstName"]')
    }

    get lastNameInput() {
        return cy.get(this._tableContainerSelector).find('input[ng-reflect-name="lastName"]')
    }

    get userNameInput() {
        return cy.get(this._tableContainerSelector).find('input[ng-reflect-name="username"]')
    }

    get emailInput() {
        return cy.get(this._tableContainerSelector).find('input[ng-reflect-name="email"]')
    }

    get ageInput() {
        return cy.get(this._tableContainerSelector).find('input[ng-reflect-name="age"]')
    }

    get submitUserButton() {
        return cy.get(this._tableContainerSelector).find('.nb-checkmark')
    }


    get newUserData() {
        return cy.get(this._tableContainerSelector).find('tbody').find('tr').first().find('div.ng-star-inserted')
    }

    get newUserId() {
        return this.newUserData.eq(0)
    }

    get newUserFirstName() {
        return this.newUserData.eq(1)
    }

    get newUserLastName() {
        return this.newUserData.eq(2)
    }

    get newUserName() {
        return this.newUserData.eq(3)
    }

    get newUserEmail() {
        return this.newUserData.eq(4)
    }

    get newUserAge() {
        return this.newUserData.eq(5)
    }

    get editFirstUserButton() {
        return cy.get(this._tableContainerSelector).find('.nb-edit').first()
    }

    fillUserData({id, firstName, lastName, userName, email, age}) {
        this.idInput.type(id)
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.userNameInput.type(userName)
        this.emailInput.type(email)
        this.ageInput.type(age)
    }

    editUserData({id, firstName, lastName, userName, email, age}) {
        this.idInput.clear().type(id)
        this.firstNameInput.clear().type(firstName)
        this.lastNameInput.clear().type(lastName)
        this.userNameInput.clear().type(userName)
        this.emailInput.clear().type(email)
        this.ageInput.clear().type(age)
    }

    navigate() {
        cy.visit(this._url)
    }
}