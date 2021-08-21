import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import HamburgerMenu from '../components/hamburgerMenu'

const handleClick = jest.fn()

describe('hamburger menu', () => {
  it('should correctly render with prop isOpen = false', () => {
    const { container, getAllByTestId } = render(
        <HamburgerMenu isOpen={false} />
    )

    // 3 hamburger lines
    const hamburgerLines = getAllByTestId('hamburger-line')

    expect(container.firstChild).toHaveClass('hamburger-menu')
    expect(hamburgerLines[0]).toBeInTheDocument()
    expect(hamburgerLines[0]).toHaveClass('hamburger-menu__line')
    expect(hamburgerLines[0]).not.toHaveClass('hamburger-menu__line-change')
  })

  it('should correctly react to isOpen prop', () => {
    const { getAllByTestId } = render(
        <HamburgerMenu isOpen={true} />
    )

    // 3 hamburger lines
    const hamburgerLines = getAllByTestId('hamburger-line')

    expect(hamburgerLines[0]).toHaveClass('hamburger-menu__line')
    expect(hamburgerLines[0]).toHaveClass('hamburger-menu__line-change')
    expect(hamburgerLines[1]).toHaveClass('hamburger-menu__line-change')
    expect(hamburgerLines[2]).toHaveClass('hamburger-menu__line-change')
  })

  it('should call recived function (handler)', () => {
    const { container } = render(
        <HamburgerMenu onClickByMenu={handleClick}/>
    )

    expect(handleClick).toHaveBeenCalledTimes(0)

    userEvent.click(container.firstChild)

    expect(handleClick).toHaveReturnedTimes(1)
    expect(handleClick).not.toHaveReturnedTimes(0)
    expect(handleClick).not.toHaveReturnedTimes(2)
  })
})
