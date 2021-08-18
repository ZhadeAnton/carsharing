import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import ButtonPrimary from '../components/buttons/buttonPrimary/index.tsx'

const handleButtonClick = jest.fn()

describe('ButtonPrimary component', () => {
  it('should correctly render recived title (as children)', () => {
    const { getByRole } = render(
        <ButtonPrimary>
          Test
        </ButtonPrimary>
    )

    const button = getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button-primary')
    expect(button).toHaveTextContent('Test')

    expect(button).not.toHaveTextContent('test')
  })

  it('should correctly react to the user click', () => {
    const { queryByRole } = render(
        <ButtonPrimary onClick={handleButtonClick}>
          Test
        </ButtonPrimary>
    )

    const button = queryByRole('button')

    userEvent.click(button)

    expect(handleButtonClick).toHaveBeenCalledTimes(1)
    expect(handleButtonClick).not.toHaveBeenCalledTimes(2)

    userEvent.dblClick(button)

    expect(handleButtonClick).toHaveBeenCalledTimes(3)
    expect(handleButtonClick).not.toHaveBeenCalledTimes(1)
  })
})
