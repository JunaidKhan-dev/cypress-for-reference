/// <reference types="cypress"/>

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements")
  })

  it("locating elements with get", () => {
    cy.log("get all the elements by tag name")
    cy.get("button")

    cy.log("get all the elements by classNames")
    cy.get(".btn-with-class")

    cy.log("get all the elements with specific classes")
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']")
    cy.get("[class='Elements-btn btn-with-class']")

    cy.log("get all the elements by id")
    cy.get("[id='btn-with-id']")
    cy.get("#btn-with-id")

    cy.log("get all the elements by specific attr")
    cy.get("[type='submit']")

    cy.log("get all the buttons by tag name & class")
    cy.get("button.Elements-btn")

    cy.log("get all buttons by tag name & class & ID")
    cy.get("button.Elements-btn#btn-with-id")

    cy.log("get all elements by tag name & class & type attributes")
    cy.get("button.Elements-btn[type='submit']")

    cy.log("get all elements with specific data-test-id")
    cy.get("[data-cy='btn-id-1']")
    cy.getByTestId("btn-id-1")
  })
})
