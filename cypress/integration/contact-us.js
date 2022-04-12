describe('Test contact-us form via webdriverUni', () => {
  it('Should be able to submit a successful submission via contact-us form', () => {
  cy.visit('/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]')
      .type('Yana');
    cy.get('input[name="last_name"]')
      .type('Pass');
    cy.get('input[name="email"]')
      .type('1424pass@gmail.com');
    cy.get('textarea[name="message"]')
      .type('Please, contact to me');
    cy.get('[type="submit"]')
      .click();

    cy.get('h1')
      .should('be.visible')
    cy.get('h1')
      .should('have.text', 'Thank You for your Message!')
  });

  it.only('Should not be able to submit a successful submission via contact-us form as all fields are required', () => {
    cy.visit('/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]')
      .type('Yana');
    cy.get('input[name="last_name"]')
      .type('Pass');
    cy.get('textarea[name="message"]')
      .type('Please, contact to me');
    cy.get('[type="submit"]')
      .click();
  });
});