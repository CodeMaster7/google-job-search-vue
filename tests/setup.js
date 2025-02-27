// Import jest-dom matchers for Vitest specifically
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/vue'
import { afterEach } from 'vitest'

// This file will be run before all tests
// It adds custom matchers from jest-dom to Vitest
// These matchers make it easier to test DOM elements

/*
  Examples of matchers you can now use in your tests:

  - toBeInTheDocument()
  - toBeVisible()
  - toBeEmpty()
  - toHaveTextContent()
  - toHaveAttribute()
  - toHaveClass()
  - toHaveStyle()
  - toBeChecked()
  - toBeDisabled()
  - etc.
*/

// Run cleanup after each test
// This removes the rendered components from the DOM
// to prevent tests from affecting each other
afterEach(() => {
	cleanup()
})
