/// <reference types="cypress"/>

describe.skip("Habits Dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits")
  })

  it("should display modal when add button is clicked", () => {
    cy.get("button#habit-add-btn").contains("Add").click()
    cy.get(".modal-header").contains("Add a new habit").should("be.visible")
  })

  it("should display Habit card when new Habit is added", () => {
    cy.get("button#habit-add-btn").contains("Add").click()
    cy.get("[placeholder='Habit']").type("Drink a cup of water")
    cy.get("[type='button']").contains("Save Changes").click()
    cy.get(".HabitCard").contains("Drink a cup of water").should("be.visible")
    // and is same like should use after should
    cy.get(".HabitCard__completion-icon")
      .should("be.visible")
      .should("have.attr", "src")
      .and("match", /close/)
  })

  it("should toggle icon when habit card is clicked", () => {
    cy.get("button#habit-add-btn").contains("Add").click()
    cy.get("[placeholder='Habit']").type("Drink a cup of water")
    cy.get("[type='button']").contains("Save Changes").click()
    cy.get(".HabitCard").contains("Drink a cup of water").should("be.visible")
    // close image appear inside the card
    cy.get(".HabitCard__completion-icon")
      .should("be.visible")
      .should("have.attr", "src")
      .and("match", /close/)

    cy.get(".HabitCard").contains("Drink a cup of water").click()
    // check image icon appear after click the card
    cy.get(".HabitCard__completion-icon")
      .should("be.visible")
      .should("have.attr", "src")
      .and("match", /check/)
  })
})
