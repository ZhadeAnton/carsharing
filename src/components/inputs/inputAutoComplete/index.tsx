import React, { useState } from 'react'

import './styles.scss'
import { ReactComponent as Close } from '../../../assets/SVG/close.svg'
import { ITown, IPickUp } from '../../../interfaces/mapInterfaces'

interface Props {
  array: Array<ITown | IPickUp>,
  value: string | null,
  placeholder: string,
  isDisable?: boolean,
  onChange: (value: string) => void
}

export default function InputAutoComplete(props: Props) {
  const [isOpenList, setIsOpenList] = useState(false)

  const handleClickByItem = (itemName: string) => {
    props.onChange(itemName)
    setIsOpenList(false)
  }

  const handleChange = (e: any) => {
    props.onChange(e.target.value)
    setIsOpenList(true)
  }

  return (
    <div className='input-primary'>
      <input
        className='input-autocomplete__input'
        value={props.value!}
        placeholder={props.placeholder}
        disabled={props.isDisable}
        onChange={(e: any) => handleChange(e)}
      />

      <span
        className='input-primary__close-btn'
        onClick={() => props.onChange('')}
      >
        {props.value && <Close /> }
      </span>

      <div className='input-autocomplete__wrapper'>
        {
          props.value && isOpenList &&
          <ul className='input-autocomplete__suggetion-list'>
            {
              props.array.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='input-autocomplete__suggetion-list--item'
                  >
                    <span onClick={() => handleClickByItem(item.name)}>
                      { item.name }
                    </span>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>
    </div>
  )
}
