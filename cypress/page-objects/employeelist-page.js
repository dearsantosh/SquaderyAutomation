/// <reference types="Cypress"/> 

export class EmployeeList{

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

    //Click Manage
    ClickManage(){
        cy.get('.ft-manage').click()
    }

    //Click employee list
    ClickEmployeelist(){
        cy.wait(2000)
        cy.get('[href="/manage/employee"] > .text').click()
        cy.wait(2000)
    }

    //Click advance search
    ClickAdvancesearch(){
        cy.get('.ft-settings').click()
        cy.wait(1000)
    }

    //Filter

    //Filter by jobtype
    FilterByjobtype(){
        //Both
        cy.get(':nth-child(1) > .custom-control-label').click()
        cy.wait(1000)
        cy.get('.btn-primary').click()
        cy.wait(1000)

        //Full time
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .custom-control-label').click()
        cy.wait(1000)
        cy.get('.btn-primary').click()
        cy.wait(1000)

        //Part time
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .custom-control-label').click()
        cy.wait(1000)
        cy.get('.btn-primary').click()
        cy.wait(3000)
        cy.get('.pl-0 > .btn').click()
    }

    //Filter by availability
    Filterbyavailability(){
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > [style="align-items: center;"] > span').click()
        cy.get('#react-select-2-listbox').contains('Engaged').click({force: true});
        cy.get('.btn-primary').click()
        cy.wait(3000)
        cy.get('.pl-0 > .btn').click()
    }

    //Filter by squad
    Filterbysquad(){
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > [style="align-items: center;"]').click()
        cy.wait(1000)
        cy.get('#react-select-3-listbox').contains('ML Team').click({force: true});
        cy.get('.btn-primary').click()
        cy.wait(3000)
        cy.get('.pl-0 > .btn').click()
    }

    //Filter by department
    Filterbydepartment(){
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > [style="align-items: center;"]').click()
        cy.wait(1000)
        cy.get('#react-select-4-listbox').contains('AI Education').click({force: true});
        cy.get('.btn-primary').click()
        cy.wait(3000)
        cy.get('.pl-0 > .btn').click()
    }

    //Filter by roles
    Filterbyroles(){
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > [style="align-items: center;"]').click()
        cy.wait(1000)
        cy.get('#react-select-5-listbox').contains('AI Education').click({force: true});
        cy.get('.btn-primary').click()
        cy.wait(3000)
        cy.get('.pl-0 > .btn').click()
    }

    //Filter by employee level
    Fliterbyemployeelevel(){
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(6) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > [style="align-items: center;"]').click()
        cy.wait(1000)
        cy.get('#react-select-6-listbox').contains('Trainee').click({force: true});
        cy.get('.btn-primary').click()
        cy.wait(3000)
        cy.get('.pl-0 > .btn').click()
    }

    //Filter by assigned device
    Filterbyassigneddevice(){
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(7) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > [style="align-items: center;"]').click()
        cy.wait(1000)
        cy.get('#react-select-7-listbox').contains('Cloud Instances,iphone').click({force: true})
        cy.get('.btn-primary').click()
        cy.wait(3000)
        cy.get('.pl-0 > .btn').click()
    }

    //Filter by skills
    Filterbyskills(){
        cy.get('.ft-settings').click()
        cy.wait(1000)
        cy.get(':nth-child(8) > .form-group > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > [style="align-items: center;"]').click()
        cy.wait(1000)
        cy.get('#react-select-8-listbox').contains('A/B Testing').click({force: true})
        cy.get('.btn-primary').click()
        cy.wait(3000)
        cy.get('.pl-0 > .btn').click()
    }

    //Sort

    //Sort by employee
        Sortbyemployee(){
        cy.wait(4000)
        cy.get(':nth-child(1) > .td-sm > .sort-data > .ft-sort').click()
        cy.wait(4000) 
        cy.get(':nth-child(1) > .td-sm > .sort-data > .ft-sort').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > .td-sm > .sort-data > .ft-sort').click()
        }

    //Sort by role
    Sortbyrole(){
        cy.wait(4000)
        cy.get(':nth-child(2) > .td-sm > .sort-data > .ft-sort').click()
        cy.wait(4000)
        cy.get(':nth-child(2) > .td-sm > .sort-data > .ft-sort').click()
        
    }

    //Sort by Job type
    Sortbyjobtype(){
        cy.wait(4000)
        cy.get('.td-xs > .sort-data > .ft-sort').click()
        cy.wait(4000)
        cy.get('.td-xs > .sort-data > .ft-sort').click()
    }

    //Sort by current project
    Sortbycurrentproject(){
        cy.wait(4000)
        cy.get(':nth-child(4) > .td-sm > .sort-data > .ft-sort').click()
        cy.wait(4000)
        cy.get(':nth-child(4) > .td-sm > .sort-data > .ft-sort').click()
     }

    //Horizontal scroll
    Horizontalscroll(){
        cy.wait(2000)
        cy.get('.th__mh-10').scrollTo('topRight')
     }

    //Sort by Skills
    Sortbyskils(){
        cy.wait(4000)
        cy.get('#root > section > div > div > div > div:nth-child(2) > div > div > table > thead > tr > th:nth-child(6) > div > span > i').click()
        //cy.wait(4000)
        //cy.get('#root > section > div > div > div > div:nth-child(2) > div > div > table > thead > tr > th:nth-child(6) > div > span > i').click()  
        
    }

    //Sort by experience
    Sortbyexperience(){
        cy.wait(4000)
        cy.get(':nth-child(7) > .td-sm > .sort-data > .ft-sort')
        cy.wait(4000)
        cy.get(':nth-child(7) > .td-sm > .sort-data > .ft-sort')
    }
}
