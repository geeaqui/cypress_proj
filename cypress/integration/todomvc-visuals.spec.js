/// <reference types="cypress" />
import { TodoPage } from "../page-objects/todo-page";

describe('visual validation', () => {
    const todoPage = new TodoPage;

    beforeEach(() => {
        todoPage.navigate();
        cy.eyesOpen({
            appName: 'Demo App',
            testName: 'ToDO Test',
        })

    });

    // afterEach(() => {
    //     cy.eyesClose()
    // });

    afterEach(() => {
        cy.eyesClose();
        cy.reload();
      })

    it('should look good', () => {
        cy.eyesCheckWindow({
            tag: "empty todo list",
            target: 'window',
            fully: true
        });

        todoPage.addTodo('Clean Room');
        todoPage.addTodo('Learn Javascript');
        cy.eyesCheckWindow({
            tag: "Two todos",
            target: 'window',
            fully: true
        });

        cy.get('.todo-list li:nth-child(1) .toggle').click();
        cy.eyesCheckWindow({
            tag: "Mark as Completed",
            target: 'window',
            fully: true
        });

    });
})