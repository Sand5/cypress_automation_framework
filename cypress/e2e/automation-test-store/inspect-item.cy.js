/// <reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
    it.only("Click on the first item using the item header", () => {
      cy.visit('https://www.automationteststore.com/');
      cy.get("[title='Skinsheen Bronzer Stick']").click().then((itemHeaderText) =>{
        console.log(`Selected the following item: ${itemHeaderText.text()}`)
      });
    });

    it("Click on the first item using the item index", () => {
      cy.visit('https://www.automationteststore.com/');
      cy.get(".fixed_wrapper").find(".prdocutname").get(0).click();
    });
  })
  

  