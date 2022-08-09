describe('empty spec', function () {
    it('Go to crunchbase.com', function () {
    //   expect(true).to.equal(true)
      cy.visit('https://www.crunchbase.com/');
    //   cy.visit('http://www.google.com/');
    //   cy.url().should("include", "crunchbase");
    });
it('Click Advanced button', () => {
    cy.get('#mat-input-0').click()
cy.get('a[href*="discover/people"]').click()
cy.get('#mat-input-1').type('HiredScore')
//cy.get('#mat-autocomplete-0').first()
cy.get('mat-option').first().click()
cy.select('grid-row').contains('Athena Karp').click()
cy.url().should('eq', 'https://www.crunchbase.com/person/athena-karp')

});    

})