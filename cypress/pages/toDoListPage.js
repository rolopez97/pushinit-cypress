class toDoListPage {
    elements = {
        toDoListLink: () => cy.get('#todolistlink'),
        taskInput: () => cy.get('#task'),
        sendTaskButton: () => cy.get("#sendTask"),
        completedTaskButton: () => cy.get("#completed"),
        deleteButton: () => cy.contains('button', 'Delete'),
        taskText: (text) => cy.contains(text)

    };

    clickToDoListLink() {
        this.elements.toDoListLink().click();
    }

    addTask(task){
        this.elements.taskInput().type(task);
        this.elements.sendTaskButton().click();
    }

    verifyTaskExists(task){
        this.elements.taskText(task).should('exist');
    }

    completeTask(task){
        this.elements.taskText(task).click();
        this.elements.completedTaskButton().click();
    }

    deletTask(task){
        this.elements.deleteButton().click();
        this.elements.taskText(task).should('not.exist');
    }


}

export default new toDoListPage();