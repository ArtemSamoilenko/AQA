///<reference types = "cypress"/>


describe('Test#1', () => {     
      beforeEach(() => {                                 
      cy.log('validate_data')
      })                        
      it('Start', () => {
//-------------------------------------------Access
      cy.log('Enter to the web site')
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
      cy.log('1 choose Material Dark')
      cy.contains('Material Dark').click()
      cy.log('2 choose Modal & Overlays')
      cy.contains('Modal & Overlays').click() 
      cy.log('3 choose Toastr')
      cy.get('[title="Toastr"]').click()
      cy.log('4 choose burger menu')
      cy.get('a.mat-ripple.sidebar-toggle.mat-ripple-unbounded').click()
//-------------------------------------------DropDownPosition  
cy.log('DropDownPosition')
cy.get('nb-select.mat-ripple.position-select > button.select-button').click();
cy.log('top-left')
cy.get('#nb-option-24').click()  
//-------------------------------------------DropDownToastType
cy.log('DropDownToastType')
cy.get('[matripple]nb-select[ng-reflect-selected="primary"] > button.select-button').click()  
cy.log('DropDownPosition')
cy.get('#nb-option-32').click() 
//-------------------------------------------Title
cy.get('div:nth-child(1) > div:nth-child(2) > input').clear().type('Just do it');
//-------------------------------------------Content
cy.get('form > div > input').clear().type('Congratulation, You did it');
//------------------------------------------TimeToHiedTost
cy.get('input[name="timeout"]').clear().type('1000');
//------------------------------------------ShowToast
cy.get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition')
.click();
//------------------------------------------ValidPopUp
cy.get('nb-toast[ng-reflect-toast="[object Object]"] .title.subtitle').should('have.text', 'Toast 2. Just do it');
cy.get('nb-toast[ng-reflect-toast="[object Object]"] .title.subtitle').should('not.have.text', 'HI there!');
cy.get('nb-toast[ng-reflect-toast="[object Object]"] .message').should('have.text', 'Congratulation, You did it');
cy.get('nb-toast[ng-reflect-toast="[object Object]"] .message').should('not.have.text', 'I am cool toaster!');

cy.get('nb-toast[ng-reflect-toast="[object Object]"]').should('have.class', 'status-primary');

cy.get('nb-toastr-container > nb-toast > div.icon-container.ng-star-inserted').should('be.visible');

cy.get('nb-toastr-container > nb-toast').should('have.css', 'background-color', 'rgb(233, 29, 99)');

cy.get('nb-toastr-container > nb-toast').click('center', 'center')

// cy.get('nb-toastr-container > nb-toast').click(300, 40).should('be.visible');                не получается выполнить проверку
// cy.get('nb-toastr-container > nb-toast').click(300, 40).should('have.class', 'active');	не получается выполнить проверку

 
})    
})  
;