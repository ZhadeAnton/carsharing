import React, { useState } from 'react'

import './styles.scss'
import { ReactComponent as Close } from '../../../assets/SVG/close.svg'
import { ITown, IPickUp } from '../../../interfaces/mapInterfaces'

interface Props {
  array: Array<ITown | IPickUp>
}

export default function InputAutoComplete(props: Props) {
  const [value, setValue] = useState('')

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleClear = () => {
    setValue('')
  }

  return (
    <div className='input-primary'>
      <input
        className='input-autocomplete__input'
        value={value}
        onChange={(e: any) => handleChange(e)}
      />

      <span
        className='input-primary__close-btn'
        onClick={handleClear}
      >
        <Close />
      </span>

      <div className='input-autocomplete__wrapper'>
        <ul className='input-autocomplete__suggetion-list'>
          {
            props.array.map((item, index) => {
              return (
                <div
                  key={index}
                  className='input-autocomplete__suggetion-list--item'
                >
                  { item.name }
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
