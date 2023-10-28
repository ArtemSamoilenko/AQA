describe('UI_UX', () => {
    const InputData = [
      {
        Title: 'Just do it',
        Content: 'Congratulation, You did it',
      },
    ];
    InputData.forEach((data) => {
      it(`Detect ${data.Title}, ${data.Content}`, () => {
  //-------------------------------------------access
        cy.log('Enter the website');
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.log('1 choose Material Dark');
        cy.contains('Material Dark').click();
        cy.log('2 choose Modal & Overlays');
        cy.contains('Modal & Overlays').click();
        cy.log('3 choose Toastr');
        cy.get('[title="Toastr"]').click();
        cy.log('4 choose burger menu');
        cy.get('a.mat-ripple.sidebar-toggle.mat-ripple-unbounded').click();
  //-------------------------------------------DropDownPosition  
  cy.log('DropDownPosition')
  cy.get('nb-select.mat-ripple.position-select > button.select-button').click();
  cy.log('DropDownPosition')
  cy.get('#nb-option-24').click()  
  //-------------------------------------------DropDownToastType
  cy.log('DropDownToastType')
  cy.get('[matripple]nb-select[ng-reflect-selected="primary"] > button.select-button').click()  
  cy.log('DropDownPosition')
  cy.get('#nb-option-32').click() 
  //-------------------------------------------validate the fields
        cy.get('div:nth-child(1) > div:nth-child(2) > input').clear().type(data.Title);
        cy.get('div:nth-child(1) > div:nth-child(2) > input').should('have.value', data.Title);
        cy.get('form > div > input').clear().type(data.Content);
        cy.get('form > div > input').should('have.value', data.Content);
  //-------------------------------------------validate the counter
        let value = 1900;
        let targetValue = 1000;
        cy.get('input[name="timeout"]').clear().type(value.toString());
        //используется, чтобы убедиться, что значение интерпретируется как строка.
        while (value > targetValue) {
          value -= 100;
          cy.get('input[name="timeout"]').clear().type(value.toString());                                           
        }
        cy.get('input[name="timeout"]').should('have.value', targetValue.toString());
        //убеждается, что значение в поле ввода соответствует targetValue после выполнения предыдущих операций.
  //-------------------------------------------ShowToast
  cy.get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click()
      });
    });
  });