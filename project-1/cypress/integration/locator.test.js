/// <reference types="cypress"/>

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements")
  })

  it("locating elements with get", () => {
    cy.log("get all the elements by tag name")
    cy.get("button")

    cy.log("get all the elements by tag name")
    cy.get("button")
  })
})
