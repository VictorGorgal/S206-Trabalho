describe("Teste computer-database", () => {
	it("Teste criar computador", () => {
		goToPage()
		cy.get('#add').click()

		let computer_name = "Computer1"
		cy.get('#name').type(computer_name)
		cy.get('#introduced').type("2008-12-05")
		cy.get('#company').select("ASUS")
		cy.get('.primary').click()

		cy.get('.alert-message').should("contain.text", "Done !")
		cy.get('.alert-message').should("contain.text", computer_name + " has been created")
	})

	it("Teste criar computador sem nome", () => {
		goToPage()
		cy.get('#add').click()

		cy.get('#introduced').type("2008-12-05")
		cy.get('#company').select("ASUS")
		cy.get('.primary').click()

		cy.get('.error > .input > .help-inline').should("contain.text", "Failed to refine type")
	})

	it("Teste pesquisar por todos computadores ASUS", () => {
	searchComputer("ASUS")

		cy.get('tbody tr').should('have.length', 4);
	})
})

function goToPage() {
	cy.visit('https://computer-database.gatling.io/computers')
}

function searchComputer(computerName) {
	goToPage()
	cy.get('#searchbox').type(computerName)
	cy.get('#searchsubmit').click()
}
