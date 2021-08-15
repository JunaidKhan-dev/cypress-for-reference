/// <reference types="cypress" />

describe("Rewards dashboard", () => {
  beforeEach(() => {
    cy.visit("/rewards")
  })

  it("should display a list of rewards", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and(
        "contain",
        "1000 points for taking a cold shower for 10 straight days"
      )
  })

  it("should display a list of rewards with mock of http", () => {
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json",
    })

    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and(
        "contain",
        "1000 points for taking a cold shower for 10 straight days"
      )
  })
})
