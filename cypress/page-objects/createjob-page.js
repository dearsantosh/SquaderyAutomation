/// <reference types="Cypress"/> 

export class CreateJob{

    //Visit URL
    navigate(){
        cy.visit('https://fusemachines-dev.squadery.com/login')

    }
    
    //Login Process
    LoginProcess(){
         //cy.visit('https://fusemachines-dev.squadery.com/login')
         cy.wait(2000)
         cy.get('input[name=email]').should('be.visible').should('be.enabled').type('testapr6@yopmail.com') 
         cy.get('input[name=password]').should('be.visible').should('be.enabled').type('Test@123')
         cy.get("[type='submit']").should('be.visible').click()
         cy.wait(20000)
    }
 
     //Click on customer POV
     CustomerPov(){
         cy.get('form > :nth-child(2)').click()
         cy.wait(2000)
         cy.get("#root > section > div > div > div:nth-child(2) > div > div > form > button").click() 
         cy.wait(2000)
     }
 
     //Click on hire
     ClickHire(){
         cy.get('#root > section > article.wrapper > div > div > div > div:nth-child(2) > div > a:nth-child(1) > i').click() 
         cy.wait(5000)
     }

     //Click on Create Job
      /*
    CreateJOb(){
        cy.get('#root > section > div > div > div > div.row > div.my-2.text-right.col-sm-6 > a').click()
        cy.wait(5000) 
    }

    //Fill the add details form
    AddDetails(){
        cy.get('#title').type('Data Engineer') 
        cy.get('#jobCode').type('001') 
        cy.get('#location').type('Nepal') 
        cy.get('.css-b62m3t-container').type('Mid-Level{enter}')
        cy.get('.editor-class').type('This is another test')
       // cy.contains('Save and continue').click()
        cy.get('#root > section > article.wrapper > div > div > div > div.px-0.col-md-6 > form > div.form__footer.shadow-none.px-4.py-2 > div > div > button.btn.btn-primary.btn-lg').click()
    }
    */

    
}