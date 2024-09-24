/// <reference types="Cypress"/>

import{ EmployeeList } from "../../../page-objects/employeelist-page";
describe('EmployeeList', function () {
    const employeelist = new EmployeeList()

    before(() => {
        employeelist.navigate()
        employeelist.LoginProcess()
      });

      /*
      it('Empooyee Filter', function (){
       // employeelist.CustomerPov()
        employeelist.ClickManage()
        employeelist.ClickEmployeelist()
        employeelist.ClickAdvancesearch()
        employeelist.FilterByjobtype()
        employeelist.Filterbyavailability()
        employeelist.Filterbysquad()
        employeelist.Filterbydepartment()
        employeelist.Filterbyroles()
        employeelist.Fliterbyemployeelevel()
        employeelist.Filterbyassigneddevice()
        employeelist.Filterbyskills()
      });
      */

      it('Empooyee Sort', function (){
        employeelist.ClickManage()
        employeelist.ClickEmployeelist()
        //employeelist.Sortbyemployee()
        //employeelist.Sortbyrole()
        //employeelist.Sortbyjobtype()
        //employeelist.Sortbycurrentproject()
        employeelist.Horizontalscroll()
        employeelist.Sortbyskils()
        employeelist.Horizontalscroll()
        employeelist.Sortbyskils()
        employeelist.Horizontalscroll()
        //employeelist.Sortbyexperience()
      });

     /* 
     it('Sort by experience', function(){
        employeelist.Sortbyexperience()
      });
      */      
});