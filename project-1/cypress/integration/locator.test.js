/// <reference types="cypress"/>

describe.skip("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements")
  })

  it("locating elements with get", () => {
    cy.log("get all the elements by tag name")
    cy.get("button")

    cy.log("get only the first element in an array by tag name")
    cy.get("button").first()

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

  it("locating element with contains", () => {
    cy.log("get element by unique text contains")
    cy.contains("Unique Text")

    cy.log("get element by not unique text contains")
    // will only bring single result the first find
    cy.contains("Not Unique Text")

    cy.log("get element with type and contains")
    cy.contains("[type='submit']", "Not Unique Text")

    cy.log("get with element and then look for child Element with contains")
    cy.contains("form", "Not Unique Text")

    cy.log(
      "get all elements with get command and then filter with contain command"
    )

    cy.get("[type='submit']").contains("Not Unique Text")
  })

  it("locating elements or element with find", () => {
    // find only used to find the child element by chaining only!!!
    cy.log("get parent and then find the child elements")
    cy.get("#form-1").find("button")

    cy.log("get parent and then find the specific child element based on class")
    cy.get("#form-1").find(".btn-1")
  })
})
