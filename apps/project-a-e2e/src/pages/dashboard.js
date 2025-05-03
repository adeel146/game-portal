class dashboard {
    // locators
    logoutButton = '.button--secondary'
    cards = '.card'
    top10ProductsText = 'div h1'
    firstProduct = '[data-test-id="2"]'

    shippingAndWarrantySection = '.product-detail__section:nth-child(2)'
    shippingAndWarrantySectionTitle = '.product-detail__section:nth-child(2) h3'
    shippingDetailText = '.product-detail__section:nth-child(2) p:nth-child(2)'
    warrantyDetailText = '.product-detail__section:nth-child(2) p:nth-child(2)'
    // Funtions

    verifyDashboardIsDisplayedSuccessfully() {
        cy.get(this.logoutButton).should('be.visible').invoke('text').then((buttonName)=>{
            expect(buttonName).to.eq('LogOut')
        })
        cy.get(this.top10ProductsText).should('be.visible').invoke('text').then((listTitle)=>{
            expect(listTitle).to.eq('Top 10 Products')
        })
        cy.get(this.cards).should('have.length',10);
    }
    clickOnProduct() {
        cy.get(this.firstProduct).should('be.visible').click();
    }
    verifyProductDetail() {
        cy.get(this.logoutButton).should('be.visible').invoke('text').then((buttonName) => {
            if (buttonName.trim() === 'LogOut') {
                cy.get(this.shippingAndWarrantySection).should('be.visible');
                cy.get(this.shippingAndWarrantySectionTitle)
                  .should('have.text', 'Shipping & Warranty');
                cy.get(this.shippingDetailText)
                  .should('have.text', 'Ships in 2 weeks');
                cy.get(this.warrantyDetailText)
                  .should('have.text', '1 year warranty');
            } else if (buttonName.trim() === 'LogIn') {
                cy.get(this.shippingAndWarrantySection).should('not.exist');
            }
        });
    }
    clickOnLogoutButton() {
        cy.get(this.logoutButton).should('be.visible').click();
    }

    }
    module.exports = new dashboard