/// <reference types="cypress" />

describe("Verify variables,cypress commands and jquery commands ", () => {
  it("Navigation to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log(`Found header text: ${headerText}`);
      expect(headerText).is.eql("Makeup");
    });
  });

  it("Validate properties of the contact us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      cy.log(`The first name form text is ${firstNameText}`);
      expect(firstNameText).to.contain("First name");
    });

    //Embedded commands (Closure)
  });
});
