/// <reference types="cypress"/>

describe("Accomplishments Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments")
  })

  it("should showcase error if information is missing on submit the form", () => {
    cy.getByTestId("accomplishment-title-input").type("This is a Title")
    cy.getByTestId("accomplishment-input").type("This is a Accomplishment")
    cy.contains("Submit Accomplishment").click()
    cy.contains("Complete the items above to continue").should("be.visible")
  })

  it("should submit the form successfully after all info enter", () => {
    cy.getByTestId("accomplishment-title-input").type("This is a Title")
    cy.getByTestId("accomplishment-input").type("This is a Accomplishment")
    cy.get("[type='checkbox']").click()
    cy.contains("Submit Accomplishment").click()
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    )
  })

  it("should return back to accomplishment dashboard with empty inputs of form when click go back button", () => {
    cy.getByTestId("accomplishment-title-input").type("This is a Title")
    cy.getByTestId("accomplishment-input").type("This is a Accomplishment")
    cy.get("[type='checkbox']").click()
    cy.contains("Submit Accomplishment").click()
    cy.contains("Go Back").click()
    cy.getByTestId("accomplishment-title-input").should("have.value", "")
    cy.getByTestId("accomplishment-input").should("have.value", "")
    cy.get("[type='checkbox']").should("not.be.checked")
  })
})
