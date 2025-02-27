// This file demonstrates Vitest globals usage
// ESLint should recognize these globals without errors

describe('Example test suite', () => {
	it('performs a simple test', () => {
		expect(1 + 1).toBe(2)
	})

	test('another way to write a test', () => {
		expect(true).toBe(true)
	})

	// Using beforeEach hook
	beforeEach(() => {
		// Setup code
	})

	// Using afterAll hook
	afterAll(() => {
		// Cleanup code
	})
})
