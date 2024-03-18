describe('Jsonplaceholder API tests', {
env: {
    API_URL: "https://jsonplaceholder.typicode.com"
}
},
() => {
    it('get post by id', () => {
        const postId = 1
        cy.api({
            url: `${Cypress.env("API_URL")}/posts/${postId}`
        }).as('getPostById')
        cy.get('@getPostById').its('status').should('eq', 200)
        cy.get('@getPostById').its('body.id').should('eq', postId)
    })
    it('get posts list', () => {
        cy.api({
            url: `${Cypress.env("API_URL")}/posts`
        }).as('getPostsList')
        cy.get('@getPostsList').its('status').should('eq', 200)
        cy.get('@getPostsList').its('body').should('be.an', 'array').and('not.be.empty')
        cy.get('@getPostsList').its('body').each(($item) => {cy.wrap($item).should('have.all.keys', 'userId', 'id', 'title', 'body')})
    })
    it('create new post', () => {
        const requestBody = {
            userId: 11,
            title: 'some user title',
            body: 'some user body',
        }
        cy.api({
            method: 'POST',
            url: `${Cypress.env("API_URL")}/posts`,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: requestBody
        }).as('createPost')
        cy.get('@createPost').its('status').should('eq', 201)
        cy.get('@createPost').its('body').should('contain', requestBody)
    })
    it('update post by id', () => {
        const updatePostId = 2
        const requestBody = {
            id: updatePostId,
            userId: 10,
            title: 'updated user title',
            body: 'updated user body',
        }
        cy.api({
            method: 'PUT',
            url: `${Cypress.env("API_URL")}/posts/${updatePostId}`,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: requestBody
        }).as('updatePost')
        cy.get('@updatePost').its('status').should('eq', 200)
        cy.get('@updatePost').its('body').should('deep.equal', requestBody)
    })
    it('delete post by id', () => {
        const deletePostId = 5
        cy.api({
            method: 'DELETE',
            url: `${Cypress.env("API_URL")}/posts/${deletePostId}`
        }).as('deletePostById')
        cy.get('@deletePostById').its('status').should('eq', 200)
        cy.get('@deletePostById').its('body').should('be.empty')
    })
  })