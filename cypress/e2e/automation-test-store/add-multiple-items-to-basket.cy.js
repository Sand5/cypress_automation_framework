import AutoStore_Homepage_Po from '../../support/page-objects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_Po from '../../support/page-objects/automation-test-store/AutoStore_HairCare_Po'
/// <reference types="cypress" />
const autoStore_Homepage_PO = new AutoStore_Homepage_Po();
const autoStore_HairCare_PO = new AutoStore_HairCare_Po

describe("Add multiple items to basket", () => {
    before(function () {
      cy.fixture("products").then(function (data) {
        globalThis.data = data;
      });
    });
  
    before(function () {
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    });
    it("Add specific items to basket", () => {
        autoStore_HairCare_PO.addHairCareProductsToBasket();
    });
  });