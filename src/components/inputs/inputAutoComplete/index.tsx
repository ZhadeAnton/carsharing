import React, { useState, useEffect } from 'react'

import './styles.scss'
import { ReactComponent as Close } from '../../../assets/SVG/close.svg'
import { ITown, IPickUp } from '../../../interfaces/mapInterfaces'
import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { clearPickUp, clearTown } from '../../../redux/location/locationActionCreators'
import { isAddressIncludesValue } from '../../../utils/mapUtils'
import useSearchLocation from '../../../hooks/useSearchLocation'

interface Props {
  array: Array<ITown | IPickUp>,
  value: string,
  placeholder: string,
  isDisable?: boolean,
  type: 'town' | 'pickUp',
  isForceClear?: boolean,
  onChange: (value: string) => void
}

export default function InputAutoComplete(props: Props) {
  const dispatch = useAppDispatch()
  const useSetLocation = useSearchLocation()
  const [value, setValue] = useState(props.value)
  const [focused, setFocused] = useState(false)
  const [isOpenList, setIsOpenList] = useState(false)

  useEffect(() => {
    if (props.isForceClear) setValue('')
  }, [props.isForceClear])

  const handleClickByItem = (item: any) => {
    setIsOpenList(false)
    setFocused(false)

    if (props.type === 'town') {
      setValue(item.name)
      useSetLocation(item.name)
      props.onChange(item.name)
    } else {
      setValue(item.address)
      props.onChange(item.address)
    }
  }

  const handleChange = (e: any) => {
    setValue(e.target.value)
    setIsOpenList(true)
  }

  const handleClear = () => {
    props.type === 'pickUp' ? dispatch(clearPickUp()) : dispatch(clearTown())
    setValue('')
    props.onChange('')
    setIsOpenList(false)
    setFocused(false)
  }

  const handleFilterArray = (item: any) => {
    if (props.type === 'town') return isAddressIncludesValue(item.name, value)
    if (props.type === 'pickUp') return isAddressIncludesValue(item.address, value)
  }

  return (
    <div
      className='input-primary'
      onClick={() => setIsOpenList(true)}
    >
      <input
        className={ `input-autocomplete__input
          input-autocomplete__input${!props.isDisable ? '' : '-disable'}`}
        value={value}
        placeholder={props.placeholder}
        disabled={props.isDisable}
        onFocus={() => setFocused(true)}
        onChange={(e: any) => handleChange(e)}
      />

      <span
        className='input-primary__close-btn'
        onClick={handleClear}
      >
        { value && <Close /> }
      </span>

      <div className='input-autocomplete__wrapper'>
        {
          isOpenList && !props.isDisable && focused &&
          <ul className='input-autocomplete__suggetion-list'>
            {
              props.array
                  .filter((item: any) => handleFilterArray(item))
                  .map((item: any, index: number) => (
                    <li
                      key={index}
                      className='input-autocomplete__suggetion-list--item'
                      onClick={() => handleClickByItem(item)}
                    >
                      {
                        <span>
                          { props.type === 'town' ? item.name : item.address }
                        </span>
                      }
                    </li>
                  ))
            }
          </ul>
        }
      </div>
    </div>
  )
}
