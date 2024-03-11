import UsersPage from "../../cypress/pageObjects/UsersPage"

describe('Users', () => {

    const usersPage = new UsersPage()

    beforeEach(()=> {
        usersPage.navigate()
    })
    it('Checks that new user can be added', () => {
        const userData = {
            id: 1,
            firstName: 'Ihor',
            lastName: 'Podielnikov',
            userName: '@ipod',
            email: 'ipod@test.com',
            age: 39,
        } 
        usersPage.addUserButton.click()
        usersPage.fillUserData(userData)
        usersPage.submitUserButton.click()

        usersPage.newUserId.should('have.text', userData.id)
        usersPage.newUserFirstName.should('have.text', userData.firstName)
        usersPage.newUserLastName.should('have.text', userData.lastName)
        usersPage.newUserName.should('have.text', userData.userName)
        usersPage.newUserEmail.should('have.text', userData.email)
        usersPage.newUserAge.should('have.text', userData.age)  
    })
    it('Checks that existing user can be edited', () => {
        const userData = {
            id: 10,
            firstName: 'Jack',
            lastName: 'Man',
            userName: '@user',
            email: 'new@test.com',
            age: 31,
        } 
        usersPage.editFirstUserButton.click()
        usersPage.editUserData(userData)
        usersPage.submitUserButton.click()

        usersPage.newUserId.should('have.text', userData.id)
        usersPage.newUserFirstName.should('have.text', userData.firstName)
        usersPage.newUserLastName.should('have.text', userData.lastName)
        usersPage.newUserName.should('have.text', userData.userName)
        usersPage.newUserEmail.should('have.text', userData.email)
        usersPage.newUserAge.should('have.text', userData.age)  
    })
  })