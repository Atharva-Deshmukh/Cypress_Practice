describe("Workflow for login verification", () => {

before(() => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  )
})

  it("test 1: title of the web page should be OrangeHRM", () => {
    cy.waitUntil(() => cy.get('.orangehrm-login-logo img').should('be.visible'), {
      timeout: 6000,
      interval: 1000
    });
    cy.title().should('eq', 'OrangeHRM');
  });
});
