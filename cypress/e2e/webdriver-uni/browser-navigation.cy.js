/// <reference types="cypress" />

describe("Test Contact Us Form via WebDriver Uni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
      //Cypress code
      cy.visit("http://www.webdriveruniversity.com");
      cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
      cy.url().should("include", "contactus");
      cy.go("back");
      cy.reload();
      cy.go("forward");
      cy.url().should("include", "contactus");
    });

});