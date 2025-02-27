// Test file for MainNav component
import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/layout/MainNav.vue'

describe('MainNav', () => {
	it('displays the company name', () => {
		render(MainNav)

		// Using jest-dom matchers
		const companyName = screen.getByText('Google Careers')
		expect(companyName).toBeInTheDocument()
		expect(companyName).toBeVisible()
	})

	it('has the correct structure', () => {
		render(MainNav)

		// Check if header exists and has the right classes
		const header = screen.getByRole('banner') // <header> element
		expect(header).toBeInTheDocument()
		expect(header).toHaveClass('w-full')

		// Check if the link exists
		const link = screen.getByRole('link')
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute('href', '/')
	})
})
