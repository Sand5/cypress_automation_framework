/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('.info_links_footer > li:nth-of-type(5)').click();
    cy.xpath("//*[@id='ContactUsFrm_first_name']").type("Sam");
    cy.get('#ContactUsFrm_email').type("Sam@test.com");
    cy.get('textarea#ContactUsFrm_enquiry').type("This is just a test");
    cy.get("button[title='Submit']").click();
    cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!');
  });
});
