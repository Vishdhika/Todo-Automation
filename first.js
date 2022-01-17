describe('Todo App', () => {
    it('Visits Todos', () => {
      cy.visit('https://todomvc.com/examples/react/#/active')
    })

    it('Add new todo items', () => {
        const newItem = 'Make a todo list'
        cy.get('[class="new-todo"]').type(`${newItem}{enter}`)
        cy.get('.todo-list li')
          .should('have.text', newItem)
    })

    it('Crossed off an item as completed', () => {
      cy.contains('Make a todo list')
        .parent()
        .find('input[type=checkbox]')
        .check()      
    })

    it('Filter for uncompleted tasks', () => {
      cy.contains('Active').click()
      cy.contains('Make a todo list').should('not.exist')
    })

    it('Filter for completed tasks', () => {
      cy.contains('Completed').click()
      cy.get('.todo-list li')
        .should('have.text', 'Make a todo list')
    })

    it('Delete all completed tasks', () => {
      cy.contains('Clear completed').click()
    })    
})