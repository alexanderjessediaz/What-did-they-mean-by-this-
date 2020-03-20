describe('Page loading', ()=> {
    it("loads the page", ()=> {
        cy.visit("http://localhost:3001")
    })
    
})

describe("see card", ()=> {
    it("shows card title", ()=> {
        cy.visit("http://localhost:3001/quotes")
        cy.get(".card_title a").should("have.length",1)
    })
})