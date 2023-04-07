import { createRoot } from 'react-dom'
import { screen } from '@testing-library/react'
import Greeting from './Greeting'

test('render Hello World as a text', () => {
  // Arrange
  const container = document.createElement('div')
  createRoot(container).render(<Greeting />)

  // Act
  // ...nothing

  // Assert
  const helloWorld = screen.getByText('Hello World!')
  expect(helloWorld).toBeInTheDocument()
})
