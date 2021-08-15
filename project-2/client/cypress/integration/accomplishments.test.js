/// <reference types="cypress" />

describe("Accomplishments dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments")
  })

  it("should display in-appropriate error when test or accomplishment include giraffe", () => {
    cy.get('[placeholder="Title"]').type("This is my accomplishment input")
    cy.get('[placeholder="My accomplishment..."]').type("I pet a giraffe")
    cy.get('[type="checkbox"]').click()
    cy.get("button").contains("Submit Accomplishment").click()
    cy.contains("Your content is not appropriate").should("be.visible")
  })

  it("should display in-appropriate error when test or accomplishment include giraffe with Mock http", () => {
    cy.intercept("POST", "http://localhost:4000/", (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your content is bad!!",
        })
      })
    })
    cy.get('[placeholder="Title"]').type("This is my accomplishment input")
    cy.get('[placeholder="My accomplishment..."]').type("I pet a giraffe")
    cy.get('[type="checkbox"]').click()
    cy.get("button").contains("Submit Accomplishment").click()
    cy.contains("Your content is bad!!").should("be.visible")
  })
})
