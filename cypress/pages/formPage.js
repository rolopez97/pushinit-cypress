class formPage {
    elements = {
        formUtilsLink: () => cy.get('#formutilslink'),
        showDatePicker: () => cy.get('#showDatePicker'),
        datePicker: () => cy.get('#datePicker')

    };
    
    clickFormUtilsLink() {
        this.elements.formUtilsLink().click();
    }

    clickShowDatePicker() {
        this.elements.showDatePicker().click();
    }

    clearDate() {
    this.elements.datePicker().clear();
    }

    typeDate(date) {
    this.elements.datePicker().type(date);
    }
    
}

export default new formPage();