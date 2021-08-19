import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Slider from '../components/slider/index'
import Arrow from '../components/slider/sliderArrow/index'
import SliderDots from '../components/slider/sliderDots/index'

const testSlides = [
  {
    background: 'img',
    title: 'Бесплатная парковка',
    text: `Оставляйте машину наплатных парковках.`,
    buttonTitle: 'Подробнее',
    buttonColor: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
  },
  {
    background: 'img',
    title: 'Бесплатная парковка',
    text: `Оставляйте машину наплатных парковках.`,
    buttonTitle: 'Подробнее',
    buttonColor: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
  },
  {
    background: 'img',
    title: 'Бесплатная парковка',
    text: `Оставляйте машину наплатных парковках.`,
    buttonTitle: 'Подробнее',
    buttonColor: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
  }
]

const handleClick = jest.fn()
const handleDotClick = jest.fn()

describe('slider test', () => {
  it('should correctly render slides to the screen', () => {
    const { container, getAllByTestId } = render(
        <Slider slides={testSlides} />
    )

    const slides = getAllByTestId('slide')

    expect(container.firstChild).toHaveClass('slider')
    expect(slides.length).toBe(3)
    expect(slides[0]).toHaveTextContent('Бесплатная парковка')
    expect(slides[0]).toHaveTextContent(/подробнее/i)
    expect(slides[0]).not.toHaveTextContent('парковка Бесплатная')
  })
})

describe('slider arrows', () => {
  it('slider arrow should correctly call handler', () => {
    const { queryByTestId } = render(
        <Arrow handleClick={handleClick} />
    )

    const arrow = queryByTestId('slider-arrow')

    expect(arrow).toBeInTheDocument()
    expect(handleClick).toHaveBeenCalledTimes(0)

    userEvent.click(arrow)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

describe('slide dots', () => {
  it('should correctly render dots', () => {
    const { queryAllByTestId } = render(
        <SliderDots slides={testSlides} setSlide={handleDotClick}/>
    )

    const dots = queryAllByTestId('slider-dot')

    expect(dots.length).toBe(3)
    expect(dots[0]).toBeInTheDocument()
    expect(dots[0]).toHaveClass('slider-dot')
    expect(dots[0]).not.toHaveTextContent()

    userEvent.click(dots[1])

    expect(handleDotClick).toHaveBeenCalledTimes(1)
    expect(handleDotClick).not.toHaveBeenCalledTimes(2)
  })
})
