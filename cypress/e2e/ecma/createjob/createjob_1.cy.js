/// <reference types="Cypress"/>

import{ CreateJob } from "../../../page-objects/createjob-page";

describe('CreateJob', function () {
  const createjob = new CreateJob()

  before(() => {
    createjob.navigate()
    createjob.LoginProcess()
  });
 
 it('Click customer POV', function (){
    createjob.CustomerPov()
    createjob.ClickHire()
  });

  

  
  /*before(() => {
    createjob.LoginProcess()
 })*/

 /*it('Happy path', function (){
    createjob.LoginProcess()
    createjob.CustomerPov()
    createjob.ClickHire()
    createjob.CreateJOb()
    createjob.AddDetails()

  });
  */

});