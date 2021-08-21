import React from 'react'

import './styles.scss'
import useToggle from '../../hooks/useToggle'

export default function LanguagePicker() {
  const [isEnglish, setIsEnglish] = useToggle()

  return (
    <div
      className='language-picker'
      onClick={setIsEnglish}
    >
      <h6 className='language-picker__title'>
        { isEnglish ? 'Eng' : 'Rus' }
      </h6>
    </div>
  )
}
