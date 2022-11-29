/// <reference types="cypress" />

describe("Alias and invoke", () => {
  
  it("Validate a specific hair care product", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
    cy.get('@productThumbnail').its('length').should('be.gt',5);
    cy.get('@productThumbnail').should('include','Seaweed Conditioner');
  });

  it("Validate product thumbnail", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as('productThumbnail');
    cy.get("@productThumbnail").should('have.length',16);
    cy.get("@productThumbnail").find( ".productcart").invoke('attr','title').should('include','Add to Cart');
  });
});

it.only("Calculate total of normal and sale products", () => {
  cy.visit("https://www.automationteststore.com/");
  cy.get(".thumbnail").as('productThumbnail');
  cy.get("@productThumbnail").find('.oneprice').invoke('text').as('itemPrice');
  cy.get("@productThumbnail").find('.pricenew').invoke('text').as('saleItemPrice');

  let itemsTotal = 0;
  cy.get('@itemPrice').then($linkText => {
   let itemPrice = $linkText.split('$');
   let itemPricesTotal = 0;
   let i;
   for(i = 0; i < itemPrice.length;i++) {
    cy.log(itemPrice[i]);
    itemPricesTotal += Number(itemPrice[i]);
   }
   itemsTotal += itemPricesTotal;
   cy.log("Non sale price items total: " + itemPricesTotal);
  })
  cy.get('@saleItemPrice').then($linkText => {
    let saleitemPrice = $linkText.split('$');
    let saleitemsPriceTotal = 0;
    let i;
    for(i = 0; i < saleitemPrice .length;i++) {
     cy.log(saleitemPrice [i]);
     saleitemsPriceTotal  += Number(saleitemPrice[i]);
    }
    itemsTotal += saleitemsPriceTotal;
    cy.log("Non sale price items total: " + saleitemsPriceTotal);

   }).then(()=>{
     cy.log("The total price of all products: " +itemsTotal);
     expect(itemsTotal).to.eq(625.6);
   })

  }) 
 
