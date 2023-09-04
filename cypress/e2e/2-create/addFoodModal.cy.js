/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create')
  })

  it('Get the ingredients data from supabase', () => {
    cy.request('https://uuypcueeqdetjykvktxi.supabase.co/rest/v1/ingredients?select=*').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.eq(3)
    })

    // cy.get('.todo-list li').should('have.length', 2)

    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })
})
