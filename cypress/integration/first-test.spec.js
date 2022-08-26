
  describe('Page Visit Test', () => {
    
    //pagelogin
    it('Login to webpage', () => {
        cy.visit('https://appshell.qa.fleetcomplete.dev/')

                    cy.wait(4000)


       cy.get('#username').type('tesimineyks@myself.com')

      cy.get('#password').type('trialWork!73$')

        cy.get('#kc-login').click({force:true})

      })
  
  it('Exercise 1 Geofences',()=>{



    cy.wait(5000)

    //this had do be done as on viewport save button wasn't in DOM, gave error so this approach worked.
    cy.viewport(1000, 1200) 


   cy. contains('Geofences'). click()

   cy.wait(3000)
   cy. get('.add-new-button > .k-button > .shared-icon > svg'). click()
   
   cy.wait(3000)
//new geofence 
   cy. contains('Create new geofence'). click()


   cy.get('.name-container >.k-form-field > div >.k-state-empty').type('TestGeo')

//location box typing adress
   cy.get('.location-container').type('vasara 5,tart').click()

   cy.wait(3000)
   cy.get('.category-items-container > :nth-child(1)').click()

//checkbox
   cy.get('.k-form-field-checkbox-wrap'). click()

   cy.get('.k-mt-0 > div > .t-body').click()
   cy.contains('typeThree').click()

//description
cy.get('.description-area > .k-form-field > div > .k-state-empty').type('This is some description')


//save
//cy.get('.k-dialog-buttongroup > .k-button-solid-primary').click({force: true})

cy.contains('Save').click()

        cy.wait(1000)

})
  
  

/*
it('Exercise 2 Roles', () => {
    cy.wait(3000)


    cy. get('[data-e2e-primary-nav-item="features.settings"] > .menu-item'). click()

    cy.wait(3000)

cy.get('[data-kendo-menu-index="3"] > shared-routing-menu-item.ng-star-inserted > .k-link').click()

cy.wait(4000)
*/

/*cy.get('.shared-loading-indicator > .btn').click()
        cy.get('#name').type('TestROLE')

*/



})






    


    
   //cy. contains('Geofence name'). type('TestGeo')

   //cy. contains('Location'). type('vasara 5,tart')

   //cy.contains('Geofence Type').scrollIntoView()

   //
