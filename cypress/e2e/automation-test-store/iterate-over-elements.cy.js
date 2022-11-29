/// <reference types="cypress" />

describe("Log information of all hair care products", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + ": " + $el.text());
    });
  });

  it.only("Add specific product to basket", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //    if($el.text().includes('Curls to straight Shampoo')) {
    //    cy.wrap($el).click();
    //   };
    // });
    cy.selectProduct('Curls to straight Shampoo');


  });
});