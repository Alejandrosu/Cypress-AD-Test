describe('template spec', () => {
	it('Gets me hired in AD', () => {
		cy.step('Go to the test website')
		cy.visit('https://automationexercise.com/')

		cy.step('Chooses a product')
		cy.get('[href="/product_details/1"]').click()

		cy.step('Adds a quantity of 30 to the product')
		cy.get('#quantity').clear().type('30')

		cy.step('Adds the product to the cart')
		cy.get('[class="btn btn-default cart"]').click()

		cy.get('[href="/view_cart"]').contains('View Cart').click()

		cy.step('Proceeds to checkout')
		cy.get('[class="btn btn-default check_out"]').click()

		cy.step('Adds an email and name to register')
		cy.get('[href="/login"]').contains('Register').click()

		cy.get('[data-qa="signup-name"]').type('HireMe')

		cy.emailRegister()

		cy.step('Adds the user information to create a new account')
		cy.get('[data-qa="signup-button"]').click()

		cy.get('#id_gender1').check()

		cy.get('[data-qa="password"]').type('Blabla@123')

		cy.get('[data-qa="days"]').select(7)

		cy.get('[data-qa="months"]').select(9)

		cy.get('[data-qa="years"]').select('1958')

		cy.get('[data-qa="first_name"]').type('Walter')

		cy.get('[data-qa="last_name"]').type('White')

		cy.get('[data-qa="address"]').type('308 Negra Arroyo Lane')

		cy.get('[data-qa="country"]').select('United States')

		cy.get('[data-qa="state"]').type('New Mexico')

		cy.get('[data-qa="city"]').type('Albuquerque')

		cy.get('[data-qa="zipcode"]').type('87104')

		cy.get('[data-qa="mobile_number"]').type('5555555555')

		cy.get('[data-qa="create-account"]').click()

		cy.step('Clicks on conitnue after creating an account')
		cy.get('[data-qa="continue-button"]').click()

		cy.step('Goes back to the cart')
		cy.get('[href="/view_cart"]').first().click()

		cy.step('Proceeds to checkout')
		cy.get('[class="btn btn-default check_out"]').click()

		cy.step('Adds a comment and proceeds to payment')
		cy.get('[class="form-control"]').type('Hi this is a comment')

		cy.get('[href="/payment"]').click()

		cy.step('Adds payment info')
		cy.get('[data-qa="name-on-card"]').type('Walter White')

		cy.get('[data-qa="card-number"]').type('4543703664123')

		cy.get('[data-qa="cvc"]').type('123')

		cy.get('[data-qa="expiry-month"]').type('09')

		cy.get('[data-qa="expiry-year"]').type('2032')

		cy.get('[data-qa="pay-button"]').click()

		cy.step('Continues with the purchase')
		cy.get('[data-qa="continue-button"]').click()

		cy.step('Logs out')
		cy.get('[href="/logout"]').click()

		cy.step('Logs in')
		cy.emailLogin()

		cy.get('[data-qa="login-password"]').type('Blabla@123')

		cy.get('[data-qa="login-button"]').click()

    cy.step('Go to contact us')
		cy.get('[href="/contact_us"]').click()

    cy.step('Fills out form')
		cy.get('[data-qa="name"]').type('Walter White')

		cy.get('[data-qa="email"]').type('Blabla@blabla.com')

		cy.get('[data-qa="subject"]').type('Ymir')

		cy.get('[data-qa="message"]').type(
			'To all subjects of Ymir. My name is Eren Yeager. Im using the power of the Founding Titan to address all of Ymirs subjects. The hardening of all walls present on Paradis has come undone, and all titans entrapped within them have started marching. My objective is to protect the people of Paradis, the place where I was born and raised. However, the world wishes for the annihilation of the people of Paradis. The hatred that has been swelling up for so long will certainly not end until not just the Paradisians, but all of Ymirs subject have been eliminated. I reject that wish. The wall titans shall trample all Earth outside of this island underfoot, until all life existing there has been exterminated from this world.'
		)

    cy.step('Submits the form')
		cy.get('[data-qa="submit-button"]').click()

    cy.step('Clicks on OK on the popup window')
		cy.on('window:confirm', () => true)

    cy.step('Logs out')
		cy.get('[href="/logout"]').click()
	})
})
