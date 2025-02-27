# Testing Documentation

## Setup

This project uses:

- [Vitest](https://vitest.dev/) as the test runner
- [Testing Library](https://testing-library.com/) for rendering and querying components
- [jest-dom](https://github.com/testing-library/jest-dom) for enhanced DOM element matchers

## Running Tests

```bash
# Run all tests
npm run test:unit

# Run tests with coverage
npm run test:unit
```

## Jest-DOM Matchers

Jest-DOM provides custom matchers that make your tests more readable and maintainable. Here are some of the most useful matchers:

### Element Presence

- `toBeInTheDocument()` - Checks if element is in the document
- `toBeVisible()` - Checks if element is visible

### Text Content

- `toHaveTextContent(text)` - Checks if element has specific text content

### Attributes

- `toHaveAttribute(name, value)` - Checks if element has specific attribute
- `toHaveClass(className)` - Checks if element has specific class

### Form Elements

- `toBeDisabled()` - Checks if form element is disabled
- `toBeEnabled()` - Checks if form element is enabled
- `toBeChecked()` - Checks if checkbox/radio is checked
- `toHaveValue(value)` - Checks if input has specific value

## Example Test

```javascript
import { render, screen } from '@testing-library/vue'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(MyComponent)

    // Find elements
    const heading = screen.getByRole('heading')
    const button = screen.getByRole('button')

    // Assert using jest-dom matchers
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hello World')
    expect(button).not.toBeDisabled()
    expect(button).toHaveClass('primary')
  })
})
```

## Testing Library Queries

When finding elements, prefer these queries in this order:

1. **Accessible Queries** (Best)

   - `getByRole` - Find by ARIA role
   - `getByLabelText` - Find form elements by label
   - `getByPlaceholderText` - Find input by placeholder
   - `getByText` - Find by text content

2. **Test ID Queries** (When necessary)
   - `getByTestId` - Find by `data-testid` attribute

For more information, see the [Testing Library documentation](https://testing-library.com/docs/queries/about).
