describe('Page Visit Test', () => {
    
    
    it('Login to webpage', () => {
        cy.visit('https://appshell.qa.fleetcomplete.dev/')

                    cy.wait(3000)


       cy.get('#username').type('tesimineyks@myself.com')

      cy.get('#password').type('trialWork!73$')

        cy.get('#kc-login').click({force:true})

    })

      it('Exercise 2 Roles', () => {


        cy.wait(4000)
    //click on settings
    
        cy. get('[data-e2e-primary-nav-item="features.settings"] > .menu-item'). click()
    
        cy.wait(3000)
    
        //click on roles 
    
    cy.get('[href="/settings/roles"]').click()
        cy.wait(3000)
     
        // (add/+) button
        cy.get('.k-icon-button > .shared-icon > svg').click()

        cy.wait(2000)
        //cy.get('.shared-loading-indicator > .btn').click()

       // cy.get('title-container ng-tns-c770-8').click()
       cy.get('.k-input-inner').eq(1).type('TestROLE')

        //cy.get('[role="switch"]').eq(2).click()
        cy.get('.k-switch').eq(1).click({force: true})
        //cy.get('settings-accordion.ng-tns-c843-6 > .accordion-container > .header > .title > .title-container').click()
        
        cy.get('settings-accordion.ng-tns-c843-6 > .accordion-container > .body > .body-container').within(()=>{

                //cy.get('[type="checkbox"]').eq(8).click()

  
  
                /* for (var i = 0; i < 17; i++) {

                    if (i==7){
                    i=i+1;    
                    }
                    cy.get('[type="checkbox"]').click({ multiple: true })
                    
                
                 }
*/

//as the checkboxes are 17 in totall with starting index 0,
for (var i = 0; i < 18; i++) {
//i=18 because clicking twice for trips so one extra iteration to cover 17 checkboxes

    let x=i;            
    cy.get('[type="checkbox"]').eq(i).click()
    x++;
    if (i==4)
    {
        cy.get('[type="checkbox"]').eq(i).click()


    }

 }

                    //cy.get('input[type="checkbox"]').check('Trips')

  


})
       cy.contains('Save').click()

        cy.wait(1000)

})


    })