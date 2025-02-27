// Test file demonstrating jest-dom matchers
import { render, screen } from '@testing-library/vue'

// Simple Vue component for testing
const SimpleComponent = {
	template: `
    <div>
      <h1 class="title">Hello World</h1>
      <button disabled>Click me</button>
      <span data-testid="custom-element" title="Test title">Test</span>
      <input type="checkbox" checked />
    </div>
  `,
}

describe('DOM Testing with jest-dom', () => {
	beforeEach(() => {
		// Render the component before each test
		render(SimpleComponent)
	})

	test('heading has the correct text content', () => {
		const heading = screen.getByText('Hello World')
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveTextContent('Hello World')
	})

	test('button is disabled', () => {
		const button = screen.getByRole('button', { name: /click me/i })
		expect(button).toBeDisabled()
	})

	test('element has correct attributes', () => {
		const element = screen.getByTestId('custom-element')
		expect(element).toHaveAttribute('title', 'Test title')
	})

	test('checkbox is checked', () => {
		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeChecked()
	})

	test('heading has the correct class', () => {
		const heading = screen.getByRole('heading', { level: 1 })
		expect(heading).toHaveClass('title')
	})
})
