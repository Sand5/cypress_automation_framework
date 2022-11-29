/// <reference types="cypress" />

describe("Handling IFrame & Modals", () => {
  it("Handle webdriver iframe and modal", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

    cy.get('#frame').then($iframe =>{
     const body = $iframe.contents().find('body');
     cy.wrap(body).as('iframe');
    })
     cy.get("@iframe").find("#button-find-out-more b").click();
  });
});
